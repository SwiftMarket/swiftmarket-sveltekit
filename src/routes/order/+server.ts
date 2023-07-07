import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import { SECRET_STRIPE_KEY } from '$env/static/private';
import Stripe from 'stripe';
import type { CartItem } from '$lib/stores';

export const POST = (async ({ request }) => {
	const products: CartItem[] = await request.json();

	const pb = new PocketBase(PUBLIC_POCKETBASE_URL);

	const line_items = await Promise.all(
		products.map(async (product: CartItem) => {
			const item = await pb.collection('products').getOne(product.id);

			const finalPrice: number = item.sale_price === 0 ? item.price : item.sale_price;
			const roundedNumber = Number(Math.round(parseFloat(finalPrice * 100 + 'e' + 2)) + 'e-' + 2);

			return {
				price_data: {
					currency: 'usd',
					product_data: {
						name: item.name,
						images: [`${PUBLIC_POCKETBASE_URL}/api/files/products/${item.id}/${item.images[0]}`]
					},
					unit_amount: roundedNumber
				},
				quantity: product.quantity
			};
		})
	);

	try {
		const stripe = new Stripe(SECRET_STRIPE_KEY, {
			apiVersion: '2022-11-15'
		});

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			shipping_address_collection: { allowed_countries: ['US'] },
			line_items,
			mode: 'payment',
			success_url: `${request.url}?success=true`,
			cancel_url: request.url,
			phone_number_collection: {
				enabled: true
			}
		});

		return json({ stripeSession: session });
	} catch (err) {
		console.log(err);
		return new Response(null);
	}
}) satisfies RequestHandler;

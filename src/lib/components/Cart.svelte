<script lang="ts">
	import { clickoutside } from '@svelte-put/clickoutside';
	import { onDestroy } from 'svelte';
	import { cartItemsStore, removeFromCart, type CartItem } from '$lib/stores';
	import QuantityInput from '$lib/components/QuantityInput.svelte';
	import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
	import { onMount } from 'svelte';
	import { loadStripe } from '@stripe/stripe-js/pure';
	import { PUBLIC_STRIPE_KEY } from '$env/static/public';

	let stripe: any = null;

	export let cartOpened: boolean;
	let backgroundNode: HTMLElement;

	let cartItemsValue: CartItem[];
	let checkoutPrice: number;

	$: {
		let value = 0;
		for (const item of cartItemsValue) {
			if (item.salePrice === 0) {
				value += item.price * item.quantity;
			} else {
				value += item.salePrice * item.quantity;
			}
		}
		checkoutPrice = Math.round(value * 100) / 100;
	}

	const unsubscribe = cartItemsStore.subscribe((value) => {
		cartItemsValue = value;
	});

	async function handlePayment() {
		const res = await fetch('/order', {
			method: 'POST',
			body: JSON.stringify($cartItemsStore),
			headers: {
				'content-type': 'application/json'
			}
		});

		if (res !== null) {
			const response = await res.json();

			await stripe?.redirectToCheckout({
				sessionId: response.stripeSession.id
			});
		}
	}

	onMount(async () => {
		stripe = await loadStripe(PUBLIC_STRIPE_KEY);
	});

	onDestroy(unsubscribe);
</script>

<div
	class="fixed w-full max-w-lg right-0 inset-y-0 flex flex-col bg-white z-20"
	use:clickoutside={{ limit: { parent: backgroundNode } }}
	on:clickoutside={() => (cartOpened = false)}
>
	<div class="flex items-center justify-between mx-5 py-4">
		<h1 class="uppercase font-bold text-xl">
			{cartItemsValue.length}
			{cartItemsValue.length === 1 ? 'item' : 'items'}
		</h1>

		<button on:click={() => (cartOpened = !cartOpened)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	</div>

	<hr class="mb-5" />

	{#if cartItemsValue.length !== 0}
		<div class="flex-col">
			{#each $cartItemsStore as cartItem}
				<div class="flex mx-5 mb-5 gap-5">
					<img
						src="{PUBLIC_POCKETBASE_URL}/api/files/products/{cartItem.id}/{cartItem.thumbnail}"
						width="92"
						height="92"
						alt="{cartItem.name} thumbnail"
					/>

					<div>
						<a href="/products/{cartItem.slug}" target="_self">{cartItem.name}</a>
						<div class="flex gap-3 my-2">
							<QuantityInput bind:count={cartItem.quantity} mini={true} />
							<button
								on:click={() => removeFromCart(cartItem.slug)}
								class="font-light hover:underline"
							>
								Remove
							</button>
						</div>
					</div>

					<div class="flex flex-col grow">
						{#if cartItem.salePrice === 0}
							<p class="text-right">${Number(cartItem.price * cartItem.quantity).toFixed(2)}</p>
						{:else}
							<p class="text-right text-red-600">
								${Number(cartItem.salePrice * cartItem.quantity).toFixed(2)}
							</p>
							<p class="text-right text-gray-600 line-through">
								${Number(cartItem.price * cartItem.quantity).toFixed(2)}
							</p>
						{/if}
					</div>
				</div>
			{/each}
		</div>

		<div class="px-10 py-10 grow flex items-end">
			<button
				class="w-full h-12 text-black font-bold transition-colors duration-150 bg-yellow-300 focus:shadow hover:bg-yellow-500"
				on:click={() => handlePayment()}
			>
				Checkout ${checkoutPrice}
			</button>
		</div>
	{:else}
		<div class="flex flex-col justify-center h-full">
			<p class="text-center">Your cart is empty</p>
			<div class="px-10 py-10">
				<a href="/" target="_self">
					<button
						class="w-full h-12 text-black font-bold transition-colors duration-150 bg-yellow-300 focus:shadow hover:bg-yellow-500"
					>
						Start shopping
					</button>
				</a>
			</div>
		</div>
	{/if}
</div>

<div bind:this={backgroundNode} class="fixed inset-0 bg-black opacity-40 z-[15]" />

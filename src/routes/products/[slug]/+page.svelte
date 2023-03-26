<script lang="ts">
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import { addToCart } from '$lib/stores';
	import type { CartItem } from '$lib/stores';
	import QuantityInput from '$lib/components/QuantityInput.svelte';
	import ProductDetails from '$lib/components/ProductDetails.svelte';
	import ProductItem from '$lib/components/ProductItem.svelte';
	import { PUBLIC_POCKETBASE_URL } from '$env/static/public';

	export let data: any;
	let original_data = data;
	let product = data;
	let quantity = 1;

	$: {
		if (original_data !== data) {
			product = data;
			product.images = product.images;
			quantity = 1;
			original_data = data;
		}
	}

	function prepareToCart() {
		let item: CartItem;
		item = {
			id: product.id,
			name: product.name,
			slug: product.slug,
			thumbnail: `${product.images[0]}?thumb=100x100`,
			price: product.price,
			salePrice: product.sale_price,
			quantity: quantity
		};

		addToCart(item);
	}
</script>

<svelte:head>
	<title>{product.name} | SwiftMarket</title>
</svelte:head>

<div class="flex flex-col mx-3 py-10 gap-5 lg:mx-10 lg:flex-row lg:gap-8">
	<div class="basis-1/2 px-8">
		<ImageGallery productId={product.id} images={product.images} alt_text={product.name} />
	</div>
	<div class="basis-1/2 flex flex-col gap-8 px-8">
		<h1 class="font-extrabold text-4xl mt-3">{product.name}</h1>
		<div class="flex items-end gap-2">
			{#if product.sale_price === 0}
				<span class="text-3xl">${product.price}</span>
			{:else}
				<span class="text-3xl text-red-600">${product.sale_price}</span>
				<span class="text-xl text-gray-600 line-through">${product.price}</span>
			{/if}
		</div>

		<div class="flex flex-col gap-2">
			<p>Description</p>
			<p class="text-gray-600">
				{product.description}
			</p>
		</div>

		<div class="flex flex-col gap-2">
			<p>Quantity</p>
			<QuantityInput bind:count={quantity} />
		</div>
		<button
			class="w-full h-12 px-6 text-black font-bold transition-colors duration-150 bg-yellow-300 focus:shadow hover:bg-yellow-500"
			on:click={() => prepareToCart()}
		>
			Add to cart
		</button>
	</div>
</div>

<div class="flex flex-col-reverse px-10 gap-20 lg:flex-row">
	{#if product.details.length !== 0}
		<ProductDetails source={product.details} />
	{/if}

	{#if product.related_products.length !== 0}
		<div class="basis-1/2">
			<p class="font-medium text-lg uppercase">Related</p>

			<div class="grid gap-12 pr-5 py-5 grid-cols-2">
				{#each product.expand.related_products as relatedProduct (relatedProduct.id)}
					<ProductItem
						title={relatedProduct.name}
						image="{PUBLIC_POCKETBASE_URL}/api/files/{relatedProduct.collectionName}/{relatedProduct.id}/{relatedProduct
							.images[0]}"
						hoverImage={relatedProduct.images.length > 1
							? `${PUBLIC_POCKETBASE_URL}/api/files/${relatedProduct.collectionName}/${relatedProduct.id}/${relatedProduct.images[1]}`
							: ''}
						price={relatedProduct.price}
						salePrice={relatedProduct.sale_price}
						link="/products/{relatedProduct.slug}"
					/>
				{/each}
			</div>
		</div>
	{/if}
</div>

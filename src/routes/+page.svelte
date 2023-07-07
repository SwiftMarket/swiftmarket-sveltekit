<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import ProductItem from '$lib/components/ProductItem.svelte';
	import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
	import { Hr } from 'flowbite-svelte';

	export let data: any;
	let showcase = data.showcase;
	let banners = data.carousels;
</script>

<svelte:head>
	<title>mystore</title>
</svelte:head>

{#if banners.length !== 0}
	<Carousel {banners} />
{/if}

<div class="mx-3 md:mx-10">
	<section class="text-white-800 text-center lg:text-left lg:px-32 lg:py-5">
		<div class="grid lg:grid-cols-2 gap-6 xl:gap-12 justify-center">
			<div class="mb-6 lg:mb-0">
				<h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">This</h1>
				<p class="mt-4 text-lg lg:pl-3">Talk about your business, your products, or yourself</p>
			</div>
			<div class="mb-6 lg:mb-0 flex flex-col justify-center">
				<p class="text-white-500 text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eum iste repudiandae nisi modi
					placeat velit repellendus, tempore voluptates facere maiores praesentium harum deleniti
					voluptatibus laudantium quasi quos recusandae soluta ullam maxime quaerat debitis beatae
					accusamus reprehenderit! Eius veniam itaque numquam aliquid officiis nemo, quidem maxime,
					maiores aliquam officia voluptatum.
				</p>
			</div>
		</div>
	</section>
	<Hr class="my-auto mx-auto md:my-10 w-48 h-1" />

	{#each showcase as showsection}
		<h2 class="text-center text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight pt-6">
			{showsection.name}
		</h2>

		<div class="pt-6 pb-6 grid gap-12 grid-cols-2 lg:grid-cols-4 flex-auto">
			{#each showsection.expand.products as product (product.id)}
				<ProductItem
					title={product.name}
					image="{PUBLIC_POCKETBASE_URL}/api/files/{product.collectionName}/{product.id}/{product
						.images[0]}"
					hoverImage={product.images.length > 1
						? `${PUBLIC_POCKETBASE_URL}/api/files/${product.collectionName}/${product.id}/${product.images[1]}`
						: ''}
					price={product.price}
					salePrice={product.sale_price}
					link="/products/{product.slug}"
				/>
			{/each}
		</div>
	{/each}
</div>
<br /><br />

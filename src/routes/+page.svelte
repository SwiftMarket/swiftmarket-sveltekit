<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';
	import ProductItem from '$lib/components/ProductItem.svelte';
	import { PUBLIC_POCKETBASE_URL } from '$env/static/public';

	export let data: any;
	let showcase = data.showcase;
	let banners = data.carousels;
</script>

{#if banners.length !== 0}
	<Carousel {banners} />
{/if}

<div class="mx-3 md:mx-10">
	<section class="text-gray-800 text-center lg:text-left lg:px-32 lg:py-5">
		<div class="grid lg:grid-cols-2 gap-6 xl:gap-12 justify-center">
			<div class="mb-6 lg:mb-0">
				<h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">This is your shop</h1>
				<p class="mt-4 text-lg lg:pl-3">Talk about your business, your products, or yourself</p>
			</div>
			<div class="mb-6 lg:mb-0 flex flex-col justify-center">
				<p class="text-gray-500 text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eum iste repudiandae nisi modi
					placeat velit repellendus, tempore voluptates facere maiores praesentium harum deleniti
					voluptatibus laudantium quasi quos recusandae soluta ullam maxime quaerat debitis beatae
					accusamus reprehenderit! Eius veniam itaque numquam aliquid officiis nemo, quidem maxime,
					maiores aliquam officia voluptatum.
				</p>
			</div>
		</div>
	</section>

	{#each showcase as showsection}
		<h2 class="text-center font-extrabold text-6xl pt-20 pb-12 uppercase">{showsection.name}</h2>

		<div class="grid gap-12 grid-cols-2 lg:grid-cols-4">
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

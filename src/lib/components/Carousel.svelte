<script lang="ts">
	import Carousel from 'svelte-carousel';
	import CarouselDot from '$lib/components/CarouselDot.svelte';

	import { browser } from '$app/environment';
	import { PUBLIC_POCKETBASE_URL } from '$env/static/public';

	export let banners: any;

	let carousel: any; // for calling methods of the carousel instance
</script>

<div class="w-full aspect-[1.9/3] md:aspect-[16/7.7]">
	{#if browser}
		<Carousel
			let:loaded
			let:currentPageIndex
			let:pagesCount
			let:showPage
			bind:this={carousel}
			autoplay
			autoplayDuration={5000}
			autoplayProgressVisible
			arrows={false}
		>
			<div slot="dots" class="flex flex-wrap items-center justify-center gap-1 p-2">
				{#each Array(pagesCount) as _, pageIndex (pageIndex)}
					<CarouselDot
						active={currentPageIndex === pageIndex}
						number={pageIndex + 1}
						on:click={() => showPage(pageIndex)}
					/>
				{/each}
			</div>

			{#each banners as banner, imageIndex (banner)}
				<div class="relative">
					{#if loaded.includes(imageIndex)}
						<img
							src="{PUBLIC_POCKETBASE_URL}/api/files/{banner.collectionName}/{banner.id}/{banner.image}"
							class="w-full object-cover aspect-[2/3] md:aspect-[16/7]"
							width="2000"
							height="1000"
							draggable="false"
							alt={banner.heading}
						/>
					{/if}
					<div
						class="absolute inset-0 flex flex-col justify-center gap-5 mx-0 items-center md:mx-16 md:items-start"
					>
						<h1
							class=" text-5xl font-extrabold text-white uppercase center text-center md:text-left md:text-7xl"
						>
							{banner.heading}
						</h1>
						<a
							class="bg-yellow-300 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded"
							href={banner.link}
						>
							SEE PRODUCT
						</a>
					</div>
				</div>
			{/each}
		</Carousel>
	{/if}
</div>

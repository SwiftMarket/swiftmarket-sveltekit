<script lang="ts">
	import { PUBLIC_POCKETBASE_URL } from '$env/static/public';

	export let productId: string;
	export let images: any;
	export let alt_text: string;

	let original_image = images[0];

	let active_image = images[0];

	$: {
		if (original_image !== images[0]) {
			active_image = images[0];
			original_image = images[0];
		}
	}

	function setImage(src: string) {
		active_image = src;
		images = images;
	}

	function generateStyle(src: string) {
		let style = 'w-36';
		if (src === active_image) {
			style += ' outline outline-2';
		}
		return style;
	}
</script>

<div class="flex flex-col gap-5">
	<img
		class="w-full"
		src="{PUBLIC_POCKETBASE_URL}/api/files/products/{productId}/{active_image}"
		width="700"
		height="700"
		alt={alt_text}
	/>

	<div class="flex flex-wrap gap-3">
		{#each images as image}
			<button on:click={() => setImage(image)}>
				<img
					class={generateStyle(image)}
					src="{PUBLIC_POCKETBASE_URL}/api/files/products/{productId}/{image}"
					width="700"
					height="700"
					alt={alt_text}
				/>
			</button>
		{/each}
	</div>
</div>

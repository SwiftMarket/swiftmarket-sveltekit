<script lang="ts">
	import { page } from '$app/stores';
	import { emptyCart } from '$lib/stores';

	const url = $page.url;

	let orderSuccess = url.searchParams.get('success') === 'true';

	if (orderSuccess) {
		emptyCart();
	}
</script>

<svelte:head>
	<title>SwiftMarket Order</title>
</svelte:head>

{#if orderSuccess}
	<div
		class="px-4 py-3 leading-normal text-green-700 bg-green-100 rounded-lg flex flex-col items-center"
		role="alert"
	>
		<p class="p-20 font-bold text-5xl text-center">Order completed</p>
		<p class="pb-20 text-xl text-center">Thank you for your purchase! Expect us soon!</p>
	</div>
{:else}
	<div
		class="px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg flex flex-col items-center"
		role="alert"
	>
		<p class="p-20 font-bold text-5xl text-center">Oh no</p>
		<p class="pb-20 text-xl text-center">
			Seems like something went wrong because the <b>order failed</b>...
		</p>
	</div>
{/if}

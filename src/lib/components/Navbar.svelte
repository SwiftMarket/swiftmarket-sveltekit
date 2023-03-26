<script>
	import Cart from '$lib/components/Cart.svelte';
	import { cartItemsStore } from '$lib/stores';

	let cartOpened = false;
</script>

<nav class="sticky top-0 z-10 bg-[#282828] text-white">
	<div class="max-w-7xl mx-auto">
		<div class="flex justify-between items-center py-4">
			<div>
				<a class="mx-5 font-extrabold text-xl" href="/">SwiftMarket</a>
			</div>
			<div class="flex items-center gap-6 m-auto">
				<a class="hover:underline underline-offset-4" href="/shop/all">Shop</a>
				<a class="hover:underline underline-offset-4" href="#!">Blog</a>
			</div>
			<div class="flex mx-5 gap-6">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
					/>
				</svg>
				<button class="relative" aria-label="Cart" on:click={() => (cartOpened = !cartOpened)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
						/>
					</svg>
					{#if $cartItemsStore.length !== 0}
						<span class="absolute inset-0 object-right-top ml-3">
							<div
								class="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white"
							>
								{$cartItemsStore.length}
							</div>
						</span>
					{/if}
				</button>
			</div>
		</div>
	</div>
</nav>

{#if cartOpened}
	<Cart bind:cartOpened />
{/if}

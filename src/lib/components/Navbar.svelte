<script>
	import Cart from '$lib/components/Cart.svelte';
	import { cartItemsStore } from '$lib/stores';
	import { BottomNav, BottomNavItem } from 'flowbite-svelte';
	let cartOpened = false;
</script>

<nav class="max-md:hidden sticky m- top-0 z-10 bg-[#282828] text-white">
	<div class="max-w-7xl mx-auto">
		<div class="flex justify-between items-center py-4">
			<div>
				<a class="mx-5 font-extrabold text-xl" href="/">44 Stems Fake Store</a>
			</div>
			<div class="flex items-center gap-6 m-auto">
				<a class="hover:underline underline-offset-4" href="/shop/all">Shop</a>
				<a class="hover:underline underline-offset-4" href="/blog">Blog</a>
			</div>
			<div class="flex mx-5 gap-6">
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
<div class="md:hidden flex flex-col mx-3 gap-5">
	<BottomNav position="fixed" classInner="grid-cols-4 py-2 ">
		<a href="/">
			<BottomNavItem btnName="Home">
				<svg
					class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
					/>
				</svg>
			</BottomNavItem>
		</a>
		<a href="shop">
			<BottomNavItem btnName="Shop">
				<svg
					class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
					<path
						clip-rule="evenodd"
						fill-rule="evenodd"
						d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
					/>
				</svg>
			</BottomNavItem>
		</a>
		<BottomNavItem btnName="Cart" on:click={() => (cartOpened = !cartOpened)}>
			<button class="relative" aria-label="Cart">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
				>
					<path
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
		</BottomNavItem>
		<BottomNavItem btnName="Profile">
			<svg
				class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path
					clip-rule="evenodd"
					fill-rule="evenodd"
					d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
				/>
			</svg>
		</BottomNavItem>
	</BottomNav>
</div>

{#if cartOpened}
	<Cart bind:cartOpened />
{/if}

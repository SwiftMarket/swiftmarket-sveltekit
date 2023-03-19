<script lang="ts">
	import { onMount } from 'svelte';

	export let name = '';
	const headingId = 'head' + Math.random().toString(16).slice(2);
	const collapseId = 'id' + Math.random().toString(16).slice(2);

	onMount(async () => {
		await import('tw-elements');
	});
</script>

<h2 class="mb-0" id={headingId}>
	<button
		class="group relative flex w-full items-center py-4 font-medium text-lg"
		type="button"
		data-te-collapse-init
		data-te-collapse-collapsed
		data-te-target="#{collapseId}"
		aria-expanded="false"
		aria-controls={collapseId}
	>
		{name}
		<span
			class="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-6 w-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
			</svg>
		</span>
	</button>
</h2>
<div id={collapseId} class="!visible hidden" data-te-collapse-item aria-labelledby={headingId}>
	<div class="pb-4">
		<slot />
	</div>
</div>

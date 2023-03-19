<script>
	import SvelteMarkdown from 'svelte-markdown';

	export let source = '';
</script>

<div class="flex flex-col space-y-4 pb-10 basis-2/3" id="markdown-container">
	<SvelteMarkdown {source} />
</div>

<style>
	:global(#markdown-container h1) {
		font-size: 2.25rem;
		line-height: 2.5rem;
		font-weight: 700;
	}

	:global(#markdown-container h2) {
		font-size: 1.875rem;
		line-height: 2.25rem;
		font-weight: 700;
	}

	:global(#markdown-container h3) {
		font-size: 1.5rem;
		line-height: 2rem;
		font-weight: 700;
	}

	:global(#markdown-container ul) {
		list-style-type: disc;
		list-style-position: inside;
	}
</style>

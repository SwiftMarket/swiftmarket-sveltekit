<script>
	export let active = false;
	export let number = 0;
</script>

<button
	class="{active ? 'h-2 w-2 opacity-70' : 'h-1.5 w-1.5 opacity-50'}
        bg-[#5d5d5d] rounded-full transition-all"
	aria-label="Carousel Button {number}"
	on:click
/>

<script lang="ts">
	export let count = 1;
	export let mini = false;
	let previousCount = count;

	function handleClick(amount: number) {
		count += amount;
		if (count < 1) {
			count = 1;
		}
	}

	function validator(node: any, value: any) {
		return {
			update(value: any) {
				count = value === null || count < node.min ? previousCount : parseInt(value);
				previousCount = count;
			}
		};
	}
</script>

<div class={mini ? 'w-24' : 'w-44'}>
	<div class="flex w-full h-full {mini ? '' : 'py-3'} border-2">
		<input
			type="button"
			value="-"
			class="cursor-pointer font-semibold {mini ? 'text-xl' : 'text-2xl'} h-full w-20"
			on:click={() => handleClick(-1)}
		/>
		<input
			type="number"
			aria-label="Quantity"
			use:validator={count}
			step="1"
			min="1"
			bind:value={count}
			class="text-center {mini ? 'text-lg' : 'text-xl'} w-full outline-none"
		/>
		<input
			type="button"
			value="+"
			class="cursor-pointer font-semibold {mini ? 'text-xl' : 'text-2xl'} h-full w-20"
			on:click={() => handleClick(1)}
		/>
	</div>
</div>

<style>
	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
		appearance: textfield;
	}
</style>

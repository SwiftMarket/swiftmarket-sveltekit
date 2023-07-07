<script>
	import '$lib/app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>44 Stems</title>

	<meta
		name="description"
		content="44 Stems"
	/>
</svelte:head>

<Navbar />
<slot />
<Footer />

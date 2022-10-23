<script>
	import '../app.css';
	import { page } from '$app/stores';

	const title = 'hawari.dev';
	const description = 'Personal site of ordinary Software Engineer';
	const author = 'Fachri Hawari<fachri.hawari@gmail.com>';
	const origin = $page.url.origin;
	const logoUrl = origin + '/logo.png';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
	<meta name="author" content={author} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={origin} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={logoUrl} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={origin} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={logoUrl} />
</svelte:head>

<slot />

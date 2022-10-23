<script>
	const name = 'Fachri Hawari';
	const role = 'Full Stack JavaScript Instructor';
	const companyName = 'Hacktiv8';
	const companyHref = 'https://hacktiv8.com';

	const caption =
		'An ordinary Software Engineer. Teaching about web and mobile development with React / React Native.';

	const links = [
		{
			label: 'LinkedIn',
			href: 'https://linkedin.com/in/fachrihawari'
		},
		{
			label: 'Github',
			href: 'https://github.com/fachrihawari'
		},
		{
			label: 'Dev.to',
			href: 'https://dev.to/fachrihawari'
		},
		{
			label: 'Play Store',
			href: 'https://play.google.com/store/apps/dev?id=5645941415231056114'
		}
	];
</script>

<main class="h-screen bg-gray-50 flex flex-col items-center justify-center px-8 bg-gray-50">
	<div class="flex flex-col justify-center items-start max-w-2xl border-gray-200 mx-auto pb-16">
		<div class="flex flex-col-reverse sm:flex-row items-start">
			<div class="pr-8">
				<h1 class="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black ">
					{name}
				</h1>
				<h2 class="text-gray-700 mb-4">
					{role} at
					<a href={companyHref} rel="noreferrer" target="_blank" class="font-semibold underline">
						{companyName}
					</a>
				</h2>
				<p class="text-gray-600 ">
					{caption}
				</p>
			</div>
			<img
				alt="Fachri Hawari"
				src="https://avatars.githubusercontent.com/u/11810256?v=4"
				class="rounded-full w-[120px] sm:w-[150px] mb-4 sm:mb-0"
			/>
		</div>
		<div class="flex flex-row mt-4 flex-wrap">
			{#each links as link}
				<a
					class="bg-black text-white px-4 py-2 rounded-xl mr-3 mb-3"
					target="_blank"
					rel="noreferrer"
					href={link.href}
				>
					{link.label}
				</a>
			{/each}
		</div>
	</div>
</main>

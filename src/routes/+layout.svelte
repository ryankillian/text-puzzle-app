<script lang="ts">
	import '@picocss/pico';
	import './styles.css';
	import { goto } from '$app/navigation'; // Import SvelteKit's navigation helper
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let currentPath = $page.url.pathname;

	function refreshPage(event: Event) {
		event.preventDefault(); // Prevent default anchor behavior
		window.location.href = '/';
	}
</script>

<div class="app">
	<nav>
		<ul>
			<li><a href="/" on:click={refreshPage} class="secondary">Home</a></li>
		</ul>
		<ul>
			<li><a href="/books" class="secondary">Books</a></li>
		</ul>
		<ul>
			<li><a href="/about" class="secondary">About</a></li>
		</ul>
	</nav>

	<main>
		<slot />
	</main>
</div>

<!-- <footer>
		<p>&copy; {new Date().getFullYear()} Bible Study Website</p>
	</footer> -->

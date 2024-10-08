<script lang="ts">
	import { generateBookSlug } from '$lib/utils.js';

	export let data;

	// Generate a random chapter when user clicks the book name
	function getRandomChapter() {
		const randomIndex = Math.floor(Math.random() * data.chapters.length);
		return data.chapters[randomIndex];
	}
</script>

<h1>{data.book}</h1>

<p>
	<a href={`/${generateBookSlug(data.book)}/${getRandomChapter()}`} class="secondary"
		>Read a random chapter</a
	>
</p>

<section>
	<h2>Chapters</h2>
	<ul>
		{#each data.chapters as chapter}
			<li>
				<a href={`/${generateBookSlug(data.book)}/${chapter}`} class="secondary"
					>Chapter {chapter}</a
				>
			</li>
		{/each}
	</ul>
</section>

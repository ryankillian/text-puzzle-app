<script lang="ts">
	import { generateBookSlug } from '$lib/utils.js';

	export let data;
</script>

<h1>Books</h1>

<section>
	<h2>Old Testament</h2>
	<ul>
		{#each data.old as book}
			<li>
				<a href={`/${generateBookSlug(book.name)}`} class="secondary">{book.name}</a>
			</li>
		{/each}
	</ul>
</section>

<section>
	<h2>New Testament</h2>
	<ul>
		{#each data.new as book}
			<li>
				<a href={`/${generateBookSlug(book.name)}`} class="secondary">{book.name}</a>
			</li>
		{/each}
	</ul>
</section>

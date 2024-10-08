<script lang="ts">
	export let data;

	let swapy_container: HTMLDivElement;

	// Toast and drag-and-drop logic
	import { onMount, tick } from 'svelte';
	import { createSwapy } from 'swapy';
	import toast, { Toaster } from 'svelte-french-toast';

	let showVerseNumbers = false;

	function toggleVerseNumbers() {
		showVerseNumbers = !showVerseNumbers;
	}

	onMount(() => {
		// Use a global error handler to suppress specific runtime errors
		// Swapy occasionally outputs an error to the console.
		// START - hack.
		window.onerror = (msg, source, lineno, colno, error) => {
			if (
				typeof msg === 'string' &&
				msg.includes('Uncaught TypeError: Cannot read properties of null')
			) {
				// Suppress the error
				return true;
			}
			return false;
		};
		// END - hack.

		if (swapy_container) {
			const swapy = createSwapy(swapy_container, {
				animation: 'spring'
			});

			swapy.onSwap(({ data: swapyData }) => {
				if (!swapyData || !swapyData.array) {
					return;
				}
				const currentOrder = swapyData.array
					.filter((item) => item && item.item)
					.map((item) => item.item);

				const isCorrect = JSON.stringify(currentOrder) === JSON.stringify(data.correctOrder);
				if (isCorrect) {
					toast.success('Well done!', {
						duration: 6000
					});
				}
			});
		}
	});
</script>

<Toaster />

<div class="header">
	<h1>{data.book} - {data.chapter}</h1>
	<button on:click={toggleVerseNumbers} class="secondary">
		{showVerseNumbers ? 'Hide Verse Numbers' : 'Show Verse Numbers'}
	</button>
	<p class="description">Rearrange the lines in the correct order.</p>
</div>

<div bind:this={swapy_container} class="swapy_container">
	{#each data.slots as { text, slotId, itemId, verse }}
		<div class="slot" data-swapy-slot={slotId}>
			<div role="button" class="outline contrast verse-button" data-swapy-item={itemId}>
				<span
					>{text}{#if showVerseNumbers}
						<small>{'  '} ({verse})</small>{/if}</span
				>
			</div>
		</div>
	{/each}
</div>

<style>
	.header {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.swapy_container {
		display: flex;
		flex-direction: column;
		gap: 0.4rem; /* Simple gap between the buttons */
	}

	.verse-button {
		text-align: left;
	}
</style>

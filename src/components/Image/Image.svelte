<script lang="ts">
	import { handleClick } from './image';
	export let config;
	export let src: string = config?.url;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="image" on:click={handleClick}>
	<img {src} alt="" />
</div>

<style lang="scss">
	.image {
		display: block;
		width: 100%;
		img {
			display: block;
			width: 100%;
			height: auto;
		}
	}
</style>

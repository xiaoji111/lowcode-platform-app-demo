<script lang="ts">
	import Image from '../../../components/Image/Image.svelte';
	import Button from '../../../components/Button/Button.svelte';
	export const componentMap: any = {
		button: Button,
		image: Image
	};
	export let data: any;
	export const pageData = data?.pageConfig?.pageData || [];
	export const canvasCofig = data?.pageConfig?.canvasConfig || {};
</script>

<svelte:head>
	<style>
		* {
			margin: 0;
			padding: 0;
		}
	</style>
</svelte:head>

<div style:min-height="100vh" style:background-color={canvasCofig.backgroundColor}>
	{#each pageData as item}
		<svelte:component this={componentMap[item.id]} config={item.config} />
	{/each}
</div>

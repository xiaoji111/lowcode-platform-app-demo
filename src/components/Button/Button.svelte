<script lang="ts">
	export let config;
	export const textColorValue = config?.fontColor;
	export const buttonText = config?.buttonText;
	export const background = config.backgroundColor;
	export const link = config?.link;
</script>

<div class="absolute_button_wrap">
	<a class="absolute_button" href={link} style:background>
		<div class="absolute_vertical_bottom">
			<span style:color={textColorValue} class="absolute_button_text">
				{buttonText}
			</span>
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M5.94975 2.99996L10.8995 7.94971L5.94975 12.8995"
					stroke={textColorValue}
					stroke-width="2.4"
					stroke-linejoin="round"
				/>
			</svg>
		</div>
	</a>
</div>

<style lang="scss">
	.absolute_button_wrap {
		position: fixed;
		bottom: 24px;
		transform: translate3d(-50%, 0, 0);
		z-index: 9999;
		width: 92%;
		left: 50%;
	}
	.absolute_button {
		height: 48px;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.54rem;
		font-size: 0.36rem;
		margin: 0 24px;
		text-decoration: none;
		cursor: inherit;
	}
	.absolute_button_text {
		max-width: calc(100vw - 2.08rem);
		white-space: nowrap;
		line-height: 1.3;
		overflow: hidden;
	}

	.absolute_vertical_bottom {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.absolute_vertical_bottom svg {
		width: 0.36rem;
		height: 0.36rem;
	}
</style>

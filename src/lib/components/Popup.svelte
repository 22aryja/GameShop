<script lang="ts">
    import successIcon from "$lib/assets/success.svg"

	export let text: string;
</script>

<div class="container">
	<div class="card success">
        <div class="card_icon">
			<img src={successIcon} alt="warning-icon" />
		</div>
		<div class="card_text">
			<p class="text-14-r">
				{text}
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	@use "/src/lib/styles/mixins.scss" as *;
	
	.container {
		@include weightHeight100;
		padding: 0 16px;
		-webkit-text-fill-color: #fff;
		display: flex;
		justify-content: center;
	}

	.card {
		display: flex;
		align-items: center;
		padding: 16px;
		gap: 16px;
		border-radius: 5px;
		width: 100%;
		max-width: 400px;
		color: #fff;

        &_icon {
			width: 24px;
			height: 24px;
		}

		&.success {
			background: rgb(30, 137, 30);
		}

		&_text {
			color: #fff !important;
			z-index: 10;
		}
	}
</style>

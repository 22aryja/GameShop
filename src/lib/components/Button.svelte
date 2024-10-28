<script lang="ts">
	export let type: 'button' | 'submit' = 'button';
	export let text: string = '';
	export let className: string = '';
	export let disabled: boolean = false;
</script>

<button {disabled} {type} class={className} on:click>{text}</button>

<style lang="scss">
    button {
		cursor: pointer;
		flex-grow: 1;
		appearance: none;
		border: none;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 12px;
		width: 100%;
		height: 45px;
		background: #7653b8;
		background-size: 200% 100%;
		color: #fff;
        font-weight: 700;
        font-size: 16px;
		transition: 0.25s ease-in-out;
		outline: none;
        
		&:hover {
			background-position: 100%;
			text-shadow: 0 0 12px #fff;
		}

		&:disabled {
			background: #4a3475;
			color: #646464;

			&:hover {
				text-shadow: none;
			}
		}
    }
</style>
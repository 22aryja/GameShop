<script lang="ts">
	import { page } from "$app/stores";
	import Header from "$lib/components/Header.svelte";
	import Popup from "$lib/components/Popup.svelte";
	import { popup } from "$lib/stores/user";
	import { slide } from "svelte/transition";

</script>

{#if $page.route.id !== "/login"}
	<Header />
{/if}

{#if $popup}
	<div class="popup" transition:slide>
		<Popup text="Successfully purchased" />
	</div>
{/if}
<slot />

<style lang="scss">
	:global {
        @import "$lib/styles/global.scss";
	}

	.popup {
		position: fixed;
		top: 64px;
		left: 0;
		right: 0;
		width: 350px;
		height: 56px;
		margin: 0 auto;
		z-index: 25;
	}
</style>
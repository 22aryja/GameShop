<script lang="ts">
	import { onMount } from "svelte";

	onMount(() => {
		if (!sessionStorage.getItem("auth") && window.location.pathname !== '/login') {
			window.location.href = '/login';
		}
	})
</script>

<slot />

<style lang="scss">
	:global {
        @import '$lib/styles/global.scss';
	}
</style>
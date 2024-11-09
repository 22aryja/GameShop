<script lang="ts">
	import { goto } from "$app/navigation";
	import { user } from "$lib/stores/user";
	import { onMount } from "svelte";

	// onMount(() => {
	// 	if (!localStorage.getItem("auth") && window.location.pathname !== '/login') {
	// 		window.location.href = '/login';
	// 	}
	// })

	onMount(() => {
		if ($user.nickname === "" && $user.password === "") {
			goto("/login");
		}
	})
</script>

<slot />

<style lang="scss">
	:global {
        @import "$lib/styles/global.scss";
	}
</style>
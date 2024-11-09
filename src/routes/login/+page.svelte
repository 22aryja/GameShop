<script lang="ts">
	import { goto } from "$app/navigation";
	import Button from "$lib/components/Button.svelte";
    import Input from "$lib/components/Input.svelte";
	import { user } from "$lib/stores/user";
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";

    onMount(() => {
        // if (localStorage.getItem("auth")) {
		// 	goto("/");
		// }
        if ($user.nickname !== "" && $user.password !== "") {
			goto("/");
		}

        setTimeout(() => {
            toggler = false;
        }, 500);
    })

    let toggler: boolean = $state(true);

    let name: string = $state("");
    let password: string = $state("");
    let error: boolean = $state(false);
    let errorText: string = "Password should contain at least 8 characters";

    const handleClick = () => {
        if (password.length < 8) {
            error = true;
            return
        } else {
            error = false;
            $user = {nickname: name, password: password};
            goto("/");
        }
    }

</script>

{#if toggler}
    <!-- svelte-ignore element_invalid_self_closing_tag -->
    <div transition:slide={{duration: 500}} class="toggler"/>
{/if}

<div class="auth-wrapper">
    <form class="auth">
        <div class="auth-header">
            <h1 class="glowing">Welcome!</h1>
        </div>

        <div class="auth-input">
            <Input 
                label="Your name" 
                placeholder="Name" 
                bind:value={name} 
            />
            <Input 
                label="Your Password" 
                placeholder="Password" 
                type="password" 
                bind:value={password}
                bind:error
                {errorText}
            />
        </div>

        <div class="auth-button">
            <Button 
                text="Go!"
                disabled={name.trim().length === 0 || password.length === 0}
                on:click={handleClick}
            />
        </div>
    </form>
</div>

<style lang="scss">
    .auth {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        background-color: #222;
        width: 25vw;
        height: 35vh;
        border-radius: 16px;
        padding: 12px 16px;

        &-wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &-header {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
        }

        &-input {
            width: 100%;
            display: grid;
            grid-template-columns: 100%;
            row-gap: 40px;
        }

        &-button {
            display: flex;
            width: 100%;
        }
    }

    .glowing {
        text-shadow: 0 0 12px #fff;
    }

    .toggler {
        position: absolute;
        z-index: 10;
        background: #222;
        width: 100vw;
        height: 100vh;
    }
</style>
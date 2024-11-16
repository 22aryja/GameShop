<script lang="ts">
	import { goto } from "$app/navigation";
	import { slide } from "svelte/transition";
    import LogoutIcon from "../assets/logout.svg"
	import { user } from "$lib/stores/user";

    let toggler: boolean = $state(false);

    const handleClick = () => {
        toggler = true;
        setTimeout(() => {
            // localStorage.removeItem("auth");
            $user = {nickname: "", password: ""};
            goto("/login");
            toggler = false
        }, 2000)
    }

    let authName: string | null = $derived($user.nickname);

</script>


<div class="header-wrapper" class:toggler>
    <div class="header">
        {#if !toggler}
            <section transition:slide class="decorative-section">
                <!-- svelte-ignore element_invalid_self_closing_tag -->
                <span class="decorative"/>
                <!-- svelte-ignore element_invalid_self_closing_tag -->
                <span class="decorative"/>
                <!-- svelte-ignore element_invalid_self_closing_tag -->
                <span class="decorative"/>
            </section>
            

            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <section class="header-right">
                <span transition:slide class="username">{authName}</span> 
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore event_directive_deprecated -->
                <img 
                    src={LogoutIcon} 
                    alt="logout"
                    on:click={handleClick}
                />
            </section>
        {/if}
    </div>
</div>

<style lang="scss">
    @use "/src/lib/styles/mixins.scss" as *;
    .header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0 20px;

        &-wrapper {
            @include flex-aic;
            width: 100vw;
            height: 7%;
            background: #222;
            transition: ease-in-out 1s;
        }

        &-right {
            display: flex;
            gap: 25px;
        }
    }

    .decorative {
        display: flex;
        width: 7px;
        height: 7px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 0 12px #fff;

        &-section {
            @include flex-aic;
            gap: 15px;
        }
    }

    .username {
        @include flex-aic;
        text-shadow: 0 0 12px #fff;
    }

    img {
        display: flex;
        width:26px;
        height: 26px;
        filter: drop-shadow(0 0 5px #fff);
        transition: ease-in-out 0.25s;

        &:hover {
            transform: scale(1.2);
        }
    }

    .toggler {
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
<script lang="ts">
	import { slide } from "svelte/transition";

    export let label: string;
    export let value: string | null = null;
    export let placeholder: string = "";
    export let style: string = "";
    export let type: string = "text";
    export let labelBackground: string = "#222";
    export let error: boolean = false;
    export let errorText: string = "";

    let glowing: boolean = false;
    $: errorField = error && errorText.length > 0;
</script>

<div class="field" {style}>
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label 
        style="background: {labelBackground}; {error && glowing ? "text-shadow: 0 0 12px rgb(255, 116, 116);" : ""}"
        class:glowing
        class:error
    >{label}</label>
    <input
        class:errorField 
        {placeholder}
        {type}
        bind:value
        on:focus={() => glowing = true}
        on:blur={() => glowing = false}
    />
    {#if error && errorText}
        <div transition:slide class="error">{errorText}</div>
    {/if}
</div>

<style lang="scss">
    @use "/src/lib/styles/mixins.scss" as *;
    .field {
        @include flexColumn;
        position: relative;
    }

    input {
        background: transparent;
		border: 2px solid #ffffff;
		padding: 4px 20px;
		color: #ffffff;
		border-radius: 6px;
        outline: none;
        height: 32px;
        font-size: 16px;

        &::placeholder {
            color: #8e8e8e;
        }
    }

    label {
        position: absolute;
        z-index: 3;
        top: -10px;
        left: 10px;
        padding: 0 10px;
        transition: ease-in-out 0.25s;
    }

    .glowing {
        text-shadow: 0 0 12px #fff;
    }

    .error {
        color: rgb(226, 87, 87);
        font-size: 12px;

        &Field {
            border-color: rgb(226, 87, 87);
        }
    }
</style>
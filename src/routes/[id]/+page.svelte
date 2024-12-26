<script lang="ts">
	import { goto } from "$app/navigation";
    import { page } from "$app/stores";
	import Button from "$lib/components/Button.svelte";
    import data from "$lib/dummy/games.json";
	import { setPopupVisible } from "$lib/stores/user";
	import type { Game, Games } from "$lib/types/games";

    let selectedGame: Game | undefined = (data as Games).games.find((_, index) => index === Number($page.params.id) - 1);

    const colorizeRating = (rating: string) => {
        if (rating === "Very positive") {
            return "green";
        }
        if (rating === "Mixed") {
            return "yellow"
        }
    }

    const handleClick = () => {
        goto("/");
        setPopupVisible();
    }
</script>

{#if selectedGame}
    <article class="card-wrapper">
        <div class="card">
            <div class="card-image">
                <a href="/">Back</a>
                <!-- svelte-ignore a11y_img_redundant_alt -->
                <img src={selectedGame.image} alt="image"/>
            </div>

            <div class="card-info-wrapper">
                <div class="card-info">
                    <span>
                        <!-- svelte-ignore a11y_label_has_associated_control -->
                        <label>Name: </label>
                        <h1>{selectedGame.name}</h1>
                    </span>
                    
                    <span>
                        <!-- svelte-ignore a11y_label_has_associated_control -->
                        <label>Author: </label>
                        <h2>{selectedGame.author}</h2>
                    </span>

                    <span>
                        <!-- svelte-ignore a11y_label_has_associated_control -->
                        <label>Year: </label>
                        <p>{selectedGame.releaseYear}</p>
                    </span>

                    <span>
                        <!-- svelte-ignore a11y_label_has_associated_control -->
                        <label>Ratings: </label>
                        <p class="{colorizeRating(selectedGame.usersRating)}">{selectedGame.usersRating}</p>
                    </span>
                    
                    <span>
                        <!-- svelte-ignore a11y_label_has_associated_control -->
                        <label>Genre: </label>
                        <p>{selectedGame.genre}</p>
                    </span>

                    <!-- svelte-ignore a11y_label_has_associated_control -->
                    <span>
                        <label>Russian Dubbing: </label>
                        <p class="{selectedGame.russianDubbing ? "green" : "red"}">{selectedGame.russianDubbing ? "Yes" : "No"}</p>
                    </span>
                </div>

                <Button text={`${selectedGame.price} ₸`} on:click={handleClick} />
            </div>
        </div>
    </article>
{/if}

<style lang="scss">
    @use "/src/lib/styles/mixins.scss" as *;
    .card {
        padding: 12px;
        display: flex;
        border-radius: 12px;
        background: var(--primary);
        width: 90%;
        height: 60%;
        border: 1px solid #ffffffd0;
        gap: 1%;

        &-wrapper {
            @include flex-aic;
            justify-content: center;
            @include weightHeight100;
        }

        &-image {
            width: 50%;
            position: relative;

            img {
                @include weightHeight100;
                object-fit: cover;
                border-radius: 6px;
            }
        }

        &-info {
            @include flexColumn;
            @include weightHeight100;
            gap: 5%;

            &-wrapper {
                width: 50%;
                @include flexColumn;;
            }

            span {
                @include flex-aic;
                font-size: 16px;
                gap: 1%;
            }
        }
    }

    .green {
        color: rgb(30, 137, 30);
    }

    .yellow {
        color: rgb(239, 239, 51);
    }

    .red {
        color: rgb(226, 87, 87);
    }

    a {
        position: absolute;
        text-decoration: none;
        color: #fff;
        background-color: #22222270;
        border: 1px solid #ffffff75;
        border-radius: 6px;
        padding: 6px 12px;
        transition: ease-in-out 0.2s;
        text-shadow: 0 0 10px #fff;

        &:hover {
            scale: 1.05;
        }
    }

    label {
        color: #9d9d9d;
        text-decoration: underline;
    }

    h1, h2 {
        font-size: 16px;
    }

    @media (max-width: 768px) {
        .card-wrapper {
            .card {
                flex-direction: column;

                .card-image {
                    width: 100%;
                    height: 50%;
                }

                .card-info {
                    
                    h1, h2 {
                        white-space: nowrap;
                    }

                    &-wrapper {
                        width: 100%;
                        height: 50%;
                    }
                }
            }
        }
    }
</style>
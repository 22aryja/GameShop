<script lang="ts">
    type FilterBlockProps = {
        selectedYears: string[],
        selectedPrices: number[],
        hasRussianDub: boolean | null,
        selectedRating: string[]
    }

    let {
        selectedYears = $bindable(), 
        selectedPrices = $bindable(), 
        hasRussianDub = $bindable(),
        selectedRating = $bindable(),
    }: FilterBlockProps = $props();

    const releaseDates: string[] = ["2019", "2020", "2021", "2022", "2023", "TBA"];
    const prices: number[] = [0, 2000, 5000, 10000];
    const russianDubOptions: boolean[] = [true, false];
    const ratings: string[] = ["Very positive", "Mixed", "N/A"];
</script>

<section>
    <div class="filter-wrapper">
        <div class="filter">
            <h1>Release Dates</h1>
            <div>
                {#each releaseDates as date}
                    <div>
                        <input
                            type="checkbox"
                            name="selectedYears"
                            value={date}
                            bind:group={selectedYears}
                            id={date}
                        />
                    
                        <label for={date}>
                            {date}
                        </label>
                    </div>
                {/each}
            </div>
        </div>

        <div class="filter">
            <h1>Price Categories</h1>
            <div>
                {#each prices as price}
                    {@const val = price === 0 ? "Free" : `< ${price}`}
                    <div>
                        <input
                            type="checkbox"
                            name="selectedPrices"
                            value={price}
                            bind:group={selectedPrices}
                            id={val}
                        />
                    
                        <label for={val}>
                            {val}
                        </label>
                    </div>
                {/each}
            </div>
        </div>

        <div class="filter">
            <h1>Russian Dub</h1>
            <div>
                {#each russianDubOptions as option}
                    <div>
                        <input
                            type="radio"
                            name="hasRussianDub"
                            value={option}
                            bind:group={hasRussianDub}
                            id={`tag-${option}`}
                        />
                    
                        <label for={`tag-${option}`}>
                            {option ? "Yes" : "No"}
                        </label>
                    </div>
                {/each}
            </div>
        </div>

        <div class="filter">
            <h1>Rating</h1>
            <div>
                {#each ratings as rating}
                    <div>
                        <input
                            type="checkbox"
                            name="selectedYears"
                            value={rating}
                            bind:group={selectedRating}
                            id={rating}
                        />
                    
                        <label for={rating}>
                            {rating}
                        </label>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style lang="scss">

    section {
        padding: 32px 16px;
    }

    .filter {
        display: flex;
        flex-direction: column;
        gap: 12px;

        &-wrapper {
            width: 100%;
            background: #222;
            border-radius: 12px;
            padding: 16px;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        }
    }
</style>
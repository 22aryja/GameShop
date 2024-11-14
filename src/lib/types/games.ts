export type Game = {
    name: string,
    author: string,
    releaseYear: string,
    usersRating: string, 
    genre: string,
    price: number,
    russianDubbing: boolean
    image: string
}

export type Games = {
    games: Game[]
}
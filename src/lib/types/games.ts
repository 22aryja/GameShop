export type Game = {
    name: string,
    author: string,
    releaseYear: string,
    usersRating: string, 
    genre: string,
    price: number,
    ussianDubbing: boolean
    preview?: string
}

export type Games = {
    games: Game[]
}
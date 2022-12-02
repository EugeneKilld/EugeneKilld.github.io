export type Ability = {
    ability: {
        name: string,
        abilityURL: string,
    },
}

export type PockemonsPack = {
    name: string,
    url: string,
}

export type PockemonShortInfo = {
    id: number,
    name: string,
    photoURL: string,
}

export type PockemonInfo = {
    id: number,
    name: string,
    photoURL: string,
    abilities: Ability[]
}

export type PockemonModalType = {
    id: number
    isActive: boolean,
}

type PockemonStats = {
    base_stat: number,
    stat: {
        name: string,
    },
}

export type PockemonFullInfo = {
    id: number,
    name: string,
    sprites: {
        front_default: string,
        other: {
            "official-artwork": {
                front_default: string,
            },
            home: {
                front_default: string,
            }
        }
    }
    stats: PockemonStats[]
    abilities: Ability[]
}
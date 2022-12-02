export const getAllPockemons = (resolve: (response: any) => void) => {
    return fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`,
        { method: 'GET' }
    )
        .then( response => response.json())
        .then( json => resolve(json.results))
        .catch( error => console.error('error:', error) );
}

export const getFullPockemonInfo = (id: number, resolve: (response: any) => void) => {
    return fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}/`,
        { method: 'GET' }
    )
        .then( response => response.json())
        .then( json => resolve(json))
        .catch( error => console.error('error:', error) );
}

export const getFullPockemonInfoByURL = (url: string, resolve: (response: any) => void) => {
    return fetch(
        url,
        { method: 'GET' }
    )
        .then( response => response.json())
        .then( json => resolve(json))
        .catch( error => console.error('error:', error) );
}

export const getPockemonsInfo = (url: string, resolve: (response: any) => void) => {
    return fetch(
        url,
        { method: 'GET' }
    )
        .then( response => response.json())
        .then( json => resolve({
            id: json.id,
            name: json.name,
            photoURL: json.sprites.other["official-artwork"].front_default,
            abilities: json.abilities
        }))
        .catch( error => console.error('error:', error) );
}

export const getPockemonsPack = (page: number, resolve: (response: any) => void) => {
    return fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${12 * (page)}`,
        { method: 'GET' }
    )
        .then( response => response.json())
        .then( json => resolve(json.results))
        .catch( error => console.error('error:', error) );
}
const HN_API = `https://hacker-news.firebaseio.com/v0`

export type Item = {
    id: number
    title: string
    url: string
    by: string
    time: number
    descendants: number
    score: number
    kids: number[]
    text?: string
}

export const loadItem = async (id: number): Promise<Item> => {
    return await fetch(`${HN_API}/item/${id}.json`)
        .then((res) => res.json())
}

export const loadTopStoryIds = async (): Promise<number[]> => {
    return await fetch(`${HN_API}/topstories.json`)
        .then((res) => res.json())
}

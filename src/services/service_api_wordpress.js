const api = process.env.HOST_API_WORDPRESS

export const getAllNews = async () => {
    const data = await fetch(`${api}/posts?%20_embed`)
    const newData = data.json()
    return newData
}

export const getNewsForSlug = async (slug) => {
    const data = await fetch(`${api}/posts?slug=${slug}`)
    const newData = data.json()
    return newData
}

export const getAgroNews = async () => {
    const data = await fetch(`${api}/posts?tags=12&_embed`)
    const newData = data.json()
    return newData
}

export const getNewsByCategory = async (categoryId) => {
    const data = await fetch(`${api}/posts?categories=${categoryId}&_embed`)
    const newData = data.json()
    return newData
}

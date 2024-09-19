export async function getAllStarships(url){
    try{
        const resp = await fetch(url);
        const data = await resp.json()
        return data;
    }catch(e){
        console.error(e);
        throw error;
    }
}
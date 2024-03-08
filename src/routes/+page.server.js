
import { timeline } from "$lib/bsky"
export  async function load() {
    let skeets = await timeline()
    console.log("loading data")
    console.log({ skeets })
    return { skeets }
}
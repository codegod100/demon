
import { timeline } from "$lib/bsky"
console.log("page load?")
let skeets = await timeline()
export  function load() {
    console.log("loading data")
    console.log({ skeets })
    return { skeets }
}
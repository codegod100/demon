import pkg from '@atproto/api';
const { BskyAgent } = pkg;
const agent = new BskyAgent({
    service: "https://api.bsky.app"

})


export const timeline = async function () {
    let feed = await agent.app.bsky.feed.getAuthorFeed({ actor: 'demon.ooo' })
    // console.log(feed)
    let posts = feed.data.feed
    console.log(JSON.stringify(posts))
    let records = posts.map((post) => {
        let uri = post.post.uri.replace("at://did:plc:ngokl2gnmpbvuvrfckja3g7p/app.bsky.feed.post/", "https://bsky.app/profile/demon.ooo/post/")
        return {
            text: post.post.record.text,
            time: new Date(post.post.record.createdAt),
            uri
        }
    })

    return records.slice(0, 5)

}
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function get() {
  const posts = await getCollection("posts");
  return rss({
    title: "Ian Munogvan | Blog",
    description: "Ian Mungovan Blog",
    site: "https://ianmungovan.dev",
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}

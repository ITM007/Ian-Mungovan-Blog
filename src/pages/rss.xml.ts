import rss from "@astrojs/rss";

const allPosts = import.meta.glob("../blog/*.md", { eager: true });

const posts = Object.values(allPosts);
export const get = () =>
  rss({
    title: "Ian Mungovan | Blog",
    description: "Ian Mungovan Blog",
    site: "https://ianmungovan.dev",
    // items: import.meta.glob("./**/*.md"),
    items: posts.map(post => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.pubDate,
    })),
  });

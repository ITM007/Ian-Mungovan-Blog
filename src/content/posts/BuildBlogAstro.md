---

layout: "../../layouts/PostsLayout.astro"

title: "How I Built My Blog With Astro"

author: "Ian Mungovan"

date: "2023-01-15"

description: "How I used Astro to build a high performance blog, and deployed it using Digital Ocean."

tags: [" Astro", " Digital Ocean"]

link: "BuildBlogAstro"

image: "/blogImages/buildingBlogAstro/Blog.avif"

draft: true

featured: true

slug: "BuildBlogAstro"

pubDate: 2023-01-15

---

## Table of contents

- [Introduction](#introduction)

- [Why Astro?](#why-astro)

- [Layout of Blog](#layout-of-blog)

- [Deploying my blog using Digital Ocean for free](#deploying-my-blog-using-digital-ocean-for-free)

- [Future Plans](#future-plans)

## Introduction

I recently decided that I wanted to create a blog discussing my opinion on multiple different topics, focusing mostly on software, cyber security, and upcoming technology. The first thing I did was choose the tech stack for my blog that fit my needs. I had several requirements that I was seeking.

First, I wanted something simple that was designed with things like blogs as a first-class citizen. Second, I did not want a pre-built template I could fill out with content. Half of the fun of creating a blog is building the application. Last, I wanted to use a piece of technology that I had not used before. All this lead me to Astro, an "all-in-one" web framework for building static websites.

## Why Astro?

I was drawn to Astro because of its island architecture, lack of JavaScript, and high performance without complexity..

### Island Architecture

Island Architecture is a concept that I have been interested in for a while. Each page is a single component that is rendered on the server side. This allows you to have an interactive UI component on an otherwise static page of HTML. An example of this can be seen below from the official Astro Documentation.

![Island Architecture](/blogImages/buildingBlogAstro/Island_Architecture.avif)

### Zero JavaScript

Astro allows you to load zero JavaScript for static pages. This gives a a significant performance boost being close to that of a static page. We can see this below in the screenshot of the network tab in the chrome dev tools. The page is fully loaded with no JavaScript (As of 2023-01-15).

![No JavaScript](/blogImages/buildingBlogAstro/Blog_No_JS.avif)

### High Performance with Ease of Use

As mentioned before, Astro is built with blogging being a first-class citizen. This is clear in the Astro documentation, as well as many of the built-in tools it has, such as it's markdown parser. 

Astro also has very well written documentation. They have an entire tutorial that walks you through how to create a blog, as well as having numerous templates that you can use to get started. 

Astro has great performance, scoring a 100 for performance and 100 for best practices using google's lighthouse tool. While this can be done using other tools or techniques, Astro makes it easy to accomplish this with its ability to ship zero JavaScript.

![Lighthouse Audit](/blogImages/buildingBlogAstro/Blog_Lighthouse.avif)

## Layout of my blog

The standard Astro file directory structure is what I used to build my website. My pages, components, and layouts are organized into separate directories. I also have a public directory that contains all of my static files, as well as a content folder that holds all my blog posts (like this post!).

```
|-- components
    |-- BlogCard.astro
    |-- BlogPost.astro
    |-- Header.astro
    |-- ...
|-- layouts
    |-- PostsLayout.astro
    |-- PageLayout.astro
|-- content
    |-- posts
        |-- BuildBlogAstro.md
        |-- ...
|-- pages
    |-- blog
    |   |-- [slug].astro
    |   |-- index.astro
    |-- tags
    |   |-- [tags].md
    |-- about.astro
    |-- index.astro

```

I am going to assume that readers understand the basics of components, layouts, and pages in JavaScript frameworks. I am going to discuss the more interesting parts, the blog posts, and the tags.

### Blog Posts

I have a blog directory in my pages directory that contains all of my blog posts. Each blog post is a markdown file that contains the front matter and the content of the blog post. The front matter contains the layout, title, author, date, description, tags, link, image, and draft. I can sort through posts and display recent ones on the blog page and featured ones on the home page. 

### Tags

I also added tags to the Blog page by using the tag’s front matter. If a visitor clicks on the tag, a new page is loaded, showing all blog posts with the same tag. This allows users to search for blog posts by tag.

## Deploying my blog using Digital Ocean for free

Once I had completed my blog, I deployed it to Digital Ocean's (DO) App Platform as a static web app. DO allows user to deploy up to three static web apps for free. Once the application was live, I bought my domain (ianmungovan.com) from google domains and connected it to my blog. All the steps to do this are laid out below, if others want to do the same.

- First, create a Digital Ocean account. This can be done by connecting ones GitHub account.

- Second, create a new app, and connect it to your GitHub account or other Code Repo, giving it read access to my blog repository.

- Next, select the resource type. By default, the option is a web service, which will cost $5 a month. To avoid this charge, select the static site option as shown below.

![Digital Ocean Resource](/blogImages/buildingBlogAstro/Digital_Ocean_Deploy.avif)

- Following this set any environment variables that you need, and review your application. By default Astro will build to a dist directory. Digital Ocean will automatically detect this.

- Once you have reviewed your application, deploy it. This will take a few minutes, but once it is done you can access your application.

- By default, it will give your app a sub-domain on `ondigitalocean.app`. You can register a custom domain by following the steps outlined in the [documentation](https://docs.digitalocean.com/products/app-platform/how-to/manage-domains/).

The site is now live with the domain name of our choice, all for only $12 a year (The cost of a domain from Google).

![Digital Ocean Live](/blogImages/buildingBlogAstro/Digital_Ocean_Live.avif)

## Future Plans

Now that I have built the basics of a working blog, I have a few ideas for the future.

First and most obvious is to add more posts by writing more. I have several ideas for posts that I want to write but need to find the time to write them. I plan to make my post more unique by covering topics that are not covered in other blogs (or at least are lightly covered).

Second, I want to add a comment section to my blog. I have not decided on the best way to do this yet, but I am leaning towards using [utterances](https://utteranc.es/). It allows viewers to comment on a blog post using GitHub issues 

Last, I plan to add things like logging, metrics, dark mode, and a few more. But content is king, so I will focus on adding more content first.

### Sneak Peak

My next post will be about how to use **Department of Defense Hardened Containers** to take security of your application to the next level.
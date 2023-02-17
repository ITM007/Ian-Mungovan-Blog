---
layout: "../../layouts/PostsLayout.astro"
title: "How I Built My Blog With Astro"
author: "Ian Mungovan"
date: "2023-01-15"
description: "How I used Astro to build a high performance blog, and deployed it using Digital Ocean for free."
tags: [" Astro", " Digital Ocean"]
link: "BuildBlogAstro"
image: "/blogImages/buildingBlogAstro/Blog.png"
draft: true
featured: true
slug: "BuildBlogAstro"
---

## Table of contents

- [Introduction](#introduction)

- [Why Astro?](#why-astro)

- [Layout of Blog](#layout-of-blog)

- [Deploying my blog using Digital Ocean for free](#deploying-my-blog-using-digital-ocean-for-free)

- [Future Plans](#future-plans)

## Introduction

I recently decided that I wanted to create a blog discussing my opinion on multiple different topics, focusing mostly on software, cyber security, and upcoming technology.The first thing I did was choose the tech stack for my blog that fit my needs. I had several requirements that I was looking for.

First, I wanted something simple that allowed me the ability to do unique things. Second, I did not want a pre-built template that I could fill out with content, half of the fun of creating a blog is building the application. Last, I wanted to use a piece of technology that I had not used before. All this lead me to Astro, an all-in-one web framework for building static websites.

## Why Astro?

Three of the key features that attracted me to Astro are the ability to use island architecture, the ability to use zero JavaScript, and high performance with ease of use.

### Island Architecture

Island Architecture is a concept that I have been interested in for a while. The idea is that you have a single-page application, but instead of having a single page, you have multiple pages. Each page is a single component that is rendered on the server side. This allows you to have a single-page application, but with the ability to have multiple pages. This is a great way to have the best of both worlds, the ability to have multiple pages, but the ability to have a single-page application.

### Zero Javascript

Astro allows you to use zero JavaScript for static pages. This is a significant feature as it allows you to have the speed of a static page, but if you need to use JavaScript, you can. We can see this below in the screenshot of the network tab in the chrome dev tools. The page is fully loaded with no JavaScript.

![No JavaScript](/blogImages/buildingBlogAstro/Blog_No_JS.png)

### High Performance with Ease of Use

Astro is built with the idea that blogging is a first-class citizen. This is clear in the Astro documentation, as well as many of the built-in tools it has, such as a markdown parser that allows you to write your blog posts in markdown. They also have many unique examples and templates that you can use to get started. I did not use any of these as I wanted to build my blog from scratch, but I used their documentation and community templates as a reference and inspiration.

Astro has fantastic performance, this is mostly because of the Island Architecture and the ability to ship zero JavaScript, as talked about above. We can see this when running a lighthouse audit on the blog. The blog has a performance score of 100, and a best practices score of 100.

<!-- [Lighthouse Audit](../Blog_Lighthouse.png) -->

## Layout of my blog

The standard Astro file directory structure is what I used to build my website. I have a pages directory that contains all of my pages, a components directory that contains all of my components, and a layouts directory that contains all of my layouts. I also have a public directory that contains all of my static files, such as images.

```
- components
  - BlogCard.astro
  - BlogPost.astro
  - Header.astro
  - ...
- layouts
  - PostsLayout.astro
  - PageLayout.astro
- content
  - posts
    - BuildBlogAstro.md
    - ...
- pages
  - blog
    - [slug].astro
    - index.astro
  - tags
    - [tags].md
  - about.astro
  - index.astro
```

I am going to assume that readers understand the basics of components, layouts, and pages in JavaScript frameworks. As such, I am going to talk about the more interesting parts, the blog posts, and the tags.

### Blog Posts

I have a blog directory in my pages directory that contains all of my blog posts. Each blog post is a markdown file that contains the front matter and the content of the blog post. The front matter contains the layout, title, author, date, description, tags, link, image, and draft.

Using the information from above, one can then sort through all the posts in the blog directory and show the most recent posts on the blog page, as well as show featured posts on the home page. Astro has a step-by-step walkthrough on how to do this in their documentation.

### Tags

I then added tags to the Blog page by using the tag’s front matter. If a visitor then clicks on the tag, a new page is loaded, showing all blog posts with the same tag. This allows users to search for blog posts by tag.

## Deploying my blog using Digital Ocean for free

Once I had completed my blog, I wanted to deploy it to the internet. I used Digital Ocean as it is a great service that allows you to deploy your application for free. I also wanted to use Digital Ocean as I have not used it before, and I wanted to learn more about it.

- First, I created a Digital Ocean account, by connecting my GitHub account, and connecting a credit card.
- Next, I created a new app, and connected it to my GitHub account, only giving it access to my blog repository.
- Once you go to the next page, you will select the resource type, by default, the option is a web service, which will cost $5 a month. To avoid this charge, select the static site option as shown below.
  ![Digital Ocean Resource](/blogImages/buildingBlogAstro/Digital_Ocean_Deploy.png)
- Set any environment variables that you need, and review your application. By default Astro will build to a dist directory, luckily Digital Ocean will automatically detect this.
- Once you have reviewed your application, you can deploy it. This will take a few minutes, but once it is done, you will be able to access your application.
- By default, it will give your app a sub-domain on `ondigitalocean.app`. You can also register a custom domain. I used google domains to register a custom domain for my blog, as they are easy to use and cost $12 a year for most domain names, but there are other great options as well.
- Once you have your domain name, you can add it to your digital ocean application by following the steps outlined in the [documentation](https://docs.digitalocean.com/products/app-platform/how-to/manage-domains/).

Our site is now live with the domain name of our choice, all for only $12 a year.

![Digital Ocean Live](/blogImages/buildingBlogAstro/Digital_Ocean_Live.png)

## Future Plans

Now that I have built the basics of a working blog and have it deployed for free, I have a few ideas for the future.

First and most obvious is to add more posts by consistently writing more. I have several ideas for posts that I want to write but need to find the time to write them. And I plan to make my post more unique by covering topics that are not covered in other blogs (or at least are lightly covered).

I also want to add a comment section to my blog. I have not decided on the best way to do this yet, but I am leaning towards using [utterances](https://utteranc.es/). This is a great tool that allows you to use GitHub issues as a comment section for your blog.

Lastly, I plan to add things like logging, metrics, dark mode, and a few more. But content is king, so I will focus on adding more content first.

### Sneak Peak

My next post will be about how to use **Department of Defense Hardened Containers** to take security of your application to the next level.

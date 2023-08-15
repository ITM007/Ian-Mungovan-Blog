---
layout: "../../layouts/PostsLayout.astro"

title: "DOD Iron Bank"

author: "Ian Mungovan"

date: "2023-08-15"

description: "How to use the DOD Iron Bank"

tags: [" DOD", " Container"]

link: "DODIronBank"

image: "/blogImages/IronBank/Logo_Platform_One.png"

draft: true

featured: true

slug: "DODIronBank"

pubDate: 2023-08-15
---

## Table of contents

- [Table of contents](#table-of-contents)

- [Introduction](#introduction)

- [What is Platform One](#what-is-platform-one)

- [What is the Iron Bank?](#what-is-the-iron-bank)

- [Different Parts of the Iron Bank](#different-parts-of-the-iron-bank)

- [Conclusion](#conclusion)

- [Sneak Peak](#sneak-peak)

## Introduction

Cybersecurity & Infrastructure Security Agency (CISA) recently released their [2023-2025 Strategic Plan](https://www.cisa.gov/strategic-plan). The goal of this plan is to **Reduce risk and build resilience to cyber and physical threats to the nations infrastructure**. The DOD also released their [2023 DoD Cyber Strategy](https://www.defense.gov/News/Releases/Release/Article/3408707/dod-transmits-2023-cyber-strategy/).

Both papers released while vague provide insight on how the US Government views cybersecurity. One can best summarize them as The DOD/Critical Infrastructure should adopt modern industry best practices wherever acceptable. The US Air Force in response to this and earlier directives, released [Platform One](https://p1.dso.mil/) with services including the [Iron Bank](https://p1.dso.mil/services/iron-bank), which is a secure container image repository. This article will cover at a high level Platform One, the Iron Bank, and the different parts of the Iron Bank.

## What is Platform One

The goal of the platform is to provide a modern tools/systems to support hosting microservices to the DOD.

> [Platform One](https://p1.dso.mil/) allows users to deploy a DevSecOps Software Factory and start solving software problems with a 90% solution day 1, instead of starting from nothing.

![Platform One Services](/blogImages/IronBank/Platform_One_Services.png)

The DOD may turn away some developers from the words used to describe this platform. But before you run and hide, let me show what the DOD is attempting to accomplish with Platform One using an example.

The DOD buys lots of software, from embedded systems for flight controllers to websites for HR systems. This does not differ from any other company, such as Walmart or Spotify, who will buy software from some vendors, but also build some things in house.

The difference lies in how the DOD delivers software compared to the civilian world. Let us say the DOD hires a company to build them a piece of software that analyzes jet engine data. The company will collect all the requirements for this piece of software, design it over several months, then prepare to deploy v1.0. Except the software company does not have any people that may deploy this application into a DOD environment. So what happens then?

Often when the company has finished building v1 of the software, that company will mail a CD to the DOD. Following this, the engineers will guide the DOD System Administrator on how to deploy the software over a phone call.

Now, to some engineers, this will sound insane, while to others, this will sound like a Tuesday. If there iss a vulnerability, bug, or feature to be added/fixed, the software company has to update the source code and send a new version to the DOD, through the mail with a CD.

This process is unsustainable in todays world, especially with the amount of security issue discovered every day. Not to mention changing the time of fixing bugs from days or weeks to months and years. So helping solve this problem, the DOD created Platform one.

Platform One now enables the DOD and its vendors to use CI/CD, Kubernetes, Git Repositories for software delivery. This may not sound like very impressive to those working at any modern software company, but this is extremely revolutionary to many DOD Vendors.

I can not even count how many people I have met writing critical systems that have never used git, and will instead email source code to others on their team. Or do not have automated testing, and instead will have an Excel file with a list of test, that are manually run by an intern against the application.

The engineers are not usually to blame. DOD requirements do not permit the use of modern software development tools. Because of Platform, One more engineer may use modern software tools that others take for granted.

We can see an example of this with the F35 vs SpaceX diagram below. SpaceX is doing modern software development practices, while the F35 is doing software practices as described above.

![F35 vs SpaceX](/blogImages/IronBank/F35vsSpaceX.webp)

- Note 1: The above is also quite generalized, the DOD is such a large place there are exceptions to everything. This is just how things generally operate in my experience.

- Note 2: Although not all types or levels of software are permitted on Platform One, every new team that operates successfully in this environment is a victory..

## What is the Iron Bank?

The Iron Bank is one service provided by Platform One.

> The Iron Bank is Platform Ones hardened container image repository that supports the end-to-end lifecycle needed for modern software development.

The Iron Bank is a container image repository like Docker hub, except the DOD hardened all the containers. The DOD also maintains monitoring of the images and keeping them up to date with the non-hardened version. In my experience, Iron Bank images are usually only a few days - a few weeks behind the civilian offering.

As well, the Iron Bank website will offer information about each of the images it offers, including but not limited to: Date Updated, Version, Compliance Score, Approved(True/False), Known Vulnerabilities, etc.

## Different Parts of the Iron Bank

The Iron Bank has two other pieces that support it. [Registry One](https://registry1.dso.mil/account/sign-in?redirect_url=%2Fharbor%2Fprojects), which is the OCI registry that is a [Harbor](https://goharbor.io/) instance hosted by the DOD.[Repo One](https://repo1.dso.mil/dsop) which is the central Gitlab repository that contains all the source code for the hardened images.

For both the Iron Bank and Registry One, you will need an account to access them. You can request access to the link [here](https://p1.dso.mil/services/iron-bank/getting-started), and the onboarding team offers a session every Wednesday at 3:30 EST. It usually takes about a week to get an account approved, to use the images in the Iron Bank. We can see the entire process of getting an account from their image that I have attached below.

![Iron Bank Onboarding Process](/blogImages/IronBank/Iron_Bank_Onboarding_Process.png)

You can access [Repo One](https://repo1.dso.mil/dsop) without an account. So if you would like to view the source code that creates these hardened images, then go check it out.

## Conclusion

I did not cover all the services that Platform One has, such as the Big Bang or the Party Bus. Nor did I cover all the things that the Iron Bank offers, such as requesting for certain images to be hardened.  If you want to learn more about any of these services, I recommend checking out [Platform One](https://p1.dso.mil/).

I hope this article was useful for those in the DOD landscape, showing some tools that may be available to you. And for those not in this landscape, I hope it shows that the DOD is trying to modernize, and to never take the tools you use daily for granted, like git.

### Sneak Peak

It took me about 7 months between my last blog article and this one. Hopefully that will not happen again, but who knows. Next time I am going to talk about the three pillars of software.

## Sources

- Platform One and Iron Bank Images: https://p1.dso.mil/
- F35 vs SpaceX Table: https://software.af.mil/

# Independence

This page gives an overview about being independent from distinct providers or technologies.

## Overview

This project is built with Vue and Nuxt, which are open source technologies, and which have a very vibrant community.

For the database it is using "Supabase", and for hosting, it is currently using "Cloudflare".

## Supabase

Supabase is a managed "Postgres-Database", whith a nice UI, and authentication built in. Supabase offers several plans for more power of the database. Currently, the application runs on the free plan. If a distinct amount of users should use the application, one can choose to afford one of the paid plans, to get more power out of the database.

As Supabase is open source, it also allows one to create their own instances (Self hosting), if one would wish to do so:

https://supabase.com/docs/guides/self-hosting

## Cloudflare

Currently, the application is hosted on Cloudflare. Running in so called Cloudflare "Workers" or - "on the edge" (the part of the internet, that is most near to the users), it promises least latence and maximum performance. There are many other providers, that function the same way, and that have a similar hosting strategy. Our application (based on Nuxt) is compatible with almost all of them, out of the box. Nuxt is built in a way, that abstracts away all the configuration that would be needed for one or the other provider. In our case, the application was already successfully deployed to "Netlify". As tough we currently decided for Cloudflare, changing the hosting provider is not a big deal with the modern architecture and technology we use.

## Chat

The Chat uses Cloudflare "Durable Objects", which is kind of a hosting strategy for managed and globally distributed computer programs, that provide interaction, most likely through websockets. This concept is kind of unique to Cloudflare, but would we choose to do so, it is not a big deal to take our application (for the chat) an let it run (with little modifications) on our own servers, or other providers.

## Decentralization

With the technology we chose, we adopted a mixture of centralized and decentralized technologies. The execution of the application is very decentralized and scales beautifully. The single most centralized part of the application, and, in terms of decentralization, even the most important, is the database.

When talking about decentralization in terms of a "Social Network", very often the decentralization of "data" may be meant. In terms of data privacy, or in terms of shutdown or censoring, one could prefer an architecture, where there is no single database as "single source of truth", but instead, a decentralized way of holding and sharing the data. So that not one person, group or institution, is owner of all of the data.

There are two ways of how data could be decentralized in a social network like "Puzzle Social":

### Federation

There are decentralized social networks like "Mastodon", which make use of a protocal named "ActivityPub", that was released by the W3C (World Wide Web Consortium). With this architecture, there is no "single" person or instituiton, that is hosting the network, but instead, everybody who wants (a group, person or community) can host it's own instance of Mastodon. All members that belong to this community, will rigister at this self hosted node, but will still be able to interact with other nodes ot the network. Most of the data will be in the hands of this single community, but through "federation" (server to server communication) is accessible to other communities. In a way that allows one community to see the news (post feeds etc) of other communities, or exchange messages with other communities through the decentralized network. The network is built with independent nodes that still can communicate with each other.

Currently, Puzzle Social is built in a more centralized way, and is focused on distinct features and a nice UI, than on a distributed architecture. But it may would be nice to investigate a distributed architecture, because decentralization and communities just feels right.

For now, it is more about features that are not yet found, but should go far beyond basic features like messaging, following, and a "news feed", that may or not be able to be implemented through existing decentralized protocols.

For now, it is about performance, a nice energy, and something individual that is built from the ground up (as though for now there are only basic features still being implemented, there most probably soon will be features that not yet can be imagined). We still believe in aliens (ET), magic, and the unthinkable.

AI will most likely play a big part in the network, and it is a very interesting but challenging (channeling) thought to think about how to combine AI, data protection and decentralization.

Maybe we can create a decentralized version of the network, where every community will host it's own instance (node) and even the AI models are hosted privately.

## Web 3

Another way of making a Social network decentralized is by using blockchain technologies. A quote from ChatGPT:

"Decentralized social networks built on blockchain leverage distributed ledger technology to create platforms that are transparent, censorship-resistant, and user-centric. Unlike traditional models, where a central authority controls the network, blockchain-based social networks operate on decentralized protocols, ensuring that data and governance are distributed across the network."

It is possible to use the blockchain for the distribution of data, and we will investigate this further.

For now, we will stick with the current architecture, because it has some advantages, and it is a step by step stragegy accompanied by intuition.

Blockchain surely is the future, but for now it has some disatvantages, for example latency and speed. We aim to expand the application with blockchain technologies for certain functionalities in future, where distribution and decentralization is important. We can add to this more and more as needed.

## Next

Read the next chapter, to learn about this documentation.

# Scaling

This page gives an overview of how the application can be scaled when the user-base grows significantly, focusing on strategies such as database optimization, load balancing, and horizontal scaling.

## Nuxt

SSR and api-routes are scaled automatically by Cloudflare. New instances of our application are created automatically in areas, where high access rates are monitored. The code is run as near as possible at our users ("on the edge"), in over 400 locations worldwide:

https://www.cloudflare.com/de-de/network/

## Supabase

The "single source of truth" for our data is stored in Supabase. Supabase allows to select the location, and currently this is "Frankfurt am Main". To scale the application with a growing user base, there are several opportunities:

Create additional "read-only instances (replicas) in areas with high access rates: most actions like clicking through profiles are "read" actions. Adding additional read-only nodes in areas with high access rates is easy, and takes a lot of load from the main database. Supabase allows us to do this through the Supabase-Dashboard.

For write actions it is more complicated, because concurrent actions can lead to conflicts and inconsistancy. There are advanced ways of solving these issues, but scaling for read is more than enough in the first stages of the project.

## Caching

Caching data that is read often, but does not change often, is the preferred way of reducing the load on the database. Our application is run in Cloudflare Workers, and these workers allow our backend ("api-routes") to store api-responses in the Cloudflare cache, so that we can response to requests with responses from the cache, instead of quering our database again. When a profile in the social network should go viral, for example in Berlin, the profile will automatically be stored in the cache in the datacenter near Berlin, and all subsequent requests will be served by the data from the cache, instead of going to the databse in Frankfurt again. This significatly improves the experience and speed for all ursers.

Depending on the case, we have to define how long a resource should be cached (for example one hour), or we can select a very long period of caching, and invalidate or update the cache, when a user (for example) is updating his/her profile.

## Images

All uploaded images are stored in the so called Supabase "Bucket". Because this bucket is stored in a single location, we want to distribute it, to improve performance worldwide. For this reason, we use an "image CDN" (image contend delivery network). In our case, we are using the Cloudflare image CDN. Images are transformed to the size currently needed on the fly, to reduce the data that needs to be transferred. One image already transformed, is stored in the cloudflare cache, and is accessible worldwide.

This means, for a list of avatars for example, that is viewed by 100 people, we don't need to transfer each original (big) picture to each of these 100 persons. Instead, really small versions of the orgiginal pictures are created and sent around. Once these small versions are created, they are served from the cache for all subsequent requests. Bigger versions of a picture only have to be served, when a user clicks on a distinct profile.

This approch saves a lot of data and makes the whole network fast.

## Next

Read the next chapter, to learn about this documentaion.

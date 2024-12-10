# Technology

The project is built as a "serverless" architecture with Nuxt 4.

https://nuxt.com/

It is hosted "on the edge", with Cloudflare, and scaled automatically. In areas on the globe, with high access rates, new instances are created automatically.

The application runs in "universal" rendering mode, which means, the page is first loaded with SSR (server side rendering), and then, through hydration, the client code takes over, and the app will run as SPA (single page application).

## Api

In a Nuxt-Project, the frontend and backend (api-routes) are defined in one and the same project.

This project is deployed to Cloudflare, where it is run in so called Cloudflare "workers".

The project serves both the SSR requests (for initial loading), as well as the api calls, which the frontend will dispatch after hydration.

This is made possible by a Webserver-Architecture called "Nitro", on which Nuxt is based on.

https://nitro.build/

This architecture means, we don't need to develop and deploy a separate backend, and we can share code between the frontend and the api-routes. During SSR, the network-requests to the api-routes are not even triggered. Instead, the functions are called directly by the framework.

Cloudflare takes care of executing the code as near at the users as possible, for minimal latency and maximum performance.

### Database

The project is using Supabase to store it's data and to handle authentication. This mature and open source database ensures good security and very easy development.

https://supabase.com/
<br><br>
![](/assets/supabase.jpg)

## Code

Read the next chapter to learn about the structure of the code.

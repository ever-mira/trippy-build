# Code

This page gives an overview about how the application and it's code are structured.

The framework we use is called "Nuxt". Nuxt is a "meta-framework" based on Vue:

https://vuejs.org/

Vue is a framework, that allows to structure web frontend code in a way, that allows to create complex applications without being lost in complexity.

## Frontend

In the frontend, the code is encapsulated in loosely coupled components, to remove complexity and make it easily readable.

The components are using services (composables), to get their data or dispatch actions.

The framework is handeling the updating of the view, when state is changing.

A router is handeling the routing by means of the url, and vice versa.

A language service is handeling the translations for the currently selected language. Any number of languages can be added to be available for selection by the user.

The styling is done with UnoCss and the preset of Tailwind. A "dark:" modifier allows to define separate styles for when the "dark mode" is activated by the user.

All Code is written in Typescript, so that we have very good autocompletion for functions or properties of a class or object.

Authentication is handled automatically by Supabase. In the background it is sending an authentication token that is sent along to the database with every request.

### SSR

To make "universal" api-requests, we take the built in function "useFetch" of the Framework. This function is based on the native browser fetch, but is SSR compatible. It will ensure that data, that was already fetched during SSR, will not be fetched again on the client. It will instead be "inlined" into the html, and loaded as state on the client during hydration. The client application will become reactive with the already fetched state from the server. Should the user then navigate between pages on the client, the same "useFetch" function will be triggered to create a request to the api to get the data. This "universal" code ensures, that we have to write fetching logic only once, for SSR, and for the client, and it will behave like expected.

## Api Routes

When the frontend is doing api-calls to the "backend" (in Nuxt called "Api-Routes"), then a part of the application is triggered, that is handeling these requests.

For this purpose, Nuxt is using a web-framework called h3:

https://h3.unjs.io/

With the help of this Http-Web-framework, Nuxt automatically creates Api-Routes (REST-Endpoints) out of the structure of our files/folders (folder based routing), and in this way allows us to define our "backend" logic.

In these endpoints, we can receive the request parameters, the body data, we can query data from the database, create requests to other apis, and then answer the request.

This framework has a very clean and easy api.

## Next

Read the next chapter, to learn about automatic deployment.

# Code

This page gives an overview about how the application and it's code are structured.

## Frontend

In the frontend, the code is encapsulated in loosely coupled components, to remove complexity and make it easily readable.

The components are using services, to get their data or dispatch actions.

The services are using api calls, that are defined in a separate folder.

The framework is handeling the updating of the view, when state is changing.

A router is handeling the routing by means of the url, and vice versa.

A language service is handeling the translations for the currently selected language. Any number of languages can be added to be available for selection by the user.

The styling is done with UnoCss and the preset of Tailwind. A "dark:" modifier allows to define separate styles for when the "dark mode" is activated by the user.

All Code is written in Typescript, so that we have very good autocompletion for functions or properties of a class or object.

Authentication is handled automatically by Supabase. In the background it is sending an authentication token that is sent along to the database with every request.

## Api Routes

## Next

Read the next chapter, to learn about automatic deployment.

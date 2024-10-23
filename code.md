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

Authentication is handled by an authentication token that is sent along to the backend with every request.


## Backend
The backend is written in Typescript, and divided into Model, View and Controller.

The controller defines the endpoints using Get, Post, Put, and Delete actions. Annotations are used to define if a route is public or if certain permissions are needed.

Authentication is handled automatically by the framework, with the help of a JWT authentication token, that is sent along as a header with every request by the frontend.

The framework automatically is retrieving the user from the token, and makes it available in the controller.

Request parameters and the body payload are also made available with annotation decorated fields in the controller - in conjuction with generic typing.

The controller then is using services, to execute business logic.

The services are using dependency injection, to access other services or database models.

Database models are defined using annotated classes in a separate folder.

The dependency between documents (tables) are defined by the relations between classes and the types of their fields.

All writing and reading is handled by the database layer automatically. The query of the database is assembled with the help of the database layer 'mongoose'. Query, update and selection commands are beautyfully assembled with the help of javascript objects.

After executing the business logic, the service is handeling the result back to the controller. The controller is giving back the result to the frontend, with http status codes and possible body payload result in JSON.

## Next

Read the next chapter, to learn about automatic deployment.
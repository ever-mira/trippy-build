---
outline: deep
---

# Getting Started

This page explains how to set up the development environment.

## Prerequisites
A new version of Node:

https://nodejs.org/

Visual Studio Code:

https://code.visualstudio.com/

Git:

https://git-scm.com/

## Get the Code
Backend and frontend are in separate repositories:

frontend:

https://github.com/Ra13um42/puzzle-social

backend:

https://github.com/Ra13um42/puzzle-social-api

### Clone

For each of the repositories, open the link and click the green button:
![](/assets/code.png)
<br/>

And then copy the url:

![](/assets/copy.png)


Go to a folder on your computer, where you want the code to be stored.

Open the console, and type "git clone" (+url)

![](/assets/command.png)
<br><br>
Now you have both repositories stored on your computer.

![](/assets/folders.png)

## Install the database
The backend uses MongoDB to store it's data.

Just install it, no configuration neccessary.

https://www.mongodb.com/try/download/community

## Run the projects

Open both folders in two separate instances of Visual Studio Code.

Then, in the menu on the top, press Terminal -> New Terminal:
<br>
<br>
![](/assets/terminal.png)
<br>
<br>
In both projects execute the command "npm install", to install the dependencies:

![](/assets/install.png)

### Run the backend

Then, to run the backend, execute the command "npm run start:dev".

![](/assets/backend.png)

### Run the frontend

To run the frontend, execute the command "npm run dev".

![](/assets/frontend.png)

Click the link that is displayed to you, to open the app in your browser:

![](/assets/vite.png)

You should now see Puzzle Social running locally on your machine.

Changes you make to the code, are instantly reflected in the browser.

# Chat

This page gives an overview of the chat, and how it is implemented.

## Overview

The chat should give room not only for discussion or flirting, but also for:

- chat games - answering the first thing that comes to mind, without thinking (improvisation)
- training the humor
- training skillful and clever language
- roleplaying games
- location based chatrooms
- topic based rooms
- insults allowed and welcome rooms
- healing language
- anonymous chat, and more

The Chat is currently only implemented in a very basic manner, but is implemented in a way, that will allow us to scale it almost infinetely

## Durable Objects

The Chat is implemented separate from the rest of the application, to allow it scale independently.

Although the frontend is included in the main application, the "backend" for handeling the message exchange (over websocket connections), is created as a completely separate application, in the form of a so called "Durable Object":

https://developers.cloudflare.com/durable-objects/

For each Chat-Room, a separate instance is automatically created and executed in a datacenter near the users that are joining the particular room. This so called "Durable Object" will wait for connections, and when there are none, it will go to sleep, to reduce costs. Even more, it will also go to sleep when there are still connections, but no messages are being sent (hibernatable websocket connections). When a new message comes in, the Durable Object will wake up, and distribute the message to the other people in the room.

Each Durable Object hast it's own storage for the chat history, so that the chat is completely separate from the main database, and will scale independently.

## Functionality

Currently, the chat is very basic and allows only sending simple messages. In future, we can implement all features we want. Basic emojis are already supported, but maybe there can be a bar for selecting them. For each room there could be a theme and a description: what is the room for? The room could also throw new topics into the room.

## AI

Both Supabase as well as Cloudflare allow to integrate AI models into the application in a streightforward way. There could be a Chatbot based on ChatGPT, or an open source model, and it could have a given character.

## More

Later, the Chat could be extended to voice messages, and allow everybody to speak very short messages (wihtout too much thinking) into a secret space of wonder ;- speaking the first random sentence that comes to mind, without censoring themselves, may could be a very healing experience - as lecture about improvisation theather suggests. Our whole world is based on language, and it could not be too wrong to start with the language (and communication) to change the world.

It is also possible to create a Telegram-Bot, that allows to send voice messages anonymously into a room, so shy people can have the courage to just speak nonsense into the world, and find out that it is funny and healing.

## Next

Read the next chapter, to learn more about AI.

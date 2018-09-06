## Demo

[chat](https://cryptic-brook-36573.herokuapp.com/)

## Description

This is a simple real-time chat web application based on socket.io


## Prerequisites

`nodejs: ^8.11.3`
`Docker: 17.12.1-ce`

## Instalation

Basic way:

```sh
git clone https://github.com/ErnestZiemkowski/chat
cd chat/
npm install
```

Using Docker:

```sh
git clone https://github.com/ErnestZiemkowski/chat
cd chat/
docker build -t chat_server_image:v1 .
docker run -d --name chat_app_container -p 5000:5000 chat_server_image:v1
```

## Run app locally

NOTE: If you installed app using Docker you can omit this step

Go back to the root directory of chat

```sh
npm start
```

## Stack & Tools

- express.js
- node.js
- socket.io

## Possible improvements/ further development

- User authorization and authentication
- Creating chat rooms
- Keeping chat rooms message history
- Encrypting messages

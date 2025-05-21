# Node.js Todo List API

A simple RESTful API for managing todo items built with Node.js using only native HTTP module.

## Project Overview

This project is a lightweight Todo List API that allows users to perform CRUD operations (Create, Read, Update, Delete) on todo items. The application is built using vanilla Node.js without any external frameworks like Express.

## Features

- Get all todo items
- Create new todo items
- Update existing todo items
- Delete todo items


## Installation

1. Clone the repository:
```bash
git clone https://github.com/aritlhq/nodejs-todolist-api.git
cd nodejs-todolist-api
npm install
```

## Usage

### Starting the Server

Run the following command to start the server:

```bash
npm start
```

The server will start on port `3000` by default.

### API Endpoints

#### GET /
- Description: Retrieve all todo items.
- Response: JSON object containing all todo items with their IDs

#### POST /
- Description: Create a new todo item
- Request Body:

```json
{
  "todo": "Your new todo item"
}
```
- Response: Updated list of todo items

#### PUT /
- Description: Update an existing todo item
- Request Body:

```json
{
  "id": 0,
  "todo": "Updated todo item"
}
```

#### DELETE /
- Description: Delete a todo item
- Request Body:

```json
{
  "id": 0
}
```
- Response: Updated list of todo items

## Technical Details

- Built with Node.js native HTTP module
- Uses ES modules ( type: "module" in package.json)
- Data is stored in memory (resets when server restarts)
- Includes nodemon for development convenience.

## Development

This project uses nodemon for automatic server restarts during development. The server will automatically restart when you make changes to the code.
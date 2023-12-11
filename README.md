# ToDos managment API

Simple Node/Express/Typescript API to manage a ToDos. Users can create, read, update, and delete ToDos in a sql database.

## Running the app
To run locally, run `npm install`, then `npm start`

Once the app is running locally, you can access the API at `http://localhost:3000/api`

## Functionality

 - Retrieve all ToDos using `GET /todos`
 - Retrieve a single ToDo using `GET /todos/{id}`
 - Create a ToDo using `POST /todos`
 - Update a ToDo using `PUT /todos/{id}`
 - Delete a ToDo using `DELETE /todos/{id}`
 
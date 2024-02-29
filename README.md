# Document Management API

This NestJS application provides a simple REST API for managing documents. It supports operations such as retrieving a list of documents, fetching a specific document by ID, creating, updating, and deleting documents. Additionally, write operations require JWT authentication.

## Prerequisites
- Docker and Docker Compose

## Running the Application

To run the project locally, you will need to follow these steps:

1. Clone this repository.

2. On project root create a ```.env``` file and copy the contents of the ```.env.sample``` file (already present in the repository).

3. Make sure you have Docker installed on your machine.

4. Run the following command to start the project:

    ```docker-compose up```

The project will start on the default port 3000.

## API Endpoints

Below are the available endpoints and their descriptions:

### Public Endpoints

- `GET /documents`  
  Retrieves a list of all documents.  
  **Example request:** `curl http://localhost:3000/documents`

- `GET /documents/:id`  
  Retrieves a specific document by its ID.  
  **Example request:** `curl http://localhost:3000/documents/{id}`

### Protected Endpoints

The following endpoints require a valid JWT token for authentication. Obtain a token by logging in with the `/auth/login` endpoint.
The token must be entered in the header of each request, in the 'Authorization' field.

- `POST /documents`  
  Creates a new document. Requires a JSON body with document content.  
  **Example request:** `curl -X POST http://localhost:3000/documents -H "Authorization: Bearer <YOUR_TOKEN>" -H "Content-Type: application/json" -d '{"content": "New Document Content"}'`

- `PUT /documents/:id`  
  Updates an existing document by ID. Requires a JSON body with new document content.  
  **Example request:** `curl -X PUT http://localhost:3000/documents/{id} -H "Authorization: Bearer <YOUR_TOKEN>" -H "Content-Type: application/json" -d '{"content": "Updated Document Content"}'`

- `DELETE /documents/:id`  
  Deletes a specific document by its ID.  
  **Example request:** `curl -X DELETE http://localhost:3000/documents/{id} -H "Authorization: Bearer <YOUR_TOKEN>"`

### Authentication

- `POST /auth/login`  
  Authenticates a user and returns a JWT token. Requires a JSON body with `username` and `password`.  
  **Example request:** `curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d '{"username": "admin", "password": "password"}'`
  **Example response:** `{"token": "<token>"}`

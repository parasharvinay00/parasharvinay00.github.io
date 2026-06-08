# Understanding Rest

A REST API is a way for a client and a server to communicate over the internet. It uses HTTP methods, URLs, and data formats like JSON to send and receive information.

In REST, everything is treated as a **resource**. For example, in a notes application, `notes`, `users`, and `comments` can be resources. Each resource has its own URL.

```text
GET /notes
GET /notes/5
```

REST uses different HTTP methods for different actions:

* `GET` - Get data from the server
* `POST` - Create new data
* `PUT` - Replace existing data
* `PATCH` - Update part of existing data
* `DELETE` - Remove data

A well-designed REST API keeps the resource and the action separate. The URL tells you which resource you are working with, and the HTTP method tells you what action you want to perform.

Example:

```text
GET /users/10
DELETE /users/10
```

Both requests use the same resource (`users/10`), but they perform different actions.

REST APIs usually send data in JSON format:

```json
{
  "id": 5,
  "title": "Learn REST",
  "completed": false
}
```

REST APIs also use HTTP status codes to show the result of a request:

* `200 OK` - Request was successful
* `201 Created` - New resource was created
* `400 Bad Request` - The request contains invalid data
* `404 Not Found` - The resource does not exist
* `500 Internal Server Error` - Something went wrong on the server

A REST API should be **stateless**. This means every request should contain all the information needed by the server. The server should not rely on previous requests to process the current one.

REST is popular because it is simple, flexible, and works well with HTTP. Different applications, such as web apps, mobile apps, and backend services, can use the same REST API if they follow the expected request and response format.

In short, a REST API is a simple and organized way to make backend resources available through HTTP. To build a good REST API, use clear URLs, choose the correct HTTP methods, return useful status codes, and keep requests stateless.

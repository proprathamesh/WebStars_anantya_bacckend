## Guidelines for Passing req.body for createUser Route

-   **URL**: `/api/users`
-   **HTTP Request Type**: `POST`

1. **Content-Type Header**: Set the `Content-Type` header to `application/json` to indicate that the request body contains JSON data.

2. **Required Fields**: Include all required fields in the request body. For the `createUser` route, the required fields are `name`, `email`, `password`, and `role`.

3. **Field Types**: Ensure that the data types of the fields match the expected types. For example, `name` should be a string, `email` should be a valid email address, `password` should be a string, and `role` should be a string with a value of either `'patient'` or `'doctor'`.

4. **Example Request Body**:

    ```json
    {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "password": "password123",
        "role": "patient"
    }
    ```

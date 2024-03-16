# Routes for User

## 1. Guidelines for createUser Route

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

5. **Response**: you get `token` and `message`

## 2. Guidelines for getUsers Route

-   **URL**: `/api/users`
-   **HTTP Request Type**: `GET`

## 3. Guidelines for getUserById Route

-   **URL**: `/api/users/:id`
-   **HTTP Request Type**: `GET`

## 4. Guidelines for updateUserById

-   **URL**: `/api/users/:id`
-   **HTTP Request Type**: `PUT`

1. **Content-Type Header**: Set the `Content-Type` header to `application/json` to indicate that the request body contains JSON data.

2. **Required Parameters**: Include the user ID in the URL path (`:id`) to specify which user to update.

3. **Request Body**: The request body should contain the fields to be updated. Examples of fields that can be updated include `name`, `email`, `password`, and `role`.

4. **Example Request Body**:

    - Update the user's name:

        ```json
        {
            "name": "Updated Name"
        }
        ```

    - Update the user's email:

        ```json
        {
            "email": "updated.email@example.com"
        }
        ```

    - Update the user's password:

        ```json
        {
            "password": "updatedpassword123"
        }
        ```

    - Update the user's role:

        ```json
        {
            "role": "doctor"
        }
        ```

    - Update multiple fields:

        ```json
        {
            "name": "New Name",
            "email": "new.email@example.com",
            "password": "newpassword456",
            "role": "patient"
        }
        ```

## 5. Guidelines for Deleting User by ID

-   **URL**: `/api/users/:id`
-   **HTTP Request Type**: `DELETE`

1. **Required Parameters**: Include the user ID in the URL path (`:id`) to specify which user to delete.

2. **Response**: If the user is successfully deleted, respond with a status code of `204 No Content`. If the user ID is not found, respond with a status code of `404 Not Found`.

3. **Example URL**: `/api/users/123` (where `123` is the ID of the user to be deleted).

# Routes for Medical Records

## 1. Guidelines for createMedicalRecord

-   **URL**: `/api/medicalrecords`
-   **HTTP Request Type**: `POST`

1. **Content-Type Header**: Set the `Content-Type` header to `application/json` to indicate that the request body contains JSON data.

2. **Required Fields**: Include all required fields in the request body. For the `createMedicalRecord` route, the required fields are `patientId`, `doctorId`, `dateOfVisit`, `diagnosis`, `treatment`, `medication`, and `otherInfo`.

3. **Field Types**: Ensure that the data types of the fields match the expected types. For example, `patientId` and `doctorId` should be strings representing the IDs of the patient and doctor respectively, `dateOfVisit` should be a date string, and the rest of the fields should be strings.

4. **Example Request Body**:

    - Create a medical record with basic information:

        ```json
        {
            "patientId": "patient123",
            "doctorId": "doctor456",
            "dateOfVisit": "2024-03-20",
            "diagnosis": "Common cold",
            "treatment": "Rest and plenty of fluids",
            "medication": "Paracetamol",
            "otherInfo": "No known allergies"
        }
        ```

    - Create a medical record with additional information:

        ```json
        {
            "patientId": "patient789",
            "doctorId": "doctor012",
            "dateOfVisit": "2024-03-22",
            "diagnosis": "Acute bronchitis",
            "treatment": "Prescribed antibiotics",
            "medication": "Amoxicillin",
            "otherInfo": "Smoker, advised to quit"
        }
        ```

## 2. Guidelines for getMedicalRecords

-   **URL**: `/api/medicalrecords`
-   **HTTP Request Type**: `GET`

1. **Query Parameters**: You can use query parameters to filter the medical records. For example, you can filter by `patientId` or `doctorId`.

2. **Example URL**:

    `/api/medicalrecords`

3. **Response**: The response will be an array of medical records.

4. **Example Response**:

    ```json
    [
        {
            "id": "record1",
            "patientId": "patient123",
            "doctorId": "doctor456",
            "dateOfVisit": "2024-03-20",
            "diagnosis": "Common cold",
            "treatment": "Rest and plenty of fluids",
            "medication": "Paracetamol",
            "otherInfo": "No known allergies"
        },
        {
            "id": "record2",
            "patientId": "patient123",
            "doctorId": "doctor789",
            "dateOfVisit": "2024-03-25",
            "diagnosis": "Influenza",
            "treatment": "Prescribed antiviral medication",
            "medication": "Oseltamivir",
            "otherInfo": "Patient has a history of asthma"
        }
    ]
    ```

## 3. Guidelines for getMedicalRecordById

-   **URL**: `/api/medicalrecords/:id`
-   **HTTP Request Type**: `GET`

1. **Required Parameters**: Include the medical record ID in the URL path (`:id`) to specify which medical record to retrieve.

2. **Example URL**: `/api/medicalrecords/record123` (where `record123` is the ID of the medical record to retrieve).

3. **Response**: The response will be the medical record object with the specified ID.

4. **Example Response**:

    ```json
    {
        "id": "record123",
        "patientId": "patient123",
        "doctorId": "doctor456",
        "dateOfVisit": "2024-03-20",
        "diagnosis": "Common cold",
        "treatment": "Rest and plenty of fluids",
        "medication": "Paracetamol",
        "otherInfo": "No known allergies"
    }
    ```

## 4. Guidelines for updateMedicalRecordById

-   **URL**: `/api/medicalrecords/:id`
-   **HTTP Request Type**: `PUT`

1. **Required Parameters**: Include the medical record ID in the URL path (`:id`) to specify which medical record to update.

2. **Request Body**: The request body should contain the fields to be updated. Examples of fields that can be updated include `dateOfVisit`, `diagnosis`, `treatment`, and `medication`.

3. **Example Request Body**:

    - Update the medical record's date of visit:

        ```json
        {
            "dateOfVisit": "2024-03-25"
        }
        ```

    - Update the medical record's diagnosis:

        ```json
        {
            "diagnosis": "Influenza"
        }
        ```

    - Update the medical record's treatment:

        ```json
        {
            "treatment": "Prescribed antiviral medication"
        }
        ```

    - Update the medical record's medication:

        ```json
        {
            "medication": "Oseltamivir"
        }
        ```

    - Update multiple fields:

        ```json
        {
            "dateOfVisit": "2024-03-25",
            "diagnosis": "Influenza",
            "treatment": "Prescribed antiviral medication",
            "medication": "Oseltamivir"
        }
        ```

## 5. Guidelines for Deleting Medical Record by ID

-   **URL**: `/api/medicalrecords/:id`
-   **HTTP Request Type**: `DELETE`

1. **Required Parameters**: Include the medical record ID in the URL path (`:id`) to specify which medical record to delete.

2. **Example URL**: `/api/medicalrecords/record123` (where `record123` is the ID of the medical record to delete).

3. **Response**: If the medical record is successfully deleted, respond with a status code of `204 No Content`. If the medical record ID is not found, respond with a status code of `404 Not Found`.

# Routes for Permission

## 1. Guidelines for Granting Permission to Medical Record

-   **URL**: `/api/permissions`
-   **HTTP Request Type**: `POST`

1. **Content-Type Header**: Set the `Content-Type` header to `application/json` to indicate that the request body contains JSON data.

2. **Required Fields**: Include all required fields in the request body. For the `grantPermission` route, the required fields are `medicalRecordId`, `doctorId`, and `type`.

3. **Field Types**: Ensure that the data types of the fields match the expected types. For example, `medicalRecordId` and `doctorId` should be strings representing the IDs of the medical record and the doctor respectively, and `type` should be a string with a value of either `'read'` or `'write'`.

4. **Example Request Body**:

    ```json
    {
        "medicalRecordId": "record123",
        "doctorId": "doctor456",
        "type": "read"
    }
    ```

## 2. Guidelines for Updating Permission by ID

-   **URL**: `/api/permissions/:id`
-   **HTTP Request Type**: `PUT`

1. **Required Parameters**: Include the permission ID in the URL path (`:id`) to specify which permission to update.

2. **Request Body**: The request body should contain the fields to be updated. For the `updatePermissionById` route, the required field is `type`, which specifies the type of permission (`'read'` or `'write'`).

3. **Example Request Body**:

    ```json
    {
        "type": "write"
    }
    ```

## 3. Guidelines for Deleting Permission by ID

-   **URL**: `/api/permissions/:id`
-   **HTTP Request Type**: `DELETE`

1. **Required Parameters**: Include the permission ID in the URL path (`:id`) to specify which permission to delete.

2. **Example URL**: `/api/permissions/permission123` (where `permission123` is the ID of the permission to delete).

3. **Response**: If the permission is successfully deleted, respond with the deleted permission object. If the permission ID is not found, respond with a status code of `404 Not Found`.

4. **Example Response**:

    ```json
    {
        "id": "permission123",
        "medicalRecordId": "record456",
        "doctorId": "doctor789",
        "type": "write"
    }
    ```

# Routes for Documents

## 1. Guidelines for uploadeDocument

-   **URL**: `/api/documents/upload`
-   **HTTP Request Type**: `POST`
-   **Content-Type Header**: Set the `Content-Type` header to `multipart/form-data` to upload files.

1. **Request Body**: Use a `multipart/form-data` request to upload the document file. Include the file in the `file` field of the form data.

2. **Example Request Body**:

    ```json
    {
        "medicalRecordId": "record456",
        "patientId": "patient789",
        "document": "base64-encoded-pdf-data-string-asdf-asdf-asdf"
    }
    ```

3. **Response**: The response will be the uploaded document object, which includes the document ID, medical record ID, patient ID, and file data.

4. **Example Response**:

    ```json
    {
        "_id": "document123",
        "medicalRecordId": "record456",
        "patientId": "patient789",
        "document": "base64-encoded-pdf-data"
    }
    ```

## 2. Guidelines for getDocuments

-   **URL**: `/api/documents`
-   **HTTP Request Type**: `GET`

1. **Response**: The response will be an array of all documents in the database.

2. **Example Response**:

    ```json
    [
        {
            "_id": "document1",
            "medicalRecordId": "record456",
            "patientId": "patient789",
            "document": "base64-encoded-pdf-data-1"
        },
        {
            "_id": "document2",
            "medicalRecordId": "record789",
            "patientId": "patient123",
            "document": "base64-encoded-pdf-data-2"
        }
    ]
    ```

## 3. Guidelines for getDocumentById

-   **URL**: `/api/documents/:id`
-   **HTTP Request Type**: `GET`

1. **Required Parameters**: Include the document ID in the URL path (`:id`) to specify which document to retrieve.

2. **Example URL**: `/api/documents/document123` (where `document123` is the ID of the document to retrieve).

3. **Response**: If the document is found, respond with the document object. If the document ID is not found, respond with a status code of `404 Not Found` and an error message.

4. **Example Response**:

    ```json
    {
        "_id": "document123",
        "medicalRecordId": "record456",
        "patientId": "patient789",
        "document": "base64-encoded-pdf-data"
    }
    ```

## 4. Guidelines for updateDocumentById

-   **URL**: `/api/documents/:id`
-   **HTTP Request Type**: `PUT`

1. **Required Parameters**: Include the document ID in the URL path (`:id`) to specify which document to update.

2. **Request Body**: The request body should contain the fields to be updated.

3. **Example Request Body**:

    ```json
    {
        "document": "new-base64-encoded-pdf-data"
    }
    ```

4. **Example response**:

    ```json
    {
        "_id": "document123",
        "medicalRecordId": "record456",
        "patientId": "patient789",
        "document": "new-base64-encoded-pdf-data"
    }
    ```

## 5. Guidelines for deleteDocumentById

-   **URL**: `/api/documents/:id`
-   **HTTP Request Type**: `DELETE`

1. **Required Parameters**: Include the document ID in the URL path (`:id`) to specify which document to delete.

2. **Example URL**: `/api/documents/document123` (where `document123` is the ID of the document to delete).

3. **Response**: If the document is successfully deleted, respond with a message indicating that the document has been deleted. If the document ID is not found, respond with a status code of `404 Not Found` and an error message.

4. **Example Response**:

    ```json
    {
        "message": "Document deleted"
    }
    ```

# Route for Login

## Guidelines for loginUser Route

1. **Description**:

    The `loginUser` route is used to authenticate a user by verifying their email and password. If the authentication is successful, a JWT token is generated and returned to the client.

2. **Endpoint**

    - **URL**: `/login`
    - **HTTP Method**: POST

3. **Request Body**

    - **Type**: JSON
    - **Fields**:
    - `email` (string, required): The email address of the user.
    - `password` (string, required): The password of the user.

4. **Example Request Body**

    ```json
    {
        "email": "user@example.com",
        "password": "password123"
    }
    ```

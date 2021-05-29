# AVIANA TEST
  
List of available endpoints:
- `POST /users/register`
- `POST /users/login`
- `POST /kycs/addkyc`
- `GET /kycs/getall`
- `GET /kycs/findbyuser/:id`
- `GET /kycs/detailkyc/:id`
- `PATCH /kycs/updateapproval/:id`

### POST /users/register

Add new user to KYC App

Request:

- data:

```json
{
  "email": "string",
  "password": "string",
  "name": "string",
  "role": "string"
}
```
Response:

- status 201

```json
{
    "id": "string",
    "email": "string",
    "name": "string",
    "role": "string"
}
```

Error Response:
- 400 bad request
- 500 internal server error

### POST /users/login

Login to app to get token

Request:

- data:

```json
{
  "email": "string",
  "password": "string",
}
```
Response:

- status 200

```json
{
  "accessToken": "string"
}
```
Error Response:
- 400 bad request
- 500 internal server error


### POST /kycs/addkyc

add kyc data

Request:

- data:

```json
{
  "ktp": "string",
  "selfieUser": "string",
  "statusApproval": "string",
}
```

- header:
```json
{
  "accessToken": "string"
}
```

Response:

- status 200

```json
{
  "id": "number",
  "UserId": "number",
  "ktp": "string",
  "selfieUser": "string",
  "statusApproval": "string",
}
```
Error Response:
- 401 unauthorized
- 400 bad request
- 500 internal server error

### GET /kycs/getall

getAll kyc datas

Request:

- data:

- header:
```json
{
  "accessToken": "string"
}
```

Response:

- status 200

```json

[{
  "id": "number",
  "UserId": "number",
  "ktp": "string",
  "selfieUser": "string",
  "statusApproval": "string",
  "User":{
    "id": "string",
    "email": "string",
    "name": "string",
    "role": "string"
  }
}]
```
Error Response:
- 401 unauthorized
- 500 internal server error

### GET /kycs/findbyuser/:id

getAll kyc datas find by UserId

Request:

- params:
```json
{
  "id": "number"
}
```

- header:
```json
{
  "accessToken": "string"
}
```

Response:

- status 200

```json

[{
  "id": "number",
  "UserId": "number",
  "ktp": "string",
  "selfieUser": "string",
  "statusApproval": "string",
  "User":{
    "id": "string",
    "email": "string",
    "name": "string",
    "role": "string"
  }
}]
```
Error Response:
- 401 unauthorized
- 500 internal server error

### GET /kycs/detailkyc/:id

get kyc detail data

Request:

- params:
```json
{
  "id": "number"
}
```

- header:
```json
{
  "accessToken": "string"
}
```

Response:

- status 200

```json
{
  "id": "number",
  "UserId": "number",
  "ktp": "string",
  "selfieUser": "string",
  "statusApproval": "string",
}
```
Error Response:
- 401 unauthorized
- 500 internal server error

### PATCH /kycs/updateapproval/:id

update kycs status approval data

Request:

- params:
```json
{
  "id": "number"
}
```

- header:
```json
{
  "accessToken": "string"
}
```

Response:

- status 200

```json
{
  "message": "string",
}
```
Error Response:
- 401 unauthorized
- 500 internal server error


### ERROR RESPONSE DETAIL

- 401 UNAUTHORIZED 

```json
{
    "message": "Not Authorized"
}
```

- 404 Bad Request / Validation Error

```json
{
    "message": "Data not found"
}
```

- 400 Bad Request / Validation Error

```json
{
    "message": "Required field must be filled"
}
```

- 500 Internal Server Error

```json
{ 
    "error": "Internal Server Error"
}
```
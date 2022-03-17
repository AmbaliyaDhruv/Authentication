# Authentication-API
Mock-API for Authentication 

# Usage
You able to use these features which login, signup. Also I want to say, I've done login and signup requests use client side. If you want to look at below request.

# URL
https://marriott-bonvoy.herokuapp.com

# Register
POST URL -/Register

``` 
{
  "name": "DHRUV AMBALIYA",
  "email": "hello@dhruv.com"
  "password": "secretfordhruv",
  "username": "ambaliyaDhruv",
  "mobile": "9876259458",
  "description": "My first API server" 
  }
  ```
# RESPONSE
Success (Status Code - 200)
  ```
  {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJ3ZXJ0eSIsImVtYWlsIjoic2RmZ0BzZGZnIiwidXNlcm5hbWUiOiJ3c2RmZ2giLCJwYXNzd29yZCI6IiQyYSQwOCQ0bW0ueTE2c2JSbjlTNGcvNXhNanF1emltb0l1dEI5T2hmcXdKUXdTazI2RVVDVF,
  user:{
createdAt: "2022-03-16T12:06:27.117Z"
description: "My first API server"
email: "hello@dhruv.com"
mobile: 9876259458
name: "DHRUV AMBALIYA"
password: "$2a$08$4mm.y16sbRn9S4g/5xMjquzimoIutB9OhfqwJQwSk26EUCTX6vJe6"
updatedAt: "2022-03-16T12:06:27.117Z"
username: "wsdfgh"
_id: "6231d2c37df2a8ae87a4e34d"
}
  }
  ```
  Failure (Status Code - 200)
  
  ```
  {
  "message": "Registration failed, user already exists"
}
```

# Login
POST URL -/login
```
{
  "password": "secret",
  "username": "masai-school"
}
```
# RESPONSE
Success (Status Code - 200)
```
{
  "token": "cc4a5ce1b3df48aec5d22d1f16b894a0b894eccc"
}
```
Failure (Status Code - 401)
```
{
  "message": "Invalid login creadentials"
}
```


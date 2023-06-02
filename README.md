
# Melon Health

This website is about medicine reminders, and you can create the name of the medicine, time, date, and number of pills that you want, and it can update, edit, and delete it.


## Feature
| Feature  | Discription    | 
| :-------- | :------- | 
| Register | create an account | 
| Login | log in to the website |
| Log out | log out from the website |
| create reminder | create a reminder with information |
| edit reminder | edit a reminder |
| delete reminder | delete a reminder |


# To run the frontend and backend in developing mode

cd to backend then run.

    npm run start
    
cd to frontend then run.
  
    npm run dev

    





#### Login

```http
URL: /login
Method: POST
```

#### Request body

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | The username of the user |
| `password` | `string` | The password of the user|

```http
{
  "username": "phing",
  "password": "phing12345"
}
```


success

200 login success

#### Response

| Property | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `boolean` | Indicates if the login was successful or notitem to fetch |
| `data`      | `object` | Contains the user data(id , username ) if the login was successful |
| `token`      | `string	` | 	The JWT token generated for the authenticated user |



#### Register

```http
URL: /register
Method: POST
```

#### Request body

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | The username of the user |
| `email` | `string` | The email address of the user|
| `password` | `string` | The password of the user|

```http
{
  "username": "phing",
  "email": "phing@gmail.com",
  "password": "phing12345",
  
}
```

success

200 register success

#### Response

| Property | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `success`      | `boolean` | Indicates if the register was successful or notitem to fetch |
| `data`      | `object` | Contains the user data(id , username ) if the register was successful |
| `token`      | `string	` | 	The JWT token generated for the authenticated user |




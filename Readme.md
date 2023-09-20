# User Authentication Project

This repository contains the code for a User Authentication Project. This project provides user authentication features such as registration, login, and password recovery. Below, we'll explain the different components of this project.

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Authentication Project</title>
    <script defer src="index.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="mainBox">
        <ul id="navlist">
          <li id="register">
            <a href="register.html">
              Register
            </a>
          </li>
          <li id="login/out">
            <a href="login.html">
              Login
            </a>
          </li>
          <li id="forgotPass">
            <a href="forgotPass.html">
              Forgot Password
            </a>
          </li>
        </ul>
      </div>
    </body>
</html>
```

- This HTML file represents the main structure of the project's user interface.
- It includes links to registration, login, and forgot password pages.
- JavaScript (`index.js`) is linked with the `defer` attribute to handle user interactions.

## JavaScript (index.js)

The JavaScript file (`index.js`) is responsible for handling user interactions and implementing authentication features. Below are the main functionalities:

- **Registration**: When a user clicks the "Register" link, they are directed to the registration page (`register.html`) where they can create a new account with their email and password.

- **Login**: Clicking the "Login" link leads users to the login page (`login.html`) where they can enter their credentials to access their account.

- **Forgot Password**: The "Forgot Password" link takes users to the forgot password page (`forgotPass.html`) where they can request a password reset if they've forgotten their password.

- **Authentication Logic**: `index.js` contains the JavaScript code to handle user authentication logic. This typically includes checking user credentials, validating input, and managing user sessions.

## CSS (style.css)

The `style.css` file is responsible for styling the user interface elements. It defines the layout, colors, and overall visual appearance of the authentication pages.


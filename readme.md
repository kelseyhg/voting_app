# Auth Boilerplate: How to Use

This is a basic node/express app with ability to add users and log them in securely with user authentication. It can be applied to any project that needs user authentication and secure sessions. Take the generic boilerplate and customize it for new projects. 

## What it includes:

* Sequelize models and migration for user model
* Settings for Postgresql
* Passport and passport local
* Express sessions for logged-in user
* Connect-flash error and success messages on log-in and log-out

### User Model

| Column Name | SQL Type | Notes |
|-------------|----------|-----------------------------------|
| id | Integer | serial primary key |
| createdAt | Date | automatically-generated |
| updatedAt | Date | automatically-generated |
| firstname	| String | - |
| lastname | String | - |
| email | String | usernameField for log-in |
| password | String | hashed with bcrypt |
| dob | Date | - |
| admin | Boolean | admin or regular user |


> NOTE: change these fields in model and migration files BEFORE running sequelize db:migrate

### Defualt Routes Supplied

| Method | Path | Location | Purpose |
| ------- | ----------------------- | ------------- | ------------------------------------- |
| GET | / | index.js | Home Page |
| GET | /profile | controllers/profile.js | Profile page (authorization req) |
| GET | /auth/login | controllers/auth.js | Log-in form page |
| POST | /auth/login | controllers/auth.js | Log-in submission + profile redirect |
| GET | /auth/signup | controllers/auth.js | Sign-up form page |
| POST | /auth/signup | controllers/auth.js | Sign-up submission + redirect to profile |
| GET | auth/logout | controllers/auth.js | Logout + redirect to home |



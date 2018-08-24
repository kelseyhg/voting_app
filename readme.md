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

## Steps for Use

#### 1. Clone repo, but with a different name

```
git clone <repo_link> <new_project_name>
```
#### 2. Create a new database for your project 
```
createdb <new_db_name>
```
#### 3. Open `config.json` and change the following: 
* Change database name to new_db_name from above
* Set username/password for your local environment
* Make sure the flavor of SQL is correct for your project

> NOTE: if changing from Postgres, need different node_modules

#### 4. Edit/check models and migrations for your project needs

For example, remove dob field or admin field; add username field, etc

Delete or add to both migration and model

#### 5. Run the migrations
```
sequelize db:migrate
``` 

#### 6. Add a `.env` file with a SESSION_SECRET key for session implementation

#### 7. Install node modules from `package.json`
```
 npm install
```
#### 8. Run your server and make sure everything works
If nodemon is installed globally:
```
nodemon
```
Otherwise: 
```
node index.js
```
#### 9. Create a new repository for your new project
* Create a new repository on your personal GitHub account
* Delete the old remote to origin
* Add new repo as the new remote location (can still be called origin)
* git push

```
git remote remove origin
git remote add origin <new_repo_link?
git add .
git commit -m "new project repo"
git push origin master
```

>NOTE: Do NOT make commits from the new project to the auth boilerplate

## Next steps:

Add new models and migrations for your new app. 




















# Landmark-Remark (In Development)

Full stack application that allows the user the following user stories:
1.	As a user (of the application) I can see my current location on a map
2.	As a user I can save a short note at my current location
3.	As a user I can see notes that I have saved at the location they were saved on the map
4.	As a user I can see the location, text, and user-name of notes other users have saved
5.	As a user I have the ability to search for a note based on contained text or user-name.

Front-end stack:
```
React, Redux, Redux-Observable, Rxjs, Google Maps, Html5, CSS, Node.js, Webpack2, Babel, Yarn
```
Back-end stack:
```
.NET Core WebAPI, MSSQL
```

## Getting Started

```
Node.js and NPM - Install from https://www.npmjs.com/get-npm
Yarn - Install from https://yarnpkg.com/lang/en/docs/install/
Visual Studio 2017 - Install from https://www.visualstudio.com/downloads/
```

### Installing

    1.Run Gitbash in the folder you would like to clone the project.
    2.In git bash run git clone https://github.com/jcbasson/Landmark-Remark.git
    3.Using Gitbash in the root of project run Yarn
    4.Navigate to server in the root folder and run server.sln
    5.In Visual Studio run project to setup the api
    6.Go back to Gitbash and in the root folder run Yarn start


### TODOS
    1. Finish user stories 2 to 5
    2. Build Front-end tests
    3. Create separate production and development webpack configuration files
    3. Build MSSQL Database
    4. Build Repository Layer
    5. Build Service Layer and hook it up to Repository Layer
    6. Hook Api to Service layer
    7. Build unit tests for Repository, Service and API layers respectively
    8. Build integration test for API points

## Authors

* **Jan-Christiaan Basson**

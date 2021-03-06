# Landmark-Remark (In Development)

Full stack application that allows the user the following user stories:
1.	As a user (of the application) I can see my current location on a map
2.	As a user I can save a short note at any selected location
3.	As a user I can see notes that I have saved at the location they were saved on the map
4.	As a user I can see the location, text, and user-name of notes other users have saved
5.	As a user I have the ability edit my existing notes.

Front-end stack:
```
React, Redux, Redux-Observable, Rxjs, Google Maps, Immutable.js, Webpack2, Babel, Yarn
```
Back-end stack:
```
.NET Core WebAPI, MSSQL
```
Couple of Notes on Front-end architecure:
```
Duck pattern used for each component
Component includes everything it needs to function: EPICs, Actions, View, Container, and additional libraries
For now they all share the their parent "App" components Reducer
All asynchronicity is done through EPICS (i.e ajax requests, dynamic script loading...)
Starting point index.js in the client folder
Planning notes can be found in Landmark-Remark\docs
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
    3.Using Gitbash in the root of project "cd Landmark-Remark" run "Yarn" 
    4.Navigate to server in the root folder and run server.sln
    5.In Visual Studio run project "Landmark_Remark.api" to setup the api (Don't use IISExpress)
    6.Go back to Gitbash and in the root folder run Yarn start
    7.For now use only Google Chrome or IE Edge and run http://localhost:8080/


### TODOS
    1. Integrate my front-end code to a .NET SPA Web Application to alow streamlining of the dev process.
       a.See if I can change the endpoint to WebQL
    2. Build in SignalR Middleware to allow real time updating of other users remarks
    3. Build Front-end tests
    4. Build MSSQL Database
    5. Build Repository Layer
    6. Build Service Layer and hook it up to Repository Layer
    7. Hook Api to Service layer
    8. Implement API Security protocols
    9. Build unit tests for Repository, Service and API layers respectively
    10. Build integration test for API points
    11. Test whole application

## Authors

* **Jan-Christiaan Basson**

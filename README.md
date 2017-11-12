# Landmark-Remark (In Development)

Full stack application that allows the user the following user stories:
1.	As a user (of the application) I can see my current location on a map
2.	As a user I can save a short note at any selected location
3.	As a user I can see notes that I have saved at the location they were saved on the map
4.	As a user I can see the location, text, and user-name of notes other users have saved
5.	As a user I have the ability edit my existing notes.

Front-end stack:
```
React, Redux, Redux-Observable, Rxjs, Google Maps, Html5, CSS, Node.js, Webpack2, Babel, Yarn
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
    5.In Visual Studio run project to setup the api
    6.Go back to Gitbash and in the root folder run Yarn start
    7.For now use only Google Chrome or IE Edge and run http://localhost:8080/


### TODOS
    1. Implement Immutable.js for state management and mutations
    2. Build in defensive strategies for negative situations i.e. server is down
    3. Build Front-end tests
    4. Integrate my front-end code to a .NET SPA Web Application to alow streamlining of the dev process.
    5. Build in SignalR Middleware to allow real time updating of other users remarks
    6. Build MSSQL Database
    7. Build Repository Layer
    8. Build Service Layer and hook it up to Repository Layer
    9. Hook Api to Service layer
    10. Implement API Security protocols
    10. Build unit tests for Repository, Service and API layers respectively
    11. Build integration test for API points
    12. Test whole application

## Authors

* **Jan-Christiaan Basson**

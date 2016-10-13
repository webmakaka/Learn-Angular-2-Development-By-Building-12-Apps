# [Eduonix] Learn Angular 2 Development By Building 12 Apps

[![Join the chat at https://gitter.im/Learn-Angular-2-Development-By-Building-12-Apps/Lobby](https://badges.gitter.im/Learn-Angular-2-Development-By-Building-12-Apps/Lobby.svg)](https://gitter.im/Learn-Angular-2-Development-By-Building-12-Apps/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)



![Learn Angular 2 Development By Building 12 Apps](/img/angular-js.png?raw=true)


<br/>

**Learn Angular 2 Development By Building 12 Apps - 10$** (no ref link, not any interest)  
https://www.kickstarter.com/projects/1311831077/learn-angular-2-development-by-building-10-apps

<br/>

**Important!**   
In the video presents angular 2 RC4!!!

I'm planning to work with Angular 2.0.1 and update projects if necessary to newest versions of angular


<br/>
<br/>

I'm working on Ubuntu in docker container with debian jessie:

    $ lsb_release -a
    Description:	Ubuntu 14.04.5 LTS
    Codename:	trusty

<br/>

    $ docker -v
    Docker version 1.9.1, build a34a1d5


<a href="http://jsdev.org/env/docker/run-container/">How to run docker container for start development</a>
(If link will not work give me to know about it)

<br/>

    $ node -v
    v4.5.0

<br/>

    # npm -v
    2.15.9


<br/>

### 01 Simple Angular 2 website

Technologies: Twitter Bootstrap

<br/>

02 A2 Quickstart Setup Explanation


https://angular.io/docs/ts/latest/quickstart.html

    $ cd /project/01_Simple_Angular_2_website/
    $ npm init

    $ npm install
    $ npm start

**Error**:

    app/main.ts(1,10): error TS2305: Module '"/project/01_Simple_Angular_2_website/node_modules/@angular/platform-browser-dynamic/index"' has no exported member 'bootstrap'.


We update all project.

![Application](/img/project_01_img_01.png?raw=true)


<br/>

03 Navbar Component

https://www.bootstrapcdn.com/  
https://code.jquere.com/

http://getbootstrap.com/examples/starter-template/


![Application](/img/project_01_img_02.png?raw=true)


<br/>

04 Jumbotron Page Components

http://getbootstrap.com/components/#jumbotron


<br/>

05 Angular 2 Router

https://angular.io/docs/ts/latest/tutorial/toh-pt5.html

![Application](/img/project_01_img_03.png?raw=true)



<br/>

### 02 Github Profile Searcher

**Technologies:** Twitter Bootstrap

<br/>

02 QuickStart Profile Component Setup

https://github.com/angular/quickstart

    $ cd 02_Github_Profile_Searcher/
    $ git clone --depth=1 https://github.com/angular/quickstart .
    $ npm install
    $ npm start

http://localhost:3000/


![Application](/img/project_02_img_01.png?raw=true)

<br/>

03 Github Service Get User

![Application](/img/project_02_img_02.png?raw=true)


<br/>

04 Displaying Profile Data

![Application](/img/project_02_img_03.png?raw=true)


<br/>

05 Displaying User Repos

![Application](/img/project_02_img_04.png?raw=true)


<br/>

06 Search User Functionality

Looks like i had been banned on github, because I made so many connection to github api.

![Application](/img/project_02_img_05.png?raw=true)


<br/>

### 03 Spotify App

**Technologies:** Bootswatch


<br/>

02 Navbar Router Setup

    $ cd 03_Spotify_App/
    $ git clone --depth=1 https://github.com/angular/quickstart .
    $ npm install
    $ npm start

<br/>

https://bootswatch.com/cyborg/  
http://getbootstrap.com/examples/starter-template/  

<br/>

![Application](/img/project_03_img_01.png?raw=true)


<br/>

03 Search Component Service

https://developer.spotify.com/web-api/endpoint-reference/

<br/>

![Application](/img/project_03_img_02.png?raw=true)


<br/>

04 Search Results

![Application](/img/project_03_img_03.png?raw=true)


<br/>

05 Artist Component Route

![Application](/img/project_03_img_04.png?raw=true)

<br/>

06 Artist Page Album List

![Application](/img/project_03_img_05.png?raw=true)

<br/>

07 Album Component Route

![Application](/img/project_03_img_06.png?raw=true)


<br/>

### 04 MEAN Todos App

**Technologies:** angular2, nodejs, express, mlab

<br/>

02 Node.js Express Server Setup

    $ cd 04_MEAN_Todos_App/
    $ npm init

    $ npm install --save body-parser
    $ npm install --save ejs
    $ npm install --save express
    $ npm install --save mongojs

<br/>

    # npm install -g nodemon
    $ nodemon server.js


http://localhost:3000/  
http://localhost:3000/api/v1/todos


<br/>

03 Backend API Routes

https://mlab.com/

Create new --> Single-node --> Sandbox

Database name: meantodosapp

Add dabase user: marley

Add collection: todos

Add document:

    {
        "text" : "Go Out To Dinner",
        "isCompleted" : false
    }

<br/>    

    {
        "text" : "Go Food Shopping",
        "isCompleted" : false
    }

<br/>   

{
    "text" : "Meeting At Work",
    "isCompleted" : false
}

<br/>

http://localhost:3000/api/v1/todos/  
http://localhost:3000/api/v1/todo/57fc0b30dcba0f6a8b615e7c


![Application](/img/project_04_img_01.png?raw=true)

<br/>

04 Client Side Setup Bower

    $ cd client/
    $ npm init
    $ git clone --depth=1 https://github.com/angular/quickstart .
    $ npm install

    // to compile tsc
    $ npm run tsc:w


    # npm install -g bower
    $ cd 04_MEAN_Todos_App/
    $ bower init

    $ bower install --save bootstrap


![Application](/img/project_04_img_02.png?raw=true)


<br/>

05 Todos Component UI

![Application](/img/project_04_img_03.png?raw=true)

<br/>

06 Display Todos From MongoDB

![Application](/img/project_04_img_04.png?raw=true)

<br/>

07 Saving Todos

<br/>

08 Updating Todos

Update rows by Enter button

![Application](/img/project_04_img_05.png?raw=true)

<br/>

09 Deleting Todos

![Application](/img/project_04_img_06.png?raw=true)

<br/>

### 05 Firebase Business Listings

**Technologies:** Angular CLI, Firebase, Foundation

<br/>

02 AngularFire2 Firebase Setup

    # npm install -g npm

    # npm install -g angular-cli
    $ cd 05_Firebase_Business_Listings
    $ ng init --name "firebase_business_listings"
    $ ng serve --host 0.0.0.0 --port 3000 --live-reload-port 1337


http://localhost:3000/


![Application](/img/project_05_img_01.png?raw=true)


    $ npm install --save angularfire2
    $ npm install --save firebase

https://github.com/angular/angularfire2/


<br/>

    # npm install -g typings
    # npm install -g typescript
    $ typings install dt~firebase --global --save

<br/>

    $ ng build

<br/>

https://console.firebase.google.com

<br/>

Create a project: businesscontacts

Welcome to Firebase page -- > Add Firebaset to your web app


Database --> https://businesscontacts-443c0.firebaseio.com/items --> GO

Database --> RULES

replace

    {
      "rules": {
        ".read": "auth != null",
        ".write": "auth != null"
      }
    }

on

    {
      "rules": {
        ".read": "true",
        ".write": "true"
      }
    }

PUBLISH


![Application](/img/project_05_img_02.png?raw=true)


<br/>

03 Business Service


Database --> https://businesscontacts-443c0.firebaseio.com/businesses --> GO

<br/>
<br/>

    {
        "0": {
            "category": "Retail",
            "city": "Milwaukee",
            "company": "Google",
            "description": "Nulla ut erat id mauris vulputate elementum. Nu...",
            "email": "kshaw@phoca.cz",
            "phone": "1-(414)274-3262",
            "state": "Wisconsin",
            "street_address": "569 Sheriden Terrace",
            "years_in_business": "7",
            "zipcode": "63454"

        },

        "1": {
            "category": "Retail",
            "city": "Milwaukee",
            "company": "Apple",
            "description": "Nulla ut erat id mauris vulputate elementum. Nu...",
            "email": "kshaw@phoca.cz",
            "phone": "1-(414)274-3262",
            "state": "Wisconsin",
            "street_address": "569 Sheriden Terrace",
            "years_in_business": "7",
            "zipcode": "63454"

        },

        "2": {
            "category": "Retail",
            "city": "Milwaukee",
            "company": "Microsoft",
            "description": "Nulla ut erat id mauris vulputate elementum. Nu...",
            "email": "kshaw@phoca.cz",
            "phone": "1-(414)274-3262",
            "state": "Wisconsin",
            "street_address": "569 Sheriden Terrace",
            "years_in_business": "7",
            "zipcode": "63454"

        }
    }

<br/>

Database --> https://businesscontacts-443c0.firebaseio.com/categories --> GO

later...

![Application](/img/project_05_img_03.png?raw=true)

<br/>

04 Frontend UI with Foundation

https://cdnjs.com/libraries/foundation


![Application](/img/project_05_img_04.png?raw=true)


<br/>
<br/>

___

email:  
![Marley](http://img.fotografii.org/a3333333mail.gif "Marley")


<a href="https://jsdev.org">jsdev.org</a>

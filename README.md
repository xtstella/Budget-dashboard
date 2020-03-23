
# Budget-dashboard

A budget tracking dashboard created with REST API using Node, Express, MySQL and VueJS


## Technologies
Project is created with:
* VueJS version: 2.0
* NodeJS version: 13.9.0


## Setup

### server
```
# install dependencies
npm install
```

```
# start server
npm start
```

### client
```
# install dependencies `express`, `mysql`, `nodemon`.
npm install
```

```
# Compiles and hot-reloads for development
npm run serve
```

## Functions Summary

### server

* Setup and configure a server using Node.js and Express in a file named `app.js`. 

* Create a connection pool to the database, in the file `app/config/connection.js`.

* Create models for each tables of the database : `app/models/strategy.js` and `app/models/lifetime.js`. 

* Setup the routes for the methods to be called, in the file `app/controllers/routes.js`. Create routes for HTTP request of GET, POST and PUT

### client

* Create three components `DatePicker.vue`, `Strategy.vue` and `Timespan.vue` 

* 'main.js' and 'router.js'
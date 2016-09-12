# Name That Baby!

## Setting up the project

These instructions assume that the user has Node and MongoDB installed on their machine. If not, please first install both of those.
( www.mongodb.com  and   www.nodejs.org )

From the project root directory, run:

```bash
$ npm install
```

This will install all app dependencies and will also import the names.csv file into MongoDB through the script written as 'postinstall' in the package.json file.

## Using the server

The node server should be run in a separate terminal instances:
In terminal one...
```bash
$ mongod
```
In terminal two...
```bash
$ nodemon
```

## Using webpack-dev-server
In a third terminal instance...
```bash
$ npm run start
```
Now in a Chrome browser window open localhost:8080 and the app will begin.

## Editing the front-end

Any javascript files / changes should be edited in the /app directory.

After final changes are made run:
```bash
$ npm run production
```
This will compile the /dist directory for production use.

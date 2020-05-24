## Now that you have created a basic website, there are a lot of things you can do. This series is about node.js and not about frontend frameworks, so we'll first focus on setting up backend. 

> Just a reminder, please run `npm init` in this folder to get started. Please complete the previous folders to learn whatever is required.

## Requirements
1. Download and install postman from [here](https://www.postman.com/downloads/). We will be using postman for checking whether our backend is working the way it is supposed to.
2. We also need a database for storing the data. For the purpose of this series, we'll be using MongoDB. Download it from [here](https://www.mongodb.com/download-center/community). It is NoSQL database, which means that it doesn't use SQL.
3. The packages that we'll be using this time is our good old express, along with [mongoose](npmjs.org/mongoose). It is the connector for MongoDB for Node.js. Run `npm install mongoose` to install it.

## Optional
You may have seen that whenever you make any changes, you have to run the command `node <filename>`. To increase the efficiency, you may install nodemon globally by `npm install -g nodemon` and run your file using `nodemon <fildename>`. This watches for changes in all JavaScript files, and restarts whenever you change a file.

### Steps

1. In this part of the series, we'll make an app for storing users. I know it may sound boring, but I mean, I don't have any better idea while writing this. Also, we can use the same kind of schema later for authorization.

2. If you are familiar with any kind of database, you must be knowing that we have to create a "table" in SQL. In NoSQL(MongoDB), we create a collection. Let's see the terminology when using NoSQL Databases.

    |SQL|—|NoSQL|
    |-|-|-|
    |database|—|database|
    |table|—|collection|
    |row|—|document|
    |column|—|field|

3. First, we need to connect to the database server. Then we need to create a schema, which is a basic blueprint of how the data will be stored.

4. This basic app will contain fields like email, name, and password.

    [![](https://mermaid.ink/img/eyJjb2RlIjoiZ3JhcGggVERcblx0QVtVc2VyXSAtLS0gQigoZW1haWwpKVxuXHRBIC0tLSBFKChuYW1lKSlcblx0QSAtLS0gRigocGFzc3dvcmQpKVxuXHRcdFx0XHRcdCIsIm1lcm1haWQiOnsidGhlbWUiOiJkYXJrIn0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)](https://mermaid-js.github.io/mermaid-live-editor/#/edit/eyJjb2RlIjoiZ3JhcGggVERcblx0QVtVc2VyXSAtLS0gQigoZW1haWwpKVxuXHRBIC0tLSBFKChuYW1lKSlcblx0QSAtLS0gRigocGFzc3dvcmQpKVxuXHRcdFx0XHRcdCIsIm1lcm1haWQiOnsidGhlbWUiOiJkYXJrIn0sInVwZGF0ZUVkaXRvciI6ZmFsc2V9)

5. To connect to MongoDB, we need a database name, here we will use user. So the Mongo URI will be `mongodb://localhost:27017/user`. You can replace user by the name of your choice.

> Make sure mongoose is running before starting the server.

6. The next step will be to make a Schema. We have already decided on the fields, so now we just need a code for that. A common practice is to put the chemas inside the `models` folders. We'll create `models/user.js` for the User Schema and import that into our main file. 

> You can pass properties like `unique` and `required` to specify what the names mean.

7. Till now we've been using `app.get()`, i.e. a GET request, for routes, but standards indicate that we need to use `POST` requests for sending data to the server. Yeah, you guessed it right, we'll use `app.post()` for that.

8. We are almost done, but first we need one more dependency for our project, that is `body-parser`, installed using `npm install body-parser`. This is required to parsing the input data. See `ref.js` for implementation details.

9. Here we will use `req.body` to access the input data.

10. We finally need to send a `POST` request from postman to this route (`localhost:<PORT>/user`) along with the data.

11. The see the data, we can make another route, this time a `GET` route since we just need to receive data from the server.
The `_id` field that you see with each user is a BSON id that contains when the object was created along with a random rumber. That's all that is required to know but if you're a curious cat, feel free to look around.

> The tutorial for postman will be pretty long, so I suggest you to either make an issue and I'll make one or read about it on their website.
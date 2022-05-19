Microsoft Windows [Versión 10.0.19043.1706]
(c) Microsoft Corporation. Todos los derechos reservados.

C:\Users\Usuario>mongo
MongoDB shell version v5.0.8
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("852b5d2f-59ff-47c9-bd67-3ce4f972ac25") }
MongoDB server version: 5.0.8
================
Warning: the "mongo" shell has been superseded by "mongosh",
which delivers improved usability and compatibility.The "mongo" shell has been deprecated and will be removed in
an upcoming release.
For installation instructions, see
https://docs.mongodb.com/mongodb-shell/install/
================
---
The server generated these startup warnings when booting:
        2022-05-18T20:06:53.987-03:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
---
---
        Enable MongoDB's free cloud-based monitoring service, which will then receive and display
        metrics about your deployment (disk utilization, CPU, operation statistics, etc).

        The monitoring data will be available on a MongoDB website with a unique URL accessible to you
        and anyone you share the URL with. MongoDB may use this information to make product
        improvements and to suggest MongoDB products and deployment options to you.

        To enable free monitoring, run the following command: db.enableFreeMonitoring()
        To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---
> show dbs
Coderhouse_Backend  0.000GB
admin               0.000GB
config              0.000GB
ecommerce           0.000GB
local               0.000GB
> use ecommerce
switched to db ecommerce
> show collections
Messages
> db.createCollection("Products")
{ "ok" : 1 }
> show collections
Messages
Products
> db.Products.insertMany([{name: 'iphone', price:3000}, {name: 'samsung galaxy', price:2000}, {name: 'motorola gx', price:1500}, {name: 'nokia1100', price:100}, {name: 'xioami', price:4200}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("6285a0755b0298fa242d5f93"),
                ObjectId("6285a0755b0298fa242d5f94"),
                ObjectId("6285a0755b0298fa242d5f95"),
                ObjectId("6285a0755b0298fa242d5f96"),
                ObjectId("6285a0755b0298fa242d5f97")
        ]
}
> db.Products.find()
{ "_id" : ObjectId("6285a0755b0298fa242d5f93"), "name" : "iphone", "price" : 3000 }
{ "_id" : ObjectId("6285a0755b0298fa242d5f94"), "name" : "samsung galaxy", "price" : 2000 }
{ "_id" : ObjectId("6285a0755b0298fa242d5f95"), "name" : "motorola gx", "price" : 1500 }
{ "_id" : ObjectId("6285a0755b0298fa242d5f96"), "name" : "nokia1100", "price" : 100 }
{ "_id" : ObjectId("6285a0755b0298fa242d5f97"), "name" : "xioami", "price" : 4200 }
> db.Messages.insertMany([{name: 'Tomas', age:31, username:tpayer, message: 'Hola'}, {name: 'ignacio', age:28, username:nacho, message 'como estas'}, {name: 'hernan', username:tito, age:36, message: 'bien ustedes'}])
uncaught exception: SyntaxError: missing : after property id :
@(shell):1:133
> db.Messages.insertMany([{name: 'Tomas', age:31}, {name: 'Ignacio', age:28}, {name: 'Hernan', age:30}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("6285a3235b0298fa242d5f98"),
                ObjectId("6285a3235b0298fa242d5f99"),
                ObjectId("6285a3235b0298fa242d5f9a")
        ]
}
> db.Messages.find()
{ "_id" : ObjectId("6285a3235b0298fa242d5f98"), "name" : "Tomas", "age" : 31 }
{ "_id" : ObjectId("6285a3235b0298fa242d5f99"), "name" : "Ignacio", "age" : 28 }
{ "_id" : ObjectId("6285a3235b0298fa242d5f9a"), "name" : "Hernan", "age" : 30 }
> db.Products.instert({name: 'LG', price:967}
...
...
>
> db.Products.find()
{ "_id" : ObjectId("6285a0755b0298fa242d5f93"), "name" : "iphone", "price" : 3000 }
{ "_id" : ObjectId("6285a0755b0298fa242d5f94"), "name" : "samsung galaxy", "price" : 2000 }
{ "_id" : ObjectId("6285a0755b0298fa242d5f95"), "name" : "motorola gx", "price" : 1500 }
{ "_id" : ObjectId("6285a0755b0298fa242d5f96"), "name" : "nokia1100", "price" : 100 }
{ "_id" : ObjectId("6285a0755b0298fa242d5f97"), "name" : "xioami", "price" : 4200 }
> db.Products.insert({name: 'LG', price:967})
WriteResult({ "nInserted" : 1 })
> db.Products.find()
{ "_id" : ObjectId("6285a0755b0298fa242d5f93"), "name" : "iphone", "price" : 3000 }
{ "_id" : ObjectId("6285a0755b0298fa242d5f94"), "name" : "samsung galaxy", "price" : 2000 }
{ "_id" : ObjectId("6285a0755b0298fa242d5f95"), "name" : "motorola gx", "price" : 1500 }
{ "_id" : ObjectId("6285a0755b0298fa242d5f96"), "name" : "nokia1100", "price" : 100 }
{ "_id" : ObjectId("6285a0755b0298fa242d5f97"), "name" : "xioami", "price" : 4200 }
{ "_id" : ObjectId("6285a59f5b0298fa242d5f9b"), "name" : "LG", "price" : 967 }
> db.Products.find({ price: {$lt : 1000 } })
{ "_id" : ObjectId("6285a0755b0298fa242d5f96"), "name" : "nokia1100", "price" : 100 }
{ "_id" : ObjectId("6285a59f5b0298fa242d5f9b"), "name" : "LG", "price" : 967 }
> db.Products.find( { price: { $gte : 1000 , $lte : 3000} })
{ "_id" : ObjectId("6285a0755b0298fa242d5f93"), "name" : "iphone", "price" : 3000 }
{ "_id" : ObjectId("6285a0755b0298fa242d5f94"), "name" : "samsung galaxy", "price" : 2000 }
{ "_id" : ObjectId("6285a0755b0298fa242d5f95"), "name" : "motorola gx", "price" : 1500 }
> db.Products.find({price: {$gt:3000}})
{ "_id" : ObjectId("6285a0755b0298fa242d5f97"), "name" : "xioami", "price" : 4200 }
> db.Products.find({name: {$in: [samsung]}})
uncaught exception: ReferenceError: samsung is not defined :
@(shell):1:32
> db.Products.find({price: {$eq : 2000}})
{ "_id" : ObjectId("6285a0755b0298fa242d5f94"), "name" : "samsung galaxy", "price" : 2000 }
> db.Products.deleteMany({price: { $lte:1000}})
{ "acknowledged" : true, "deletedCount" : 2 }
> db.Products.find()
{ "_id" : ObjectId("6285a0755b0298fa242d5f93"), "name" : "iphone", "price" : 3000 }
{ "_id" : ObjectId("6285a0755b0298fa242d5f94"), "name" : "samsung galaxy", "price" : 2000 }
{ "_id" : ObjectId("6285a0755b0298fa242d5f95"), "name" : "motorola gx", "price" : 1500 }
{ "_id" : ObjectId("6285a0755b0298fa242d5f97"), "name" : "xioami", "price" : 4200 }
> use admin
switched to db admin
> db.createUser({user: "pepe", pwd: "asd456", roles: [{role: "read", db: "ecommerce"}]})
Successfully added user: {
        "user" : "pepe",
        "roles" : [
                {
                        "role" : "read",
                        "db" : "ecommerce"
                }
        ]
}
>

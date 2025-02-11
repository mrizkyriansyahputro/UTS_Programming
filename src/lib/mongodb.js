// mongodb.js

import { MongoClient } from 'mongodb'


// Ganti ini dengan URI MongoDB kamu secara langsung
// const uri = 'mongodb://username:password@host:port/database'
const uri = process.env.MONGODB_URI

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise

// if (!uri) {
//   throw new Error('Add Mongo URI to the code directly')
// }

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise
const express = require('express')
const app = express()
const port = process.env.PORT || 5500

require('dotenv').config()
// console.log(process.env) 

// cors && middleware
app.use(express.json())
const cors = require('cors')
app.use(cors())

// connect mongo 

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jl8yo.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function connect() {
    await client.connect() ? console.log('connected') : console.log('not connected')
    // collections 
    const servicesCollection = client.db('doctorsPortal').collection('services');
    const appointmentsCollection = client.db('doctorsPortal').collection('bookings');

    // get api
    app.get('/api/services', async (req, res) => {
        const services = await servicesCollection.find({}).toArray();
        res.send(services);
    })

    // appointment post api
    app.post('/api/bookings', async (req, res) => {
        const appointment = req.body;
        await appointmentsCollection.insertOne(appointment);
        res.send(appointment);
    })

}
connect().catch(console.dir);


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
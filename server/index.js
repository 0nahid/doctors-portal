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
        const booking = req.body;
        const query = { treatment: booking.treatment, formattedDate: booking.formattedDate, name: booking.name }
        const exists = await appointmentsCollection.findOne(query);
        if (exists) {
          return res.send({ success: false, booking: exists })
        }
        const result = await appointmentsCollection.insertOne(booking);
        return res.send({ success: true, result });
      })
    // appointment get api
    app.get('/api/bookings', async (req, res) => {
        const appointments = await appointmentsCollection.find({}).toArray();
        res.send(appointments);
    })

}
connect().catch(console.dir);


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
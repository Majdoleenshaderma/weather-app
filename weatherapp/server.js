var http = require('http');
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const ejs = require('ejs');

app.use(cors());
app.set('view engine', 'ejs');
app.set('views', 'views', 'profile');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const {MongoClient}=require('mongodb')

const connection="mongodb+srv://rulan:mongo123@cluster0.2fxosrh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client= new MongoClient(connection)
const mydb= client.db('weather')  
const userCollection= mydb.collection('users')
const historyCollection= mydb.collection('history')


var bodyParse= require('body-parser')
var urlEncoded= bodyParse.urlencoded({extended:false})

const { ObjectId } = require('mongodb');
//const fetch = require('node-fetch');

// const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: {q: 'jordan'},
  headers: {
    'X-RapidAPI-Key': '2a979c6d34mshebec9e618537967p1b3251jsn4644c6e971c7',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};


app.get('/', function(req, res){
    res.send('start server')
})

app.post('/login', async (req, res) => {
    try {
        const findUser = await userCollection.findOne({
            'username': req.body.username,
            'password': req.body.password
        });

        if (findUser) {
            res.status(200).json({ message: 'Login successful', user: findUser });
        } else {
            res.status(404).json({ message: 'User not found. Please register.' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


app.post('/signup', urlEncoded, async(req, res)=>{
    const userId = new ObjectId();

    const createuser= await userCollection.insertOne({
        '_id': userId,
        'username': req.body.username,
        'email': req.body.email,
        'password': req.body.password,
        'region': req.body.region
     })
     res.write('<script>alert("User added successfully, now you can log in");</script>');
     res.write('<script>window.location.href="/form";</script>');
     res.end();
})

app.get('/weather', async function(req, res){
    try {
        const country = req.query.country || 'jordan';
        const optionsWithParams = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
            params: { q: country, days: 4 },
            headers: {
                'X-RapidAPI-Key': '2a979c6d34mshebec9e618537967p1b3251jsn4644c6e971c7',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }  
        };

        const response = await axios.request(optionsWithParams);
        console.log(response.data);
        
     
        for (const day of response.data.forecast.forecastday) {
            await forecastCollection.insertOne({
                'country': response.data.location.country,
                'day': day.date,
                'Max_Temp': day.day.maxtemp_c,
                'Min_Temp': day.day.mintemp_c,
                'Condition': day.day.condition.text,
                'feels_like': day.day.condition.feelslike_c,
            });
        }
        // Send the response as JSON
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});



app.get('/profile/:userId', async function(req, res) {
    const userId = req.params.userId;
  
    const user = await userCollection.findOne({ '_id': new ObjectId(userId) });
  
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });

  app.post('/storeWeatherDetails', async (req, res) => {
    try {
      const { city, date, condition, temperature } = req.body;

      const weatherCollection = client.db('weather').collection('historyCollection');
      const result = await weatherCollection.insertOne({
        city,
        date,
        condition,
        temperature,
      });
      res.status(200).json({ message: 'Weather details stored successfully', insertedId: result.insertedId });
  } catch (error) {
    console.error('Error storing weather details:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

var server= app.listen(9090, function()
{
    var host = server.address().address
    var port= server.address().port
})
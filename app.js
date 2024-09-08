const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const scraperBotToken = process.env.CORDSCRAPE_TOKEN;

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

async function pullData(userId) {
    const headers = { "authorization": `Bot ${scraperBotToken}` }
    const request = await fetch(`https://discord.com/api/v10/users/${userId}`, {
        headers: headers
    });
    const response = await request.json();

    return response;
}

app.get('/', (req, res) => {
    res.render('index', { 'userId': '' });
});

app.get('/user/:id', async (req, res) => {
    const userId = req.params.id;
    const userData = await pullData(userId);

    res.render('user', { ...userData, userData });
});

app.get('/user/:id/json', async (req, res) => {
    const userId = req.params.id;
    const userData = await pullData(userId);

    res.json(userData);
});

app.listen(3000, () => {
    console.log('CordScrape is running on port 3000');
});
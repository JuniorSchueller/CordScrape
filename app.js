const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const scraperBotToken = process.env.CORDSCRAPE_TOKEN;

const app = express();
app.use(express.static(__dirname + '/public'));

async function pullData(userId) {
    const headers = { "authorization": `Bot ${scraperBotToken}` };
    const request = await fetch(`https://discord.com/api/v10/users/${userId}`, { headers });
    const response = await request.json();
    return response;
}

app.get('/', (req, res) => {
    const html = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>CordScrape</title>
            <link rel="stylesheet" href="/css/styles.css">
            <script>
                function redirectToUser(event) {
                    event.preventDefault();
                    const userId = document.querySelector('input[name="id"]').value;
                    window.location.href = \`/user/\${userId}\`;
                }
            </script>
        </head>
        <body>
            <header>
                <h1>CordScrape</h1>
                <form onsubmit="redirectToUser(event)">
                    <input type="text" name="id" placeholder="User ID" required>
                    <button type="submit">OK</button>
                </form>
            </header>
            <main>
                <h2>Welcome to CordScrape!</h2>
                <p>CordScrape is a service that pulls information from Discord users by ID.</p>
                <a href="https://github.com/JuniorSchueller/CordScrape">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png" alt="Discord" width="64" height="64">
                </a>
            </main>
        </body>
        </html>
    `;
    res.send(html);
});

app.get('/user/:id', async (req, res) => {
    const userId = req.params.id;
    const userData = await pullData(userId);

    const html = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Usuário - ${userData.username}</title>
            <link rel="stylesheet" href="/css/styles.css">
        </head>
        <body>
            <header>
                <a href="/">Back</a>
                <h1>User info</h1>
            </header>
            <main>
                <div class="user-info">
                    <div class="basic-info">
                        <img src="https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png?size=256" alt="${userData.username}">
                        <h2>${userData.username}#${userData.discriminator}</h2>
                        <a href="/user/${userData.id}/json" class="json-button">
                            <img src="/icons/json.png" alt="JSON"> JSON
                        </a>
                    </div>
                    ${Object.keys(userData).filter(key => !['id', 'username', 'discriminator', 'avatar'].includes(key)).map(key => `
                        <div class="extra-info">
                            <strong>${key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}:</strong>
                            <span>${userData[key]}</span>
                        </div>
                    `).join('')}
                </div>
            </main>
        </body>
        </html>
    `;
    res.send(html);
});

app.get('/user/:id/json', async (req, res) => {
    const userId = req.params.id;
    const userData = await pullData(userId);
    res.json(userData);
});

app.listen(3000, () => {
    console.log('CordScrape is running on port 3000');
});

# 🚀 CordScrape

Welcome to **CordScrape**! 🎉 This is a simple web service that lets you fetch and view Discord user information using their user ID. Built with Node.js and Express, it interacts with the Discord API to pull user data and display it beautifully on a web interface.

## 🛠 Features

- **Home Page**: Enter a Discord user ID and get redirected to a detailed user information page.
- **User Page**: View detailed user information like username, discriminator, avatar, and more.
- **JSON View**: Access a raw JSON view of the user data via a link on the user info page.

## 🧩 Technologies Used

- **Node.js**: JavaScript runtime for server-side execution.
- **Express**: Web application framework for Node.js.
- **Fetch**: For making HTTP requests to the Discord API.
- **dotenv**: For managing environment variables.

## 🚀 Getting Started

Just open [CordScrape website](https://cordscrape.vercel.app/) and search an user ID to see the account details!

But if you want to run CordScrape on your local machine, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/JuniorSchueller/CordScrape.git
   ```

2. **Install Dependencies**

   Navigate to the project directory and run:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root of the project and add your Discord bot token:

   ```
   CORDSCRAPE_TOKEN=Your_Discord_Bot_Token_Here
   ```

4. **Start the Server**

   ```bash
   node .
   ```

   The server will start on port 3000 by default. Open `http://localhost:3000` in your browser.

## 📖 Usage

- **Home Page**: Go to `http://localhost:3000` to input a Discord user ID and view their information.
- **User Page**: After submitting a valid ID, you'll be redirected to the user’s info page.
- **JSON View**: Click the JSON button on the user info page to see raw data in JSON format.

## 🤝 Contributing

We welcome contributions! If you'd like to help out, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Open a pull request describing your updates.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Developed with ❤️ by Junior Schueller.

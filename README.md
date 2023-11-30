# Amazon Product Price Tracker

This project is a web application built with Node.js and Express that allows users to track the price history of a product on Amazon and set up price drop alerts. The application utilizes web scraping techniques to extract product information such as name, image, rating, stock details, and description from the provided Amazon product URL.

## Features

1. **Product Information Retrieval**: Users can enter an Amazon product URL, and the application will fetch and display relevant product details such as name, image, rating, stock details, and description.

2. **Price History**: The application keeps track of the product's price history. The prices are stored in a JSON file (`history.json`) with timestamps, allowing users to see how the price has changed over time.

3. **Price Drop Alerts**: Users can set up price drop alerts by providing their email address and a target price. The application uses Node.js `nodemailer` to send an email notification when the product's price drops to or below the specified target.

4. **Periodic Price Checks**: The server periodically checks the current price of the tracked product. If the price is below the target set for any active alerts, an email notification is sent.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rithwik003/Worthit.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Worthit
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000).


## File Structure

- **public**: Contains static files like stylesheets and client-side scripts.
- **src**: Contains server-side JavaScript files.
- **.gitignore**: Specifies intentionally untracked files to ignore.
- **.glitch-assets**: Glitch-specific asset configuration file.
- **LICENSE.md**: The license file for the project.
- **README.md**: The main documentation file for the project.
- **TODO.md**: A file listing tasks yet to be done.
- **index.html**: The main HTML file for the web application.
- **package-lock.json**: Auto-generated file for npm's dependency tree.
- **package.json**: File that holds various metadata relevant to the project.
- **server.js**: The main server-side JavaScript file.


## Usage

1. Access the application through the provided local server URL.

2. Enter the Amazon product URL in the input field on the homepage.

3. Click on the "Get Product Information" button to retrieve and display the product details.

4. Optionally, set up a price drop alert by entering your email address and the desired target price.

5. The server will periodically check the current price of the tracked product. If the price drops to or below the specified target, you will receive an email notification.

## Dependencies

- [Express](https://expressjs.com/): Web application framework for Node.js.
- [Axios](https://axios-http.com/): HTTP client for making requests to Amazon.
- [Cheerio](https://cheerio.js.org/): A fast, flexible, and lean implementation of jQuery for parsing HTML.
- [Node-cron](https://www.npmjs.com/package/node-cron): A cron-like scheduler for Node.js.
- [Nodemailer](https://nodemailer.com/): Send emails with Node.js.

## Note

Ensure that you have [Node.js](https://nodejs.org/) installed on your machine before running the application.

**Disclaimer**: This application uses web scraping techniques to extract data from Amazon. Be aware that web scraping may violate the terms of service of the targeted website. Use this application responsibly and consider checking the terms of service of the websites you are scraping data from.

Feel free to contribute, report issues, or suggest improvements!

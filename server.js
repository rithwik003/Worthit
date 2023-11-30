/*const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.get('/price', async (req, res) => {
    const url = req.query.url;
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        //const priceSelector = '#corePrice_feature_div > div > div > span.a-price.aok-align-center > span:nth-child(2) > span.a-price-whole'; 
        //const price = $(priceSelector).text();
      
        const priceSelector1 = '#corePrice_feature_div > div > div > span.a-price.aok-align-center > span:nth-child(2) > span.a-price-whole'; 
const priceSelector2 = '#newAccordionRow_0 > div > div.a-accordion-row-a11y.a-accordion-row.a-declarative.accordion-header.mobb-header-css > h5 > div:nth-child(2) > div > span.a-color-price';
const priceSelector3='#corePrice_feature_div > div > div > span.a-price.a-text-price.header-price.a-size-base.a-text-normal > span.a-offscreen';
let price = $(priceSelector1).text();
      

// Check if the price is empty or not found using the first selector
if (!price) {
  // If the first selector didn't match, try the second one
  price = $(priceSelector2).text();
  
}
      if (!price) {
  // If the first selector didn't match, try the second one
  price = $(priceSelector3).text();
}
      if (!price.includes('₹')) {
            price = `₹${price}`;
        }
      // Photo
        const photoSelector = '#landingImage'; // Adjust the selector based on your HTML structure
        const photo = $(photoSelector).attr('src');

        // Description
        const descriptionSelector = '#productTitle'; // Adjust the selector based on your HTML structure
        const description = $(descriptionSelector).text().trim();

        // Stock Details
        const stockSelector = '#availability > span'; // Adjust the selector based on your HTML structure
        const stockDetails = $(stockSelector).first().text().trim();
      
        const ratingSelector = '#acrPopover > span.a-declarative > a > span'; // Adjust the selector based on your HTML structure
        const ratingDetails = $(ratingSelector).first().text().trim();

        const numberSelector = '#acrCustomerReviewText'; // Adjust the selector based on your HTML structure
        const number = $(numberSelector).first().text().trim();

        // Send the data as a JSON response
        res.json({
            photo: photo,
            price: price,          
            description: description,
            stockDetails: stockDetails,
            ratingDetails: ratingDetails,
            number:number
        });
        
        //res.send(`The price of the product is: ${price}`);
    } catch (error) {
        console.error(error);
        res.send('An error occurred while fetching the price.');
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
*/

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const cron = require('node-cron');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

cron.schedule('*/5 * * * *', () => {
  fetch('https://worthit.glitch.me/'); // replace with your Glitch project's URL
});




/*let urlToTrack; // variable to store the URL to track

app.post('/price', async (req, res) => {
    urlToTrack = req.body.url; // save the url from the form
    // rest of your code...
});

// Schedule tasks to be run on the server.
cron.schedule('* * * * *', function() {
  console.log('running a task every minute');
  if (urlToTrack) {
    fetchPrice(urlToTrack); // use the saved URL
  }
});

*/

/*async function fetchPrice(url) {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        let priceSelector1 = '#corePrice_feature_div > div > div > span.a-price.aok-align-center > span:nth-child(2) > span.a-price-whole'; 
        let priceSelector2 = '#newAccordionRow_0 > div > div.a-accordion-row-a11y.a-accordion-row.a-declarative.accordion-header.mobb-header-css > h5 > div:nth-child(2) > div > span.a-color-price';
        let priceSelector3='#corePrice_feature_div > div > div > span.a-price.a-text-price.header-price.a-size-base.a-text-normal > span.a-offscreen';
        let price = $(priceSelector1).text();
      
        if (!price) {
          price = $(priceSelector2).text();
        }
        if (!price) {
          price = $(priceSelector3).text();
        }
        if (!price.includes('₹')) {
            price = `₹${price}`;
        }

        // Save the price history
        let history;
        try {
            history = JSON.parse(fs.readFileSync('history.json'));
        } catch (error) {
            history = {};
        }
        
        if (!history[url]) {
            history[url] = [];
        }
        
        history[url].push({
            date: new Date().toISOString(),
            price: price
        });
        
        fs.writeFileSync('history.json', JSON.stringify(history));

    } catch (error) {
        console.error(error);
    }
}*/

// Schedule tasks to be run on the server.
/*cron.schedule('* * * * *', function() {
  console.log('running a task every minute');
  fetchPrice('https://www.amazon.com/...'); // replace with your URL
});*/

app.get('/price1', async (req, res) => {
    const url = req.query.url;
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        //const priceSelector = '#corePrice_feature_div > div > div > span.a-price.aok-align-center > span:nth-child(2) > span.a-price-whole'; 
        //const price = $(priceSelector).text();
      
        const priceSelector1 = '#corePrice_feature_div > div > div > span.a-price.aok-align-center > span:nth-child(2) > span.a-price-whole'; 
const priceSelector2 = '#newAccordionRow_0 > div > div.a-accordion-row-a11y.a-accordion-row.a-declarative.accordion-header.mobb-header-css > h5 > div:nth-child(2) > div > span.a-color-price';
const priceSelector3='#corePrice_feature_div > div > div > span.a-price.a-text-price.header-price.a-size-base.a-text-normal > span.a-offscreen';
      
const priceSelector4='#priceblock_ourprice > span';
      const priceSelector5='#corePrice_feature_div > div > div > div > div > span.a-price.a-text-normal.aok-align-center.reinventPriceAccordionT2 > span.a-offscreen';
      
      
      let price = $(priceSelector1).text();
      


if (!price) {
  
  price = $(priceSelector2).text();
  //console.log('s2');
}
      if (!price) {
  
  price = $(priceSelector3).text();
        //console.log('s3');
}   
      if (!price) {
  price = $(priceSelector4).text();
        //console.log('s4');
}   
      if (!price) {
  price = $(priceSelector5).first().text();
        //console.log('s4');
}   
      
      //console.log(numericPrice+1);
      //const price1 = price.replace(/[,₹]/g, '').trim();

        // Convert the cleaned price to a float
        //const price2 = parseFloat(price1);

      //console.log(price2);
      
      
      if (!price.includes('₹')) {
            price = `₹${price}`;
        }
      
      //photo
      
        const photoSelector = '#landingImage';
      
      
        const photo = $(photoSelector).attr('src');
        
     
      
        // Description
        const descriptionSelector = '#productTitle'; // Adjust the selector based on your HTML structure
        //const descriptionSelector2 = '#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div:nth-child(1) > h1 > span.B_NuCI';
      
      const description = $(descriptionSelector).text().trim();
      
      //if (!description) {  
      //  description = $(descriptionSelector2).text().trim();
      //}
      
        // Stock Details
        const stockSelector = '#availability > span';
      const stockSelector2='#availability-string > span';
      
        let stockDetails = $(stockSelector).first().text().trim();
        
        if (!stockDetails) {
  stockDetails = $(stockSelector2).text().trim();
}   
      
        const ratingSelector = '#acrPopover > span.a-declarative > a > span'; // Adjust the selector based on your HTML structure
        //const ratingSelector2='#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div:nth-child(2) > div > div';
      
      const ratingDetails = $(ratingSelector).first().text().trim();

      //if (!ratingDetails) {
        //ratingDetails = $(ratingSelector2).text().trim();
      //}
      
        const numberSelector = '#acrCustomerReviewText'; // Adjust the selector based on your HTML structure
        const number = $(numberSelector).first().text().trim();

        // Send the data as a JSON response
        res.json({
            photo: photo,
            price: price,          
            description: description,
            stockDetails: stockDetails,
            ratingDetails: ratingDetails,
            number:number
        });
        
        //res.send(`The price of the product is: ${price}`);
    } catch (error) {
        console.error(error);
        res.send('An error occurred while fetching the price.');
    }
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const nodemailer = require('nodemailer');

let alerts = []; // array to store all alerts

app.post('/price', async (req, res) => {
    // save the alert details from the form
    alerts.push({
        url: req.body.url,
        email: req.body.email,
        targetPrice: req.body.targetPrice
    });
  res.send('Alert has been set!');
});

// Schedule tasks to be run on the server.
cron.schedule('* * * * *', function() {
  console.log('running a task every minute');
  alerts.forEach(alert => {
    console.log('URL:', alert.url);
    fetchPrice(alert); // use the saved alert details
  });
});
/*
const job = cron.schedule('* * * * *', function() {
  console.log('running a task every minute');
  alerts.forEach(alert => {
    fetchPrice(alert); // use the saved alert details
  });
});*/

// When you want to stop the job
//job.stop();

async function fetchPrice(alert) {
    try {
        const response = await axios.get(alert.url);
        const $ = cheerio.load(response.data);
        
      const priceSelector1 = '#corePrice_feature_div > div > div > span.a-price.aok-align-center > span:nth-child(2) > span.a-price-whole'; 
        const priceSelector2 = '#newAccordionRow_0 > div > div.a-accordion-row-a11y.a-accordion-row.a-declarative.accordion-header.mobb-header-css > h5 > div:nth-child(2) > div > span.a-color-price';
        const priceSelector3='#corePrice_feature_div > div > div > span.a-price.a-text-price.header-price.a-size-base.a-text-normal > span.a-offscreen';
        const priceSelector4='#priceblock_ourprice > span';
      const priceSelector5='#corePrice_feature_div > div > div > div > div > span.a-price.a-text-normal.aok-align-center.reinventPriceAccordionT2 > span.a-offscreen';
      
      let price = $(priceSelector1).text();
      
        if (!price) {
          price = $(priceSelector2).text();
        }
        if (!price) {
          price = $(priceSelector3).text();
        }
      if (!price) {
        price = $(priceSelector4).text();
      }  
      if (!price) {
        price = $(priceSelector5).first().text();
      }  
      
        price = price.replace(/[,₹]/g, '').trim();

        // Convert the cleaned price to a float
        price = parseFloat(price);

      console.log(price);
        // Check if the numeric price is valid
        if (!isNaN(price) && price <= alert.targetPrice) {
            sendEmail(alert.email, alert.url);
        }

        
    } catch (error) {
        console.error(error);
    }
}

function sendEmail(email, url) {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'rithwik.cittaa@gmail.com',
        pass: 'dfmskuffkdaslqpe'
      }
    });

    let mailOptions = {
      from: 'rithwik.cittaa@gmail.com',
      to: email,
      subject: 'Price Drop Alert🥳',
      text: `The price for ${url} has dropped!`
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        alerts = alerts.filter(alert => alert.url !== url);
      }
    });
}




app.listen(3000, () => console.log('Server running on port 3000'));

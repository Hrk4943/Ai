const axios = require('axios');
const cheerio = require('cheerio');

async function fetchProductDetails(keyword) {
  try {
    const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
    //---------------------- Fetch the HTML content of the page
    const response = await axios.get(url);
    const html = response.data;
    //---------------------- Parse the HTML using Cheerio
    const $ = cheerio.load(html);
    //---------------------- Extract the necessary information from the page
    const product = $('.a-size-medium').first().text().trim();
    const seller = $('.a-color-secondary .a-size-base').first().text().trim();
    const price = $('.a-offscreen').first().text().trim();

    console.log('Product:', product);
    console.log('Seller:', seller);
    console.log('Price:', price);
  } catch (error) {
    console.error('Error fetching product details:', error);
  }
}

fetchProductDetails('Samsung S23 Ultra ');










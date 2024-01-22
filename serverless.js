// serverless.js

const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const { productId, refresh } = event.queryStringParameters;
  
  try {
    const response = await fetch(`https://bricaree.com/asp-payment-box/?product_id=${productId}&refresh=${refresh}`);
    const data = await response.text();
    
    return {
      statusCode: 200,
      body: data,
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};

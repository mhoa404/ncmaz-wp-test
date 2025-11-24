const fetch = require('node-fetch');

async function testGraphQL() {
  const url = 'http://localhost/ncmaz-wp/graphql';
  const query = `
    query {
      generalSettings {
        title
      }
    }
  `;

  const start = Date.now();
  try {
    console.log(`Fetching from ${url}...`);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      timeout: 10000 // 10s timeout for this test
    });

    const end = Date.now();
    const duration = end - start;
    console.log(`Response status: ${response.status}`);
    console.log(`Duration: ${duration}ms`);

    if (response.ok) {
      const data = await response.json();
      console.log('Data:', JSON.stringify(data, null, 2));
    } else {
      console.log('Error:', await response.text());
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

testGraphQL();

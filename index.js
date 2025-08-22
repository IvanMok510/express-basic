const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (request, response) => {
    response.send(`
        <h1>Status Code: ${response.statusCode}</h1>
        <h2>Hello World</h2>
    `)
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`App is listening on http://0.0.0.0:${PORT}`);
});

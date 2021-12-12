const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('client-build'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(8001, () => console.log(`Server listening on port: ${PORT}`));

const express = require('express');
const port = 3001;

const app = express();

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
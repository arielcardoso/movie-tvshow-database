const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello Node!')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server has started running on port: ${PORT}`))
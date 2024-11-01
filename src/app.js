const express = require('express');
const bodyParser = require('body-parser');
const contactsController = require('./controller/contactsController');
const cors = require('cors');  

const app = express();
const PORT = 3000;

app.use(cors());               
app.use(bodyParser.json());     // 解析 JSON 请求体
app.use('/api', contactsController);

app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('服务器正常运行');
});

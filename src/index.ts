import express from 'express';
const app = express();
app.listen(8080);

// Middleware (:handler 전처리)
app.use(express.json()); // Request Body JSON 파싱
app.use(express.urlencoded({ extended: false })); // Request Body Form Data 파싱
app.use((req, res, next) => {
  const { query, params, body } = req;
  console.log({ query, params, body });
  next();
});

// Express HTTP Request Method
app.get('/', (req, res) => {
    console.log('get')
    res.sendStatus(200);
});

app.get('/:param', (req, res) => {
    res.sendStatus(200);
});

app.post('/test', (req, res) => {
    console.log('Post');
    const { query, body } = req;
    console.log(query, body);
    res.sendStatus(200);
});

app.put('/test', (req, res) => {
    console.log('put');
    res.status(200);
});

app.delete('/test', (req, res) => {
    console.log('delete');
    res.status(200);
});
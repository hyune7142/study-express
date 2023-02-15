import express from 'express';
const router = express.Router();

// Express HTTP Request Method
router.get('/', (req, res) => {
    console.log('get');
    res.json({
        idx: 1,
        test: 'test'
    })
});

router.post('/', (req, res) => {
    console.log('Post');
    const { query, body } = req;
    console.log(query, body);
    res.sendStatus(200);
});

router.put('/', (req, res) => {
    console.log('put');
    res.status(200);
});

router.delete('/', (req, res) => {
    console.log('delete');
    res.status(200);
});

export default router;
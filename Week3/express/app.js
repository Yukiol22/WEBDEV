import express from 'express';

const app = express();
const port = 3000;

app.use('/public', express.static('public'));


app.get('/api/v1/cats', (req, res) => {
  const cat = {
    cat_id: 1,
    name: 'Frank',
    birthdate: '2021-05-14',
    weight: 4.5,
    owner: 'Alex',
    image: 'https://loremflickr.com/320/240/cat',
  };

  res.json(cat);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

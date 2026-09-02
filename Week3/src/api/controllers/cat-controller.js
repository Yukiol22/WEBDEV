import { addCat, findCatById, listAllCats,modifyCat, deleteCatById } from '../models/cat-model.js';

const getCat = (req, res) => {
  res.json(listAllCats());
};

const getCatById = (req, res) => {
  const cat = findCatById(req.params.id);
  if (cat) {
    res.json(cat);
  } else {
    res.sendStatus(404);
  }
};

const postCat = (req, res) => {
  const result = addCat(req.body);
  if (result.cat_id) {
    res.status(201);
    res.json({ message: 'New cat added.', result });
  } else {
    res.sendStatus(400);
  }
};

const putCat = (req, res) => {
  const updatedCat = modifyCat(req.body, req.params.id);
  if (updatedCat) 
    res.json({ message: 'Cat updated', result: updatedCat });
  else{
    return res.status(404).json({ message: 'Cat not found' });
  }
};
const deleteCat = (req, res) => {
  const isDeleted = deleteCatById(req.params.id);

  if (isDeleted) {
    res.json({ message: 'Cat deleted successfully.', id: req.params.id });
  } else {
    res.status(404).json({ message: 'Cat not found.' });
  }
};


export { getCat, getCatById, postCat, putCat, deleteCat };
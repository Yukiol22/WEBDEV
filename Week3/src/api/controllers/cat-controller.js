import {
  addCat,
  findCatById,
  listAllCats,
  modifyCat,
  removeCat,
} from '../models/cat-model.js';

const postCat = async (req, res) => {
  console.log('Form data (req.body):', req.body);
  console.log('File data (req.file):', req.file);

  if (!req.file) {
    return res.status(400).json({ message: 'No image file uploaded' });
  }

  const { cat_name, weight, owner, birthdate } = req.body;
  
  const newCat = addCat({
    cat_name,
    weight: Number(weight),
    owner: Number(owner),
    birthdate,
    filename: req.file.filename,
  });

  res.status(201).json({
    message: 'Cat added successfully',
    data: newCat,
  });

};


const getCat = async (req, res) => {
  await res.json(listAllCats());
};

const getCatById = async(req, res) => {
  const cat = await findCatById(req.params.id);
  if (cat) {
    res.json(cat);
  } else {
    res.sendStatus(404);
  }
};

const putCat = async ( req, res) => {
  const updatedCat = await modifyCat(req.body, req.params.id);
  if (updatedCat) 
    res.json({ message: 'Cat updated', result: updatedCat });
  else{
    return res.status(404).json({ message: 'Cat not found' });
  }
};
const deleteCat = async (req, res) => {
  const isDeleted = await removeCat(req.params.id);

  if (isDeleted) {
    res.json({ message: 'Cat deleted successfully.', id: req.params.id });
  } else {
    res.status(404).json({ message: 'Cat not found.' });
  }
};


export { getCat, getCatById, postCat, putCat, deleteCat };


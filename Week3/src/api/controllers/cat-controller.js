import {
  addCat,
  findCatById,
  listAllCats,
  modifyCat,
  removeCat,
} from '../models/cat-model.js';


const postCat = async (req, res, next) => {
  try {
    if (!req.file) {
      const error = new Error('Invalid or missing file');
      error.status = 400;
      return next(error);
    }

    const newCat = {
      ...req.body,
      filename: req.file.filename,
      owner: res.locals.user.user_id,
    };

    const result = await addCat(newCat);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
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


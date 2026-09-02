import { addCat } from '../models/cat-model.js';

const postCat = (req, res) => {
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

export { postCat };
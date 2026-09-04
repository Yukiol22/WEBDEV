import sharp from 'sharp';

const createThumbnail = async (req, res, next) => {
  if (!req.file) {
    next();
    return;
  }

  try {
    const [fileName, extension] = req.file.filename.split('.');
    const thumbnailPath = `${req.file.destination}/${fileName}_thumb.png`;

    await sharp(req.file.path)
      .resize(160, 160)
      .png()
      .toFile(thumbnailPath);

    next();
  } catch (error) {
    next(error);
  }
};

export { createThumbnail };
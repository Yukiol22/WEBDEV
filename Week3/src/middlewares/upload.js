import sharp from 'sharp';
import multer from 'multer';

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

const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/') || file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      const error = new Error('Only images and videos are allowed!');
      error.status = 400;
      cb(error, false);
    }
  },
});




export { createThumbnail, upload};
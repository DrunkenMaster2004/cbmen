npm i multer && cd src/middlewares && touch multer.middleware.js && echo 'import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({ storage: storage })' > multer.middleware.js && cd ../..
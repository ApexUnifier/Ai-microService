import express from 'express';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const router = express();

const imageStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'Assets/images');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});
const docStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'Assets/docs');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const imagefileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const docfileFilter = (req, file, cb) => {
    const allowedFileTypes = ['application/pdf', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

//instance for each type upload
const docUpload = multer({ storage: docStorage, fileFilter: docfileFilter });
const imageUpload = multer({ storage: imageStorage, fileFilter: imagefileFilter });

const files= {docUpload,imageUpload};
export default files;
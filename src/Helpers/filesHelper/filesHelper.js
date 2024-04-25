import express from 'express';
import multer from 'multer';

const router = express();

const docStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'UploadDoc');
    },
    filename: function(req,file,cb){
        cb(null,"upload.pdf");
    }
});

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


const files= {docUpload};
export default files;
import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..' , 'uploads'),
        filename:(req, file, callback) => {
            const extensionImg = path.extname(file.originalname);
            const name = path.basename(file.originalname, extensionImg);
            
            callback(null, `${name}-${Date.now()}${extensionImg}`)
        },
    })
}
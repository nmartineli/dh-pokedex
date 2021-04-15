const multer = require('multer');
const crypto = require('crypto');
const { resolve, extname } = require('path');

const multerConfig = multer.diskStorage({
	destination: resolve(__dirname, '..', 'public', 'uploads'), // resolve trata cada parametro como rolasse um comando cd. o primeiro paramentro é o diretório root. igual o path.join: concatena todos os paramentros para definir a rota
	filename: (req, file, cb) => {
		crypto.randomBytes(16, (err, value) => {
			if (err) cb(err); //if de uma linha não precisa colocar as chaves

			return cb(null, value.toString('hex') + extname(file.originalname)); //file.originalname -> indica que o arquivo deve manter o nome original.
		});
	},
});

module.exports = multerConfig;

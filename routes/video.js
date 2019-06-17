const express = require('express');
const multer = require('multer');
var path = require('path');
const ftp = require('ftp');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// CREATE
router.post('/', upload.single('video'), (req, res, next) => {
  const ftpClient = new ftp();

  const { host, user, password } = req.body;

  const fileLocation = path.resolve(path.join(__dirname, '../', req.file.path));
  const fileName = req.file.filename;

  ftpClient.on('ready', () => {
    ftpClient.put(fileLocation, fileName, err => {
      if (err) return res.status(500).json({ message: err.message });

      res.status(200).json({ message: 'OK' });
      ftpClient.logout(() => {});
    });
  });

  ftpClient.connect({
    host,
    user,
    password,
    port: 21,
    secure: false
  });
});

module.exports = router;

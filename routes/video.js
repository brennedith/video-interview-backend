const express = require('express');
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg');
const ftp = require('ftp');

const router = express.Router();
const upload = multer({ dest: '/tmp' });

// CREATE
router.post('/', upload.single('video'), (req, res, next) => {
  const ftpClient = new ftp();

  const { accountKey, host, user, password } = req.body;

  const fileLocation = req.file.path;
  const fileLocationMp4 = `${fileLocation}.mp4`;
  const fileName = `${accountKey}.mp4`;

  ffmpeg(fileLocation)
    .inputFormat('webm')
    .outputOptions('-qscale 0')
    .save(fileLocationMp4)
    .on('end', function() {
      ftpClient.on('ready', () => {
        ftpClient.put(fileLocationMp4, fileName, err => {
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
});

module.exports = router;

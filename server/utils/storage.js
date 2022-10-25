// const AWS = require("aws-sdk");
// import multer from "multer";
// import path from "path";
// const keys = require("../config/keys");

// exports.s3Upload = async (image) => {
//   let imageUrl = "";
//   let imageKey = "";

//   if (image) {
//     const s3bucket = new AWS.S3({
//       accessKeyId: keys.aws.accessKeyId,
//       secretAccessKey: keys.aws.secretAccessKey,
//       region: keys.aws.region,
//     });

//     const params = {
//       Bucket: keys.aws.bucketName,
//       Key: image.originalname,
//       Body: image.buffer,
//       ContentType: image.mimetype,
//       ACL: "public-read",
//     };

//     const s3Upload = await s3bucket.upload(params).promise();

//     imageUrl = s3Upload.Location;
//     imageKey = s3Upload.key;
//   }

//   return { imageUrl, imageKey };
// };

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./uploads");
//   },
//   filename: (req, file, cb) => {
//     console.log(path.extname(file.originalname));
//     const uniqueName = `${Date.now()}-${Math.round(
//       Math.random() * 1e9
//     )}${path.extname(file.originalname)}`;
//     cb(null, uniqueName);
//   },
// });

// const s3Upload = multer({
//   storage,
// });

module.exports = s3Upload;

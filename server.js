/////////////////////////
////////4:- START SERVER

const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/tours',
  { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false },
  (err) => {
    if (!err) {
      console.log('mongoDB connected succesfully');
    } else {
      console.log('error in connection with mongoDB');
    }
  }
);

const port = 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}.....`);
});

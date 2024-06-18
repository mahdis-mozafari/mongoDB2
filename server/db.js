const mongoose = require('mongoose');


const Connection = async (uri) => {
  
  try {
    return mongoose.connect(uri);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { Connection };
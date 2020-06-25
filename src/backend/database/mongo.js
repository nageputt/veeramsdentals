const mongoose = require('mongoose');
const DB_URL = 'mongodb+srv://veerams_admin:k9RRCYRYV1Hs9L6Y@veerams-cluster-1-gangq.mongodb.net/veerams_dental?retryWrites=true&w=majority';

const connectDb = async () => {
  console.log('Connect Db called');
   await mongoose.connect(DB_URL, { useUnifiedTopology: true ,useNewUrlParser: true })
   .then(db => {
    console.log('Connected Db');
  }).catch(err => {console.log('[Server.js]');console.error(err.stack)});
};

const disconnectDb = async () => {
  console.log('disconnectDb  called');
  await mongoose.disconnect();
  console.log('disconnected Db');
};

const specialitesDetails =  mongoose.model('veeramsSpecialitesDetails',new mongoose.Schema({}),"veerams_specialites_details");

exports.specialitesDetails = specialitesDetails;
exports.connectDb = connectDb;
exports.disconnectDb = disconnectDb;
  
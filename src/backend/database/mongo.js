const mongoose = require('mongoose');
const DB_URL = 'mongodb+srv://veerams_admin:k9RRCYRYV1Hs9L6Y@veerams-cluster-1-gangq.mongodb.net/veerams_dental?retryWrites=true&w=majority';

const connectDb = async () => {
   await mongoose.connect(DB_URL, { useUnifiedTopology: true ,useNewUrlParser: true })
   .catch(err => {console.log('[mongo.js] Error occured while connecting db ');console.error(err.stack)});
};

const disconnectDb = async () => {
  await mongoose.disconnect();
};

const specialitesDetails =  mongoose.model('veeramsSpecialitesDetails',new mongoose.Schema({}),"veerams_specialites_details");
exports.specialitesDetails = specialitesDetails;
exports.connectDb = connectDb;
exports.disconnectDb = disconnectDb;
  
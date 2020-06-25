const mongoDb = require('../database/mongo.js');
const express = require('express');
const routes = express.Router();


routes.get('/getVideoUrl',async (req,res,next) => {
    try {
            var param = req.query.cardId;
            await mongoDb.connectDb();
            const user = await mongoDb.specialitesDetails.find().where('id',param).exec();
            user.length > 0 ? res.send(user): res.sendStatus(404);
      } catch (err) {
         console.log("[routes.js] Error : "+err);
      }finally{
        mongoDb.disconnectDb();
      }
});

module.exports = routes;




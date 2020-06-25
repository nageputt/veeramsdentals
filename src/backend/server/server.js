const express = require('express');
const cors = require('cors');
const app = express();
const specialitesRoutes = require('../routes/specialiteRoutes.js');

app.use(cors());
app.use('/specialites',specialitesRoutes);
app.listen(3040);


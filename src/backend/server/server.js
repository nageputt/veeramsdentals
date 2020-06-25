const express = require('express');
const cors = require('cors');
const specialitesRoutes = require('../routes/specialiteRoutes.js');
const app = express();

app.use(cors());
app.use('/specialites',specialitesRoutes);
app.listen(3040);


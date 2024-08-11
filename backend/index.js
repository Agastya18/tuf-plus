import express from 'express';

import bannerRoute from  './routes/bannerRoute.js'
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();
//middleware
app.use(express.json());
//testing server
app.get('/', (req, res) => {
  res.send('Server is ready');
});


//routes
app.use('/api', bannerRoute);


//server listening on port

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);









import express from 'express';

import bannerRoute from  './routes/bannerRoute.js'
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();
//middleware
app.use(express.json());
const __dirname = path.resolve()



//routes
app.use('/api', bannerRoute);


//server listening on port

if (process.env.NODE_ENV === "production") {

  // Serve static assets from the frontend build directory
   app.use(express.static(path.join(__dirname, "/frontend/dist")));
  
  // Handle all other requests to serve the React app
   app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
   });
  }

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);









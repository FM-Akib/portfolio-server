import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import aboutRoutes from './routes/about.route.js';
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

connectDB()
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/about', aboutRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

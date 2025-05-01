import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import aboutRoutes from './routes/about.route.js';
import achievementRoutes from './routes/achievement.routes.js';
import blogRoutes from './routes/blog.routes.js';
import certificateRoutes from './routes/certificate.routes.js';
import contactRoutes from './routes/contactDetails.routes.js';
import experienceRoutes from './routes/experience.routes.js';
import projectRoutes from './routes/project.routes.js';

dotenv.config();

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

connectDB()
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/about', aboutRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/experiences', experienceRoutes);
app.use('/api/achievements', achievementRoutes);
app.use('/api/certificates', certificateRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/contacts', contactRoutes);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

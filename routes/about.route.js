import express from 'express';
import { createAbout, getAbout } from '../controllers/about.controller.js';
const router = express.Router();

router.post('/', createAbout); // POST /api/about
router.get('/', getAbout); // GET /api/about

export default router;

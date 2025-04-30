import express from 'express';
import {
  createCertificate,
  deleteCertificate,
  getAllCertificates,
  getCertificateById,
  updateCertificate,
} from '../controllers/certificate.controller.js';

const router = express.Router();

router.post('/', createCertificate);
router.get('/', getAllCertificates);
router.get('/:id', getCertificateById);
router.put('/:id', updateCertificate);
router.delete('/:id', deleteCertificate);

export default router;

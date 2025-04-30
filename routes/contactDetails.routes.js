import express from 'express';
import {
  createContactDetails,
  deleteContactDetails,
  getAllContactDetails,
  getContactDetailsById,
  updateContactDetails,
} from '../controllers/contactDetails.controller.js';

const router = express.Router();

router.post('/', createContactDetails);
router.get('/', getAllContactDetails);
router.get('/:id', getContactDetailsById);
router.put('/:id', updateContactDetails);
router.delete('/:id', deleteContactDetails);

export default router;

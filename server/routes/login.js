import express from 'express'
import { login } from '../controllers/Login.js'

const router = express.Router();

router.post('/', login);

export default router;
// module.exports = router;
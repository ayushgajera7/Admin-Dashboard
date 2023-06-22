import express from 'express';
<<<<<<< HEAD
import {getCustomers, getTransactions} from "../controllers/client.js";
const router = express.Router();
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
=======
import { getProducts } from '../controllers/client.js'

const router = express.Router();

router.get('/products', getProducts);

>>>>>>> e180b28aa9ee6005d606aefa706e17da2a65ce3b
export default router;
import express from 'express';
import { createCustomer, deleteCustomerById, getAllCustomers, getCustomerById, updateCustomerById } from '../controllers/customerController.js';


const customerRouter = express.Router();

customerRouter.post('/', createCustomer);
customerRouter.get('/', getAllCustomers);
customerRouter.get('/:id', getCustomerById);
customerRouter.put('/:id', updateCustomerById);
customerRouter.delete('/:id', deleteCustomerById);

export default customerRouter;
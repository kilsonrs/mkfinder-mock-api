import { Router } from 'express';
import CustomerController from '../controllers/CustomerController';
import CustomerDetailsController from '../controllers/CustomerDetailsController';
const routes = Router();

const customerController = new CustomerController();
const customerDetailsController = new CustomerDetailsController();

routes.get('/customers',customerController.index);

routes.get('/customer-details/:login', customerDetailsController.index);

export default routes;

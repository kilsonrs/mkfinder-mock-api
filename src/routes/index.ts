import { Request, Response, Router } from 'express';
import FakeCustomerRepository from '../repositories/fakes/FakeCustomerRepository';
import ListCustomersDTO from '../dtos/ListCustomersDTO';

const routes = Router();

const fakeCustomerRepository = new FakeCustomerRepository();
fakeCustomerRepository.generate();


routes.get('/customers', async (request: Request, response:Response) => {
  const query: ListCustomersDTO = request.query;
  try {
    const customers = await fakeCustomerRepository.list(query);
    return response.json(customers)
  } catch (err){
    return response.status(500).json(err.message)
  }

});

routes.get('/customer-details/:login', async (request: Request, response: Response) => {
  const { login } = request.params;

  try {
    const customer = await fakeCustomerRepository.getCustomerDetails({login})
    if (!customer) {
      throw new Error('Invalid login provided')
    }
    return response.json(customer)
  } catch (err) {
    return response.status(500).json(err.message)
  }
});

export default routes;


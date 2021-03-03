import GetCustomerDTO from '../dtos/GetCustomerDTO';
import ICustomerDTO from '../dtos/ICustomerDTO';
import ListCustomersDTO from '../dtos/ListCustomersDTO';

export default interface ICustomerRepository {
  generate(): Promise<void>;
  list(queryData: ListCustomersDTO): Promise<ICustomerDTO[]>;
  getCustomerDetails(queryData: ListCustomersDTO): Promise<GetCustomerDTO>;
}

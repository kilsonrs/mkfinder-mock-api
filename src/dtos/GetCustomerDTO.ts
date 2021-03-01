import IAddress from './IAddress';
import IConnection from './IConnection';
import IContact from './IContact';
import IInvoice from './IInvoice';
import IPerson from './IPerson';

interface GetCustomerDTO {
  person: IPerson;
  contact: IContact;
  connection: IConnection;
  address: IAddress;
  invoices: IInvoice[] | null;
}
export default GetCustomerDTO;

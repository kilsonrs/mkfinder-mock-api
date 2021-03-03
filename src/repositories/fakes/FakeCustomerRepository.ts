import faker from 'faker';
import { parseMac, parseString } from '../../utils/stringParser';

import ICustomerDTO from '../../dtos/ICustomerDTO';
import ICustomerRepository from '../ICustomerRepository';
import ListCustomersDTO from '../../dtos/ListCustomersDTO';
import fakeInvoiceGenerator from '../helpers/fakeInvoiceGenerator';
import fakePersonGenerator from '../helpers/fakePersonGenerator';
import fakeConnectionGenerator from '../helpers/fakeConnectionGenerator';
import fakeAddressGenerator from '../helpers/fakeAddressGenerator';
import fakeContactGenerator from '../helpers/fakeContactGenerator';
import GetCustomerDTO from '../../dtos/GetCustomerDTO';

class FakeCustomerRepository implements ICustomerRepository {
  private customers: ICustomerDTO[] = [];

  async generate(): Promise<void> {
    for (let i = 0; i < 3; i++) {
      const company = faker.company.companyName(0);

      for (let j = 0; j < 4; j++) {
        const id = faker.random.uuid();
        const uuid_cliente = faker.random.uuid();

        const firstName = faker.name.firstName(0);
        const lastName = faker.name.lastName(0);

        const plano = `Plano Residencial - ${faker.random.number(10)}`;

        const person = fakePersonGenerator({
          firstName,
          lastName,
          id,
          uuid_cliente,
          company,
        });
        const { nome, cpf_cnpj } = person;

        const invoices = fakeInvoiceGenerator({ nome, plano, cpf_cnpj });
        const contact = fakeContactGenerator({
          id,
          firstName,
          lastName,
          uuid_cliente,
        });

        const connection = fakeConnectionGenerator({ firstName, lastName });
        const address = fakeAddressGenerator({ id, uuid_cliente });

        const { login, mac } = connection;
        const { endereco } = address;

        const customer: ICustomerDTO = {
          id,
          uuid_cliente,
          nome,
          login,
          company,
          mac,
          endereco,
          details: {
            person,
            contact,
            connection,
            address,
            invoices,
          },
        };

        this.customers.push(customer);
      }
    }
  }

  async list(data: ListCustomersDTO): Promise<ICustomerDTO[]> {
    const { login, nome, mac } = data;
    if (login) {
      return this.customers
        .filter(client =>
          parseString(client.login).includes(parseString(login)),
        )
        .filter((_, index) => index < 10);
    }

    if (nome) {
      const filterCustomer = this.customers
        .filter(client => parseString(client.nome).includes(parseString(nome)))
        .filter((_, index) => index < 10);
      return filterCustomer;
    }

    if (mac) {
      return this.customers
        .filter(
          client => client.mac && parseMac(client.mac).includes(parseMac(mac)),
        )
        .filter((_, index) => index < 10);
    }
    return this.customers;
  }

  async getCustomerDetails(data: ListCustomersDTO): Promise<GetCustomerDTO> {
    const { login } = data;

    const customer = this.customers.filter(client => client.login === login);

    return customer[0].details;
  }
}

export default FakeCustomerRepository;

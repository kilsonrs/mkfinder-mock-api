import { name, random, internet, company } from 'faker';

import IPerson from "../../dtos/IPerson";

interface IFakePerson {
  firstName: string;
  lastName: string;
  id: string;
  uuid_cliente: string;
}

const fakePersonGenerator = ({firstName, lastName, id, uuid_cliente}: IFakePerson): IPerson => {
  const person = {
    id,
    uuid_cliente,
    nome: name.findName(firstName,lastName, 0),
    company: company.companyName(0),
    cpf_cnpj: random.number(45645678936).toString(),
    url: internet.url(),
    status: {
      isFree: false,
      isActive: false,
      deactivationDate: null,
      isBlocked: false,
      blockDate: null,
      inException: false,
      exceptionUntil: null,
    },
  }
  return person;
}

export default fakePersonGenerator;
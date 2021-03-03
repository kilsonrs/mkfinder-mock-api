import { name, random, internet } from 'faker';

import { format, addDays, subDays } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import IPerson from "../../dtos/IPerson";
import { parseString } from '../../utils/stringParser';

interface IFakePerson {
  id: string;
  uuid_cliente: string;
  company: string;
  firstName: string;
  lastName: string;
}

const fakePersonGenerator = ({firstName, lastName, id, uuid_cliente, company}: IFakePerson): IPerson => {
  const year = new Date().getFullYear()
  const month = new Date().getMonth()
  const fromDate = new Date(year, month, 10);

  const blockDate = format(fromDate, 'yyyy-MM-dd', {
    locale: ptBR
  })

  const deactivationDate = format(subDays(fromDate, 15), 'yyyy-MM-dd', {
    locale: ptBR
  })

  const exceptionUntil = format(addDays(fromDate, 15), 'yyyy-MM-dd', {
    locale: ptBR
  })

  const cortesia = {
    isFree: true,
    isActive: true,
    deactivationDate: null,
    isBlocked: false,
    blockDate: null,
    inException: false,
    exceptionUntil: null,
  };

  const ativo = {
    isFree: false,
    isActive: true,
    deactivationDate: null,
    isBlocked: false,
    blockDate: null,
    inException: false,
    exceptionUntil: null,
  };
  
  const bloqueado = {
    isFree: false,
    isActive: true,
    deactivationDate: null,
    isBlocked: true,
    blockDate,
    inException: false,
    exceptionUntil: null,
  };

  const excecao = {
    isFree: false,
    isActive: true,
    deactivationDate: null,
    isBlocked: false,
    blockDate: null,
    inException: true,
    exceptionUntil,
  };

  const inativo = {
    isFree: false,
    isActive: false,
    deactivationDate,
    isBlocked: true,
    blockDate: deactivationDate,
    inException: false,
    exceptionUntil: null,
  };

  const randomNumber = random.number({ min: 0, max: 4 });
  const statusOptions = [ativo,cortesia,inativo,bloqueado, excecao];
  
  const status = statusOptions[randomNumber]
  
  const person = {
    id,
    uuid_cliente,
    nome: name.findName(firstName,lastName, 0),
    company,
    cpf_cnpj: random.number(45645678936).toString(),
    url: `https://mkauth.${parseString(company.toLocaleLowerCase()).replace(/\s/g, '.')}.br`,
    status,
  }
  return person;
}

export default fakePersonGenerator;
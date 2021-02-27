import { Request, Response } from 'express';
import faker from 'faker';

export default class CustomersController {

  async index(request: Request, response:Response) {
    const firstName = faker.name.firstName(0);
    const lastName = faker.name.lastName(0);
    const plano = `Plano Residencial - ${faker.random.number(10)}`;
    const invoices = [];

    for (let i = 0; i < 10; i++) {
      const invoice = 
      {
        uuid_lanc: faker.random.uuid(),
        nome:  faker.name.findName(firstName,lastName, 0),
        datavenc: faker.date.past(),
        valor: 100,
        cpf_cnpj: faker.random.number(45645678936),
        nossonum: 12345,
        linhadig: `123456.78901 23456.78901${i} 23456.7${i}890${i} ${i} 12300000010000`,
        titulo: `12345${i}`,
        referencia: faker.date.past(),
        processamento: faker.date.past(),
        descricao: `Mensalidade: ${plano}`,
        plano,
        status: i < 4 ? 'pago' : 'aberto',
        datapag: null,
        valorpag: i < 4 ? 100 : null,
        recibo: null,
        deltitulo: '0',
      }
      invoices.push(invoice);
    }

    const address = {
        endereco_res: faker.address.streetAddress(),
        numero_res: faker.random.number(600),
        bairro_res: faker.address.streetSuffix(),
        cidade_res: faker.address.city(1),
        estado_res: faker.address.state(),
        cep_res: faker.address.zipCode(),
        complemento_res: faker.address.secondaryAddress(),
        bairro: faker.address.streetSuffix(),
        cep: faker.address.zipCode(),
        cidade: faker.address.city(1),
        complemento: faker.address.secondaryAddress(),
        cpf_cnpj: faker.random.number(43333333369),
        endereco: faker.address.streetAddress(),
        estado: faker.address.state(),
        id: faker.random.uuid(),
        numero: faker.random.number(600),
        uuid_cliente: faker.random.uuid(),
      };

      const connection = {
        ramal: faker.internet.ip(),
        login: faker.internet.userName(firstName, lastName).toLocaleLowerCase(),
        senha: faker.internet.password(8),
        mac: faker.internet.mac().toLocaleUpperCase(),
        chave: faker.internet.password(16),
        plano,
        venc: faker.random.number(30),
      };

      const contact = {
        id: faker.random.uuid(),
        uuid_cliente: faker.random.uuid(),
        fone: faker.phone.phoneNumber(),
        celular: faker.phone.phoneNumber(),
        celular2: faker.phone.phoneNumber(),
        email: faker.internet.email(firstName, lastName).toLocaleLowerCase(),
      };
      const person = {
        id: faker.random.uuid(),
        nome: faker.name.findName(firstName,lastName, 0),
        cpf_cnpj: faker.random.number(43333333369),
        uuid_cliente: faker.random.uuid(),
        company: faker. company.companyName(0),
        url: faker.internet.url(),
        status: {
          isFree: false,
          isActive: true,
          deactivationDate: faker.date.past(),
          isBlocked: false,
          blockDate: faker.date.past(),
          inException: true,
          exceptionUntil: faker.date.future(),
        },
      };

     
      
      const customer = {
        person,
        contact,
        connection,
        address,
        invoices,
      }
    
    return response.json(customer)
  }
}


import { Request, Response } from 'express';
import { name, address, random, company, internet } from 'faker';

export default class CustomersDetailsController {

  async index(request: Request, response:Response) {
    const customers = [];
    for (let i = 0; i < 10; i++) {
      const firstName = name.firstName(0);
      const lastName = name.lastName(0);
     
      const customer = {
        bairro: address.streetSuffix(),
        cep: address.zipCode(),
        cidade: address.city(1),
        codigo: null,
        company:  company.companyName(0),
        complemento: address.secondaryAddress(),
        coordenadas: address.nearbyGPSCoordinate(),
        cpf_cnpj: random.number(43333333369),
        email: internet.email(firstName, lastName).toLocaleLowerCase(),
        endereco: address.streetAddress(),
        estado: address.state(),
        id: random.uuid(),
        ip: internet.ip(),
        login: internet.userName(firstName, lastName).toLocaleLowerCase(),
        mac: internet.mac().toLocaleUpperCase(),
        nome: name.findName(firstName,lastName, 0),
        numero: random.number(600),
        ramal: internet.ip(),
        senha: internet.password(8),
        tipo: "pppoe",
        url: internet.url(),
        uuid_cliente: random.uuid(),
      }
      customers.push(customer);
    }
    return response.json(customers)
  }
}


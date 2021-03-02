import IAddress from "../../dtos/IAddress";
import faker from 'faker';
faker.locale = 'pt_BR';


interface FakePersonGeneratorDTO {
  id: string;
  uuid_cliente: string;
}

const fakeAddressGenerator = ({id, uuid_cliente}: FakePersonGeneratorDTO): IAddress => {
  
  const prefix = faker.address.streetAddress().split(' ').pop();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const streetName = faker.name.findName(firstName, lastName, 0);
  const bairroPrefix = faker.random.number(600) % 2 ? 'Jardim' : 'Parque';
  
  const address = {
    id,
    uuid_cliente,
    endereco: `${prefix} ${streetName}`,
    numero: faker.random.number(600),
    bairro: `${bairroPrefix} ${faker.name.firstName()} ${faker.name.lastName()}`,
    cidade: faker.address.country(),
    estado:  faker.address.stateAbbr(),
    cep: faker.address.zipCode(),
    complemento: faker.address.secondaryAddress(),
  }
  
  return address;
}

export default fakeAddressGenerator;
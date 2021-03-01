import IAddress from "../../dtos/IAddress";
import faker from 'faker';


interface FakePersonGeneratorDTO {
  id: string;
  uuid_cliente: string;
}

const fakeAddressGenerator = ({id, uuid_cliente}: FakePersonGeneratorDTO): IAddress => {
  const address = {
    id,
    uuid_cliente,
    endereco: faker.address.streetAddress(),
    numero: faker.random.number(600),
    bairro: faker.address.streetSuffix(),
    cidade: faker.address.city(1),
    estado:  faker.address.state(),
    cep: faker.address.zipCode(),
    complemento: faker.address.secondaryAddress(),
  }
  return address;
}

export default fakeAddressGenerator;
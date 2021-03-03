import faker from 'faker';
import IAddress from '../../dtos/IAddress';

faker.locale = 'pt_BR';

interface FakePersonGeneratorDTO {
  id: string;
  uuid_cliente: string;
}

const fakeAddressGenerator = ({
  id,
  uuid_cliente,
}: FakePersonGeneratorDTO): IAddress => {
  const prefix = faker.address.streetAddress().split(' ').pop();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const streetName = faker.name.findName(firstName, lastName, 0);
  const bairroPrefix = faker.random.number(600) % 2 ? 'Jardim' : 'Parque';

  const address = {
    id,
    uuid_cliente,
    endereco: `${prefix} ${streetName}`,
    numero: faker.random.number({ min: 100, max: 600 }),
    bairro: `${bairroPrefix} ${faker.name.firstName()} ${faker.name.lastName()}`,
    cidade: 'São Paulo',
    estado: 'SP',
    cep: faker.address.zipCode('11###-###'),
    complemento: faker.address.secondaryAddress(),
  };
  return address;
};

export default fakeAddressGenerator;

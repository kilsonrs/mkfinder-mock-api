import faker from 'faker';
import IContact from '../../dtos/IContact';

faker.locale = 'pt_BR';

interface FakePersonGeneratorDTO {
  id: string;
  uuid_cliente: string;
  firstName: string;
  lastName: string;
}

const fakeContactGenerator = ({
  id,
  uuid_cliente,
  firstName,
  lastName,
}: FakePersonGeneratorDTO): IContact => {
  const areaCode = faker.random.number({ min: 11, max: 19 });
  const contact = {
    id,
    uuid_cliente,
    fone: faker.phone.phoneNumber(`(${areaCode}) 3###-####`),
    celular: faker.phone.phoneNumber(`(${areaCode}) 9####-####`),
    celular2: faker.phone.phoneNumber(`(${areaCode}) 9####-####`),
    email: faker.internet.email(firstName, lastName).toLocaleLowerCase(),
  };
  return contact;
};

export default fakeContactGenerator;

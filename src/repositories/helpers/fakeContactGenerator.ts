import IContact from "../../dtos/IContact";
import { internet, phone } from 'faker';

interface FakePersonGeneratorDTO {
  id: string;
  uuid_cliente: string;
  firstName: string;
  lastName: string;
}

const fakeContactGenerator = ({id, uuid_cliente,firstName, lastName }: FakePersonGeneratorDTO): IContact => {
  const contact = {
    id,
    uuid_cliente,
    fone: phone.phoneNumber(),
    celular: phone.phoneNumber(),
    celular2: phone.phoneNumber(),
    email: internet.email(firstName, lastName).toLocaleLowerCase(),
  }
  return contact;
}

export default fakeContactGenerator;
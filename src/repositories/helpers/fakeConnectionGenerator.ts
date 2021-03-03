import { internet } from 'faker';
import IConnection from '../../dtos/IConnection';

interface IFakeConnection {
  firstName: string;
  lastName: string;
}

const fakeConnectionGenerator = ({
  firstName,
  lastName,
}: IFakeConnection): IConnection => {
  const connection = {
    ramal: internet.ip(),
    login: `${firstName.toLocaleLowerCase()}.${lastName.toLocaleLowerCase()}`,
    senha: firstName.toLocaleLowerCase(),
    mac: internet.mac().toLocaleUpperCase(),
    chave: internet.password(8).toLocaleLowerCase(),
  };
  return connection;
};

export default fakeConnectionGenerator;

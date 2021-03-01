import {name, random, address, internet, company} from 'faker';
import IConnection from "../../dtos/IConnection";

interface IFakeConnection {
  firstName: string;
  lastName: string;
}

const fakeConnectionGenerator = ({firstName, lastName}:IFakeConnection): IConnection => {
  const connection = {
    ramal:  internet.ip(),
    login: internet.userName(firstName, lastName).toLocaleLowerCase(),
    senha: internet.password(8),
    mac: internet.mac().toLocaleUpperCase(),
    chave: internet.password(16),
  }
  return connection;
}

export default fakeConnectionGenerator;
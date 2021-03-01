import GetCustomerDTO from "./GetCustomerDTO";

export default interface ICustomerDTO {
  id: string;
  uuid_cliente: string;
  nome: string;
  login: string;
  company: string;
  mac: string;
  endereco: string;
  details: GetCustomerDTO;
 }
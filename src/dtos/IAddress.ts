interface IAddress {
  id: string;
  uuid_cliente: string;
  endereco: string;
  numero: string | number;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  complemento: string;
}

export default IAddress;

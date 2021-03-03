interface IProfileStatus {
  isFree: boolean;
  isActive: boolean;
  deactivationDate: string | null;
  isBlocked: boolean;
  blockDate: string | null;
  inException: boolean;
  exceptionUntil: string | null;
}

interface IPerson {
  company: string;
  id: string;
  nome: string;
  cpf_cnpj: string;
  uuid_cliente: string;
  url: string | undefined;
  status: IProfileStatus;
}

export default IPerson;

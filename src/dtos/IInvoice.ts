interface IInvoice {
  uuid_lanc: string;
  nome: string;
  datavenc: string|Date;
  valor: string | number;
  cpf_cnpj: string;
  nossonum: string | number;
  linhadig: string;
  titulo: string | number;
  referencia: string|Date;
  processamento: string|Date;
  descricao: string;
  plano: string;
  status: string;
  datapag: string|Date | null;
  valorpag: string | number | null;
  recibo: string | null;
  deltitulo: string;
}

export default IInvoice;

import faker from 'faker';
import IInvoice from '../../dtos/IInvoice';
import { format, addMonths, subMonths } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'


interface FakerInvoiceDTO {
  nome: string;
  plano: string;
  cpf_cnpj: string;
}

const fakeInvoiceGenerator = ({ nome , plano, cpf_cnpj }: FakerInvoiceDTO): IInvoice[] => {
  const invoices = [];
  const expirationDay = 10;
  
  const year = new Date().getFullYear()
  const month = new Date().getMonth()
  const lastFifthMonth = subMonths(new Date(year, month, expirationDay), 5)

    for (let i = 0; i < 10; i++) {
      let invoiceStatus = i < 4 ? 'pago' : 'aberto';
      if (i === 4) {
        invoiceStatus = 'vencido'
      }
      const baseDate = addMonths(lastFifthMonth, i);
      const dueDate = format(baseDate, 'yyyy-MM-dd', {
        locale: ptBR
      });
      const processingDate = format(subMonths(baseDate, 1), 'yyyy-MM-dd', {
        locale: ptBR
      });

      const invoice = 
      {
        uuid_lanc: faker.random.uuid(),
        nome,
        datavenc: dueDate,
        valor: 100,
        cpf_cnpj,
        nossonum: 12345,
        linhadig: `123456.78901 23456.78901${i} 23456.7${i}890${i} ${i} 12300000010000`,
        titulo: `12345${i}`,
        referencia: processingDate,
        processamento: processingDate,
        descricao: `Mensalidade: ${plano}`,
        plano,
        status: invoiceStatus,
        datapag: i < 4 ? dueDate : null,
        valorpag: i < 4 ? 100 : null,
        recibo: null,
        deltitulo: '0',
      }
      invoices.push(invoice);
    }

  
    return invoices;
}

export default fakeInvoiceGenerator;
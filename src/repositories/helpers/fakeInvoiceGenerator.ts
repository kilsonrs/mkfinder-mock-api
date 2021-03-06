import faker from 'faker';
import ptBR, { format, addMonths, subMonths } from 'date-fns';

import IInvoice from '../../dtos/IInvoice';

interface FakerInvoiceDTO {
  nome: string;
  plano: string;
  cpf_cnpj: string;
}

const fakeInvoiceGenerator = ({
  nome,
  plano,
  cpf_cnpj,
}: FakerInvoiceDTO): IInvoice[] => {
  const invoices = [];
  const expirationDayOptions = [5, 10, 15, 20, 25];
  const invoiceValueOptions = [80, 90, 100, 120, 150];

  const randomNumber = faker.random.number({ min: 0, max: 4 });

  const expirationDay = expirationDayOptions[randomNumber];
  const invoiceValue = invoiceValueOptions[randomNumber];

  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const lastFifthMonth = subMonths(new Date(year, month, expirationDay), 5);

  for (let i = 0; i < 10; i++) {
    let invoiceStatus = i < 4 ? 'pago' : 'aberto';
    if (i === 4) {
      invoiceStatus = 'vencido';
    }
    const baseDate = addMonths(lastFifthMonth, i);
    const dueDate = format(baseDate, 'yyyy-MM-dd', {
      locale: ptBR,
    });
    const processingDate = format(subMonths(baseDate, 1), 'yyyy-MM-dd', {
      locale: ptBR,
    });

    const invoice = {
      uuid_lanc: faker.random.uuid(),
      nome,
      datavenc: dueDate,
      valor: invoiceValue,
      cpf_cnpj,
      nossonum: 12345,
      linhadig: `123456.78901 23456.78901${i} 23456.7${i}890${i} ${i} 12300000010${invoiceValue}`,
      titulo: `12345${i}`,
      referencia: processingDate,
      processamento: processingDate,
      descricao: `Mensalidade: ${plano}`,
      plano,
      status: invoiceStatus,
      datapag: i < 4 ? dueDate : null,
      valorpag: i < 4 ? invoiceValue : null,
      recibo: null,
      deltitulo: '0',
    };
    invoices.push(invoice);
  }

  return invoices;
};

export default fakeInvoiceGenerator;

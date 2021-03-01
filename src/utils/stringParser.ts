const parseString = (payload: string): string => {
  return payload
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
};

const parseMac = (payload: string): string =>
  payload.replace(':', '').toLowerCase();

export { parseString, parseMac };

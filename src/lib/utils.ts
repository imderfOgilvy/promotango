export const removeAccentMark = (texto: string) =>
  texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

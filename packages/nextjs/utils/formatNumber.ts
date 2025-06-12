export const formatNumber = (number: string | number) => {
  return new Intl.NumberFormat("es-ES").format(typeof number === "string" ? parseInt(number) : number);
};

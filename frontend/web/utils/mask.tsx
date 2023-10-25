export const cpfMask = (value: string) => {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

export const validateCpf = (cpf: string) => {
  const cpfNumber = cpf.replace(/[^\d]+/g, "");
  if (cpfNumber.length !== 11 || !!cpfNumber.match(/(\d)\1{10}/)) return false;
  const cpfString = cpfNumber.split("");
  const validator = cpfString
    .filter((digit, index, array) => index >= array.length - 2 && digit)
    .map((el) => +el);
  const toValidate = (pop: number) =>
    cpfString
      .filter((digit, index, array) => index < array.length - pop && digit)
      .map((el) => +el);
  const rest = (count: number, pop: number) =>
    ((toValidate(pop).reduce((soma, el, i) => soma + el * (count - i), 0) *
      10) %
      11) %
    10;
  return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1]);
};

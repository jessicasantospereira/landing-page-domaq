export const formatadorDinheiro = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
export const converterEmBigDecimal = (value: string) => {
  if (!value) {
    return 0;
  }
  return value.replace(".", "").replace(",", ".");
};

export const formatReal = (valor: any) => {
  const v = ((valor.replace(/\D/g, "") / 100).toFixed(2) + "").split(".");

  const m = v[0]
    .split("")
    .reverse()
    .join("")
    .match(/.{1,3}/g);
  if (m) {
    for (let i = 0; i < m.length; i++)
      m[i] = m[i].split("").reverse().join("") + ".";

    const r = m.reverse().join("");

    return r.substring(0, r.lastIndexOf(".")) + "," + v[1];
  }
};

export const removeNonNumeric = (value?: string | null): string => {
  if (!value) return "";
  return value.replace(/\D/g, "");
};
export const isBlank = (value?: string | null): boolean => {
  return !value || value.trim().length === 0;
};
export const formatCPF = (cpf?: string | null): string => {
  if (isBlank(cpf)) return "";
  cpf = removeNonNumeric(cpf);
  if (cpf.length > 11) cpf = cpf.substring(0, 11);
  if (cpf.length > 9) {
    cpf = `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(
      6,
      9
    )}-${cpf.substring(9)}`;
  } else if (cpf.length > 6) {
    cpf = `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6)}`;
  } else if (cpf.length > 3) {
    cpf = `${cpf.substring(0, 3)}.${cpf.substring(3)}`;
  }

  return cpf;
};

export const formatTelefone = (phone?: string | null): string => {
  phone = removeNonNumeric(phone);
  if (isBlank(phone)) return "";
  if (phone.length > 11) phone = phone.substring(0, 11);

  if (phone.length === 11) {
    return `(${phone.substring(0, 2)})${phone.substring(
      2,
      7
    )}-${phone.substring(7)}`;
  } else if (phone.length > 6) {
    return `(${phone.substring(0, 2)})${phone.substring(
      2,
      6
    )}-${phone.substring(6)}`;
  } else if (phone.length > 2) {
    return `(${phone.substring(0, 2)})${phone.substring(2)}`;
  }

  return `(${phone}`;
};
export const maskCep = (e: string) => {
  if (!e) return "";
  // eslint-disable-next-line no-param-reassign
  e = e.replace(/\D/g, "");
  // eslint-disable-next-line no-param-reassign
  e = e.replace(/^(\d{5})(\d)/, "$1-$2");
  return e;
};

export const formataData = (data: string) => {
  const dataFormatada = data.split("-");
  let dia = dataFormatada[2];
  let mes = dataFormatada[1];
  let ano = dataFormatada[0];

  return `${dia}/${mes}/${ano}`;
};
export const formatarDataCupom = (cupom: Cupom) => {
  const data = cupom.dataValidade.toString().split("-");
  let dia = data[2];
  let mes = data[1];
  let ano = data[0];

  return `${dia}/${mes}/${ano}`;
};
export const formataData2 = (data: string) => {
  console.log(data);
  let dia = data[2],
    mes = data[1],
    ano = data[0];
  if (dia < "10") dia = `0${dia}`;
  if (mes < "10") mes = `0${mes}`;
  return `${ano}-${mes}-${dia}`;
};


export function validarCPF(cpf: string) {
  cpf = cpf.replace(/\D/g, ""); // Remove caracteres não numéricos

  if (cpf.length !== 11 || /^[0-9]{11}$/.test(cpf) === false) {
    return false;
  }

  // Verifica se todos os dígitos são iguais (CPF inválido)
  if (/^([0-9])\1{10}$/.test(cpf)) {
    return false;
  }

  // Calcula o primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let primeiroDigito = 11 - (soma % 11);
  if (primeiroDigito > 9) {
    primeiroDigito = 0;
  }

  // Verifica o primeiro dígito verificador
  if (parseInt(cpf.charAt(9)) !== primeiroDigito) {
    return false;
  }

  // Calcula o segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  let segundoDigito = 11 - (soma % 11);
  if (segundoDigito > 9) {
    segundoDigito = 0;
  }

  // Verifica o segundo dígito verificador
  if (parseInt(cpf.charAt(10)) !== segundoDigito) {
    return false;
  }

  return true;
}


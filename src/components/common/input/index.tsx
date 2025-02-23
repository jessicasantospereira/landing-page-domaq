import { formatCPF, formatReal, formatTelefone, maskCep, validarCPF } from "@/utils/formats";
import { InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    columnClasses?: string;
    id: string;
    error?: string;
    name?: string;
    tipo?: string;
    formatter?: (value: string) => string | undefined;
  }

export const Input: React.FC<InputProps> = ({
    label,
    columnClasses,
    id,
    error,
    name,
    tipo,
    formatter,
    onChange,
    ...props
  }: InputProps) => {
    const [erro, setErro] = useState("");
    const onInputChange = (event: any) => {
      const value = event.target.value;
      const name = event.target.name;
      const formattedValue = (formatter && formatter(value as string)) || value;
      onChange({
        ...event,
        target: {
          name,
          value: formattedValue,
        },
      });
    };
    return (
      <div className={columnClasses}>
        <label htmlFor={id} className="mb-2" >
          {label}
        </label>
        <div className="control">
          <input
            id={id}
            onChange={onInputChange}
            className="input"
            name={name}
            type={tipo}
            {...props}
          />
          {error && <p className="help is-danger">{error}</p>}
        </div>
      </div>
    );
  };
  export const InputSimples: React.FC<InputProps> = ({ ...props }) => {
    const [erro, setErro] = useState("");
    return (
      <Input
        {...props}
        error={erro}
        onBlur={(e) => {
          e.target.value === "" ? setErro("Campo obrigatório") : setErro("");
        }}
      />
    );
  };
  
  export const InputMoney: React.FC<InputProps> = ({ ...props }) => {
    return <Input {...props} formatter={formatReal} />;
  };
  
  export const InputCpf: React.FC<InputProps> = ({ ...props }) => {
    const [erro, setErro] = useState("");
    return (
      <Input
        {...props}
        formatter={formatCPF}
        error={erro}
        onBlur={(e) => {
          if (e.target.value === "") {
            setErro("Campo obrigatório");
          } else if (!validarCPF(e.target.value)) {
            setErro("CPF inválido");
          } else {
            setErro("");
          }
        }}
      />
    );
  };
  export const InputTelefone: React.FC<InputProps> = ({ ...props }) => {
    const [erro, setErro] = useState("");
    return (
      <Input
        {...props}
        formatter={formatTelefone}
        error={erro}
        onBlur={(e) => {
          e.target.value === "" ? setErro("Campo obrigatório") : setErro("");
        }}
      />
    );
  };
  export const InputCep: React.FC<InputProps> = ({ ...props }) => {
    const [erro, setErro] = useState("");
    return (
      <Input
        {...props}
        formatter={maskCep}
        error={erro}
        onBlur={(e) => {
          e.target.value === "" ? setErro("Campo obrigatório") : setErro("");
        }}
      />
    );
  };
  
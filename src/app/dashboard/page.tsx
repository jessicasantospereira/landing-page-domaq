import CardDashboard from "@/concepts/Dashboard/components/Card";
import React from "react";

const dados = [
  {
    title: "Cliente",
    link: "/clientes",
    content: "Cadastro de clientes",
  },
  {
    title: "Serviços",
    link: "/servicos",
    content: "Cadastro de serviços",
  },
  {
    title: "Orçamentos",
    link: "/orçamentos",
    content: "Cadastro de orçamentos",
  },
  {
    title: "Atendimentos",
    link: "/atendimentos",
    content: "Cadastro de visitas e atendimentos",
  },
];
export default function DashboardPage() {
  return (
    <div className="flex justify-evenly">
      {dados.map((dado, index) => (
        <CardDashboard
          key={index}
          title={dado.title}
          link={dado.link}
          content={dado.content}
        />
      ))}
    </div>
  );
}

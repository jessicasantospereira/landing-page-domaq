"use client";
import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Atendimento } from "@/app/models/atendimentos";
import { useAtendimentoService } from "@/services/atendimentos.service";
import { useRouter } from "next/navigation";

export const ListagemAtendimentos:React.FC = () => {
  const [data, setData] = useState<Date | undefined>(new Date());
  const [atendimento, setAtendimento] = useState<Atendimento | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const service = useAtendimentoService();
  const [atendimentos, setAtendimentos] = useState<Atendimento[]>([]);
  const router = useRouter();

useEffect(() => {
    service.buscarAtendimentos().then((response) => setAtendimentos(response?.data || []));
}, []);

const appointmentsForDay = (date: Date | undefined) => {
    if (!date) return [];
    const dateStr = format(date, "dd/MM/yyyy");
    return atendimentos.filter((apt) => apt.dataVisita === dateStr);
};
  
  const handleDateSelect = (date: Date | undefined) => {
    setData(date);
    const appointments = appointmentsForDay(date);
    if (appointments.length > 0) {
      setAtendimento(appointments[0]);
      setIsDetailsOpen(true);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Atendimentos</h1>
        <Button onClick={() => router.push("/atendimentos/criar-atendimento")}>
          <Calendar className="mr-2 h-4 w-4" />
          Novo Atendimento
        </Button>
      </div>
      <div className="rounded-lg border bg-card p-8 max-w-4xl mx-auto">
        <CalendarComponent
          mode="single"
          selected={data}
          onSelect={handleDateSelect}
          locale={ptBR}
          modifiers={{
            booked: (date:any) => appointmentsForDay(date).length > 0,
          }}
          modifiersStyles={{
            booked: { backgroundColor: "hsl(var(--primary))", color: "white" },
          }}
          className="rounded-md border w-full"
        />
      </div>
      <Sheet open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Detalhes do Atendimento</SheetTitle>
          </SheetHeader>
          {atendimento && (
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="font-medium">Data e Hora</h3>
                <p>{atendimento.dataVisita} às {atendimento.horaVisita}</p>
              </div>
              <div>
                <h3 className="font-medium">Cliente</h3>
                <p>{atendimento.cliente.nome}</p>
              </div>
              <div>
                <h3 className="font-medium">Serviço</h3>
                <p>{atendimento.servico.descricao}</p>
              </div>
              <div>
                <h3 className="font-medium">Tipo</h3>
                <p>{atendimento.tipo === "ORCAMENTO" ? "Orçamento" : "Execução"}</p>
              </div>
              <div>
                <h3 className="font-medium">Descrição</h3>
                <p>{atendimento.descricao}</p>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
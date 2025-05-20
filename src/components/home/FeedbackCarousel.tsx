"use client"
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Dados de exemplo para feedbacks
const feedbacks = [
  {
    name: "Ricardo Silva",
    rating: 5,
    comment: "Excelente serviço! Minha geladeira voltou a funcionar perfeitamente e com rapidez no atendimento.",
    role: "Cliente Residencial"
  },
  {
    name: "Ana Oliveira",
    rating: 5,
    comment: "Profissionais muito competentes. Resolveram um problema na minha máquina de lavar que outros técnicos não conseguiram.",
    role: "Cliente Residencial"
  },
  {
    name: "Marcos Santos",
    rating: 4,
    comment: "Atendimento rápido e eficiente. Recomendo para todos que precisam de serviços de manutenção.",
    role: "Empresário"
  },
  {
    name: "Fernanda Costa",
    rating: 5,
    comment: "Instalaram o ar-condicionado do meu comércio com perfeição. Custo-benefício excelente!",
    role: "Comerciante"
  },
  {
    name: "José Pereira",
    rating: 5,
    comment: "Trabalho de qualidade e honesto. Ótima empresa para confiar seus eletrodomésticos.",
    role: "Cliente Residencial"
  }
];

interface FeedbackProps {
  name: string;
  rating: number;
  comment: string;
  role: string;
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
        </svg>
      ))}
    </div>
  );
};

const FeedbackCard: React.FC<FeedbackProps> = ({ name, rating, comment, role }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm h-full p-6">
      <div className="space-y-1.5">
        <StarRating rating={rating} />
        <h3 className="text-2xl font-semibold leading-none tracking-tight">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
      <div className="pt-4">
        <p className="text-gray-600">{comment}</p>
      </div>
    </div>
  );
};

const FeedbackCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(feedbacks.length / itemsPerSlide);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const getVisibleFeedbacks = () => {
    const start = currentIndex * itemsPerSlide;
    return feedbacks.slice(start, start + itemsPerSlide);
  };

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A satisfação de nossos clientes é nossa maior prioridade
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {getVisibleFeedbacks().map((feedback, index) => (
                  <div key={index} className="px-2">
                    <FeedbackCard
                      name={feedback.name}
                      rating={feedback.rating}
                      comment={feedback.comment}
                      role={feedback.role}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button 
              onClick={handlePrev}
              className="mx-2 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Anterior</span>
            </button>
            <button 
              onClick={handleNext}
              className="mx-2 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Próximo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCarousel;

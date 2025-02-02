type CardProps = {
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-teal-20 left-0 w-full md:w-[600px] lg:w-[800px] 2xl:w-[900px] h-auto md:h-[500px] lg:h-[694px] md:p-16 lg:p-44 2xl:p-56">
      <h2 className="text-[52px] font-semibold text-gray-800 pb-10">{title}</h2>
      <p className="mt-4 text-3xl text-gray-600">{description}</p>
    </div>
  );
};

export default Card;

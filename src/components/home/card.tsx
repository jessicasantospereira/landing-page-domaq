type CardProps = {
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
     <div className="bg-white p-6 md:p-10 lg:p-16 rounded-lg shadow-md w-full md:max-w-[600px]">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 pb-4 md:pb-6">{title}</h2>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-600">{description}</p>
    </div>
  );
};

export default Card;

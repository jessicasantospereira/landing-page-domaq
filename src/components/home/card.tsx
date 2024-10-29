type CardProps = {
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-teal-20 mt-[-100px] left-0 w-[900px] h-[694px] p-56">
      <h2 className="text-[52px] font-semibold text-gray-800 pb-10">{title}</h2>
      <p className="mt-4 text-3xl text-gray-600">{description}</p>
    </div>
  );
};

export default Card;

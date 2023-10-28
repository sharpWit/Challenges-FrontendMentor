import "./featuresCard.scss";

interface FeaturesCardProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({ id, title, children }) => {
  return (
    <section className="card" id={id}>
      <div className="card-header">{title}</div>
      <div>{children}</div>
    </section>
  );
};

export default FeaturesCard;

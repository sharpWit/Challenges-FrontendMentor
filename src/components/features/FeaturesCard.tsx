import "./featuresCard.scss";

interface FeaturesCardProps {
  title: string;
  children: React.ReactNode;
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({ title, children }) => {
  return (
    <div className="card divide-y-2">
      <div className="card-header">{title}</div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default FeaturesCard;

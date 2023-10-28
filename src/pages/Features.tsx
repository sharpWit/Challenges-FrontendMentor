import FeaturesCard from "../components/features/FeaturesCard";
import QrCode from "../features/qrcode/QrCode";
import ResultsSummary from "../features/summary/ResultsSummary";

const Features = () => {
  return (
    <div className="snap-y snap-mandatory">
      <FeaturesCard title="QR Code" id="qrcode">
        <QrCode />
      </FeaturesCard>
      <FeaturesCard title="Results and Summary" id="resultsAndSummary">
        <ResultsSummary />
      </FeaturesCard>
    </div>
  );
};

export default Features;

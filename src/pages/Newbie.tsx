import FeaturesCard from "../components/features/FeaturesCard";
import QrCode from "../features/qrcode/QrCode";
import ResultsSummary from "../features/summary/ResultsSummary";

const Newbie = () => {
  return (
    <section className=" flex flex-col items-center gap-6">
      <FeaturesCard title="QR Code">
        <QrCode />
      </FeaturesCard>
      <FeaturesCard title="Results and Summary">
        <ResultsSummary />
      </FeaturesCard>
    </section>
  );
};

export default Newbie;

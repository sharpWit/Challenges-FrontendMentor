import QrCode from "./features/qrcode/QrCode";
import ResultsSummary from "./features/summary/ResultsSummary";

const Newbie = () => {
  return (
    <section className=" flex flex-col items-center gap-6">
      <QrCode />
      <ResultsSummary />
    </section>
  );
};

export default Newbie;

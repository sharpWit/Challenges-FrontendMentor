import "./resultsSummary.scss";
import data from "../../../constants/data.json";
import FeaturesCard from "../../../components/features/FeaturesCard";

const ResultsSummary = () => {
  return (
    <FeaturesCard title="Results and Summary" id="resultsAndSummary">
      <div className="summaryContainer">
        <div className="result">
          <div className="sectionTop">
            <h2 className="firstTitle">Your Result</h2>
            <div className="circle">
              <span className="firstSpan">76</span>
              <span className="secondSpan">of 100</span>
            </div>
          </div>
          <div className="sectionBottom">
            <h1 className="secondTitle">Great</h1>
            <p className="disc">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>

        <div className="summary">
          <h2 className="title">Summary</h2>
          {data.map((item) => (
            <div className={`items bg-${item.color}`} key={item.category}>
              <div className="icon">
                <img src={item.icon} alt="" />
              </div>
              <h3 className={`thirdtitle bg-${item.color}`}>{item.category}</h3>
              <div className="scores">
                {item.score}
                <span className="cent"> / 100</span>
              </div>
            </div>
          ))}
          <button className="btn">Continue</button>
        </div>
      </div>
    </FeaturesCard>
  );
};

export default ResultsSummary;

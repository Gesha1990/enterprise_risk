import "./styles.css";

const CalculatedRisk = () => {
  let risks = JSON.parse(localStorage.getItem("risks"));
  const uniqueRisks = [...new Set(risks.map((item) => item.kindsRisk))];
  return (
    <div>
      <h1>Вираховані ризики</h1>
      {risks && (
        <div className="riskTable">
          <div className="riskWrapper">
            <div className="riskTitle">Вид ризику</div>
            <div className="riskTitle">Ступін ризику</div>
          </div>
          {uniqueRisks.map((riskName) => {
            const risksByName = risks.filter(
              (risk) => risk.kindsRisk === riskName
            );
            const countOfRisks = risksByName.reduce(
              (accumulator, currentRisk) => {
                accumulator += currentRisk.degreeOfRisk;
                return accumulator;
              },
              0
            );
            return (
              <div className="riskWrapper">
                <div className="riskCell">{riskName}</div>
                <div className="riskCell">{countOfRisks}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CalculatedRisk;

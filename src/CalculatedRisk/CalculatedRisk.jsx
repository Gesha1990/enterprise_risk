import "./styles.css";

const CalculatedRisk = () => {
  let risks = JSON.parse(localStorage.getItem("risks"));
  const risksTypes =  [...new Set(risks.map((item) => item.area_risk_occurrence))];
  return (
    <div>
      <h1>Інтегральні кофіцієнти ризиків</h1>
      {risks && (
        <div className="riskTable">
          <div className="riskWrapper">
            <div className="riskTitle">Сфера виникнення ризику</div>
            <div className="riskTitle">Ступінь ризику</div>
          </div>
          {risksTypes.map((riskName) => {
            const risksByName = risks.filter(
              (risk) => risk.area_risk_occurrence === riskName
            );
            const countOfRisks = risksByName.reduce(
              (accumulator, currentRisk) => {
                accumulator += currentRisk.degreeOfRisk;
                return accumulator;
              },
              0
            ) / risksByName.length;

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

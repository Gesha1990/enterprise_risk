import {Table } from 'antd'
import "./styles.css";

const RisksData = () => {
    let risks = JSON.parse(localStorage.getItem('risks'));
    const columns = [
        {
            title: 'Тип ризику',
            dataIndex: 'typeRisk',
            key: 'typeRisk',
          },
        {
          title: 'Сфера виникнення ризику',
          dataIndex: 'area_risk_occurrence',
          key: 'area_risk_occurrence',
        },
      
        {
          title: 'Вид ризику',
          dataIndex: 'kindsRisk',
          key: 'kindsRisk',
        },
        {
            title: 'Ступінь ризику (Шкала ризику від 0-10)',
            dataIndex: 'degreeOfRisk',
            key: 'degreeOfRisk',
          },
          {
            title: 'Інструмент ризик менеджменту',
            dataIndex: 'riskManagementTool',
            key: 'riskManagementTool',
          },
      ];
  return (
    <div>
      <h1>Ризики</h1>
      <Table dataSource={risks} columns={columns} />
    </div>
  );
};
export default RisksData;
import {Table,Button, } from 'antd'
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
      const clearData = ()=>{
        localStorage.removeItem('risks');
        window.location.reload(false);
      }
  return (
    <div>
      <div className='titleWrapper'><h1>Виведення даних про ризики</h1><div><Button type="primary" onClick={clearData} disabled={!risks}>Видалити всі ризики</Button></div></div>
      <Table dataSource={risks} columns={columns} />
    </div>
  );
};
export default RisksData;
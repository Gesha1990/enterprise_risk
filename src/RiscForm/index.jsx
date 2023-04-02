import React, { useState } from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { Select } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import {
  typesRisk,
  innter_area_risk_occurrence,
  external_area_risk_occurrence,
} from "./const";
import "./styles.css";

const { Option } = Select;
const { TextArea } = Input;

const RiscForm = () => {
  const [type, setType] = useState("");
  const [areaRiskOccurrence, setRiskOccurrence] = useState("");
  const [form] = Form.useForm();
  const onFinish = (data) => {
          let risks = JSON.parse(localStorage.getItem('risks'));
            if(risks){
            localStorage.setItem('risks', JSON.stringify([...risks,data]))
          }else{
            localStorage.setItem('risks', JSON.stringify([data]))
          }
        
    form.resetFields()
    alert('Ризик успішно створено!')
  };
  const handleChangeRiskOccurrence = (val) => {
    setRiskOccurrence(val);
  };
  const types = {
    внутрішній: () => {
      return (
        <Form.Item
          label="Сфера виникнення ризику"
          name="area_risk_occurrence"
          rules={[{ required: true, message: "Поле пасада обов'язкове!" }]}
        >
          <Select
            onChange={() => {}}
            suffixIcon={<CaretDownOutlined />}
            onChange={handleChangeRiskOccurrence}
          >
            {innter_area_risk_occurrence.map((optionValue) => (
              <Option key={optionValue} value={optionValue}>
                {optionValue}
              </Option>
            ))}
          </Select>
        </Form.Item>
      );
    },
    зовнішній: () => {
      return (
        <div className="externalWrapper">
          <Form.Item
            label="Сфера виникнення ризику"
            name="area_risk_occurrence"
            rules={[{ required: true, message: "Поле пасада обов'язкове!" }]}
          >
            <Select
              onChange={() => {}}
              suffixIcon={<CaretDownOutlined />}
              onChange={handleChangeRiskOccurrence}
            >
              {external_area_risk_occurrence.map((optionValue) => (
                <Option key={optionValue} value={optionValue}>
                  {optionValue}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </div>
      );
    },
  };
  const handleChangeTypes = (val) => {
    setType(val);
  };
  return (
    <Form
      layout="vertical"
      name="new"
      form={form}
      onFinish={onFinish}
      className="riskForm"
    >
      <Form.Item
        label="Тип ризику"
        name="typeRisk"
        rules={[{ required: true, message: "Поле пасада обов'язкове!" }]}
      >
        <Select
          onChange={() => {}}
          suffixIcon={<CaretDownOutlined />}
          onChange={handleChangeTypes}
        >
          {typesRisk.map((optionValue) => (
            <Option key={optionValue} value={optionValue}>
              {optionValue}
            </Option>
          ))}
        </Select>
      </Form.Item>
      {type && types[type]()}
      <Form.Item>
        {areaRiskOccurrence &&
        <div>
            <Form.Item
              label="Вид ризику"
              name="kindsRisk"
              rules={[{ required: true, message: "Поле обов'язкове" }]}
            >
              <Input type="text" placeholder="Прізвище та ім'я" />
            </Form.Item>
            <Form.Item
              name="degreeOfRisk"
              label="Ступінь ризику (Шкала ризику від 0-10)"
              rules={[{ required: true, message: "Поле обов'язкове" }]}
            >
              <InputNumber min={0} max={10} placeholder="Ступінь ризику" />
            </Form.Item>
            <Form.Item
              name="riskManagementTool"
              label="Інструмент ризик менеджменту"
              rules={[{ required: true, message: "Поле обов'язкове" }]}
            >
              <TextArea rows={4} />
            </Form.Item>
          </div>}
        <Button type="primary" htmlType="submit">
          Sumbit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RiscForm;

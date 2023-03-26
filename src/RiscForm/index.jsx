import React, { useState } from "react";
import { FormInstance, Form, Input, InputNumber, Button } from "antd";
import { Select, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import { positionList, riskType, generalDirector } from "./const";
import "./styles.css";

const { Option } = Select;

const RiscForm = ({ form, initialValues = {} }) => {
  const [position, setPosition] = useState("");
  const navigate = useNavigate();

  const onFinish = (data) => {
    if (data.position !== generalDirector) {
      console.log({ ...data, riskType: riskType[data.position] });
      navigate("/overview");
    } else {
      console.log(data);
      navigate("/overview");
    }
  };
  const positionFields = {
    "Генеральний директор": () => {
      return (
        <Form.Item
          className="field"
          name="riskType"
          label="Тип ризику"
          rules={[{ required: true, message: "Поле обов'язкове" }]}
        >
          <Input type="text" placeholder="Тип ризику" />
        </Form.Item>
      );
    },
    "Начальник фінансового відділу": () => {
      return (
        <Form.Item className="field" name="riskType" label="Тип ризику">
          Фінансові ризики
        </Form.Item>
      );
    },
    "Начальник логістичного відділу": () => {
      return (
        <Form.Item className="field" name="riskType" label="Тип ризику">
          Логістичні ризики
        </Form.Item>
      );
    },
    "Начальник технічного відділу": () => {
      return (
        <Form.Item className="field" name="riskType" label="Тип ризику">
          Технічні ризики
        </Form.Item>
      );
    },
    "Начальник інформаційного відділу": () => {
      return (
        <Form.Item className="field" name="riskType" label="Тип ризику">
          Інформаційні ризики
        </Form.Item>
      );
    },
  };
  const handleChange = (val) => {
    setPosition(val);
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
        label="Посада"
        name="position"
        rules={[{ required: true, message: "Поле пасада обов'язкове!" }]}
      >
        <Select
          onChange={() => {}}
          suffixIcon={<CaretDownOutlined />}
          onChange={handleChange}
        >
          {positionList.map((optionValue) => (
            <Option key={optionValue} value={optionValue}>
              {optionValue}
            </Option>
          ))}
        </Select>
      </Form.Item>
      {position && (
        <div className="riskWrapper">
          {positionFields[position]()}
          <Form.Item
            className="field"
            name="degreeOfRisk"
            label="Ступінь ризику (Шкала ризику від 1-10)"
            rules={[{ required: true, message: "Поле обов'язкове" }]}
          >
            <InputNumber min={0} max={10} placeholder="Ступінь ризику" />
          </Form.Item>
          <Form.Item
            className="field"
            label="Прізвище та ім'я"
            name="fullName"
            rules={[{ required: true, message: "Поле обов'язкове" }]}
          >
            <Input type="text" placeholder="Прізвище та ім'я" />
          </Form.Item>
          <Form.Item
            className="field"
            label="Назва проекту"
            name="projectName"
            rules={[{ required: true, message: "Поле обов'язкове" }]}
          >
            <Input type="text" placeholder="Назва проекту" />
          </Form.Item>
        </div>
      )}
      <Form.Item>
        <Button type="primary" htmlType="submit" disabled={!position}>
          Sumbit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RiscForm;

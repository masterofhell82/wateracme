import React from "react";

import { Table, Divider, Tag } from "antd";

const columns = [
  { title: "N° #", dataIndex: "id", key: "id" },
  {
    title: "Periodo",
    dataIndex: "period",
    key: "period"
  },
  {
    title: "Medición",
    dataIndex: "measure",
    key: "measure"
  },
  {
    title: "Consumo",
    dataIndex: "intake",
    key: "intake"
  },
  {
    title: "Monto",
    dataIndex: "amount",
    key: "amount"
  },
  {
    title: "Cancelado",
    key: "is_paid",
    dataIndex: "is_paid",
    render(is_paid) {
      const color = is_paid === true ? "green" : "volcano";
      const text = is_paid === true ? "Pagado" : "Por Pagar";
      return <Tag color={color}>{text}</Tag>;
    }
  },
  {
    title: "Action",
    key: "action",
    render() {
      return (
        <span>
          <a>Pagos</a>
          <Divider type="vertical" />
          <a>Pagar</a>
        </span>
      );
    }
  }
];

const Intake = prosp => {
  return <Table columns={columns} dataSource={prosp.data} />;
};

export default Intake;

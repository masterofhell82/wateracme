import React from "react";
// import { List, Avatar, Icon } from "antd";

import { Table, Divider } from "antd";

const columns = [
  { title: "#", dataIndex: "id", key: "id" },
  { title: "Cedula", dataIndex: "card_id", key: "card_id" },
  { title: "Nombres", dataIndex: "names", key: "names" },
  { title: "Apellidos", dataIndex: "last_names", key: "lastnames" },
  { title: "Dirección", dataIndex: "address", key: "address" },
  { title: "Teléfono", dataIndex: "phone", key: "phone" },
  {
    title: "Acción",
    render: item => (
      <span>
        <a href={`/clients/${item.id}/${item.card_id}`}>Facturar</a>
        <Divider type="vertical" />
        <a href={`/intake/${item.card_id}`}>Deudas</a>
        <Divider type="vertical" />
        <a href={`/intake/${item.card_id}`}>Historial</a>
      </span>
    )
  }
];

const Clients = prosp => {
  return (
    <Table
      rowKey={record => prosp.data.id}
      columns={columns}
      dataSource={prosp.data}
    />
  );
};

export default Clients;

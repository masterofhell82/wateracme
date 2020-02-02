import React from "react";

import { Form, Input, Button } from "antd";

const IntakeForm = prosp => {
  return (
    <div>
      <Form layout="inline">
        <Form.Item label="Cliente=">{prosp.data.card_id}</Form.Item>
        <Form.Item label="Medición Anterior =">002356465</Form.Item>
        <Form.Item label="Medicion">
          <Input placeholder="newMeasure" name="" type="number" required />
        </Form.Item>
        <Form.Item label="Monto=">002356465</Form.Item>
        <Form.Item label="Pago">
          <Input type="number" required />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Guardar</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default IntakeForm;

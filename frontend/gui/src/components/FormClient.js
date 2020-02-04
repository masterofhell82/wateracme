import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

class CustomForm extends React.Component {
  handleFormSubmit = (e, requestType, clientID) => {
    e.preventDefault();

    const names = e.target.elements.names.value;
    const lastnames = e.target.elements.lastnames.value;

    switch (requestType) {
      case "post":
        return axios
          .put("http://127.0.0.1:8000/api/clients/", {
            names: names,
            lastnames: lastnames
          })
          .then(res => console.log(res))
          .catch(error => console.log(error));
      case "put":
        return axios
          .put(`http://127.0.0.1:8000/api/clients/${clientID}`, {
            names: names,
            lastnames: lastnames
          })
          .then(res => console.log(res))
          .catch(error => console.log(error));
    }

    console.log(names, lastnames);
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={event =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.clientID
            )
          }
        >
          <Form.Item label="Nombres">
            <Input name="names" />
          </Form.Item>
          <Form.Item label="Apellidos">
            <Input name="lastnames" />
          </Form.Item>
          <Form.Item label="Cedula de Identidad">
            <Input name="card_id" />
          </Form.Item>
          <Form.Item label="Cedula de Identidad">
            <Input name="card_id" />
          </Form.Item>
          <Form.Item label="Region">
            <Input name="region_id" />
          </Form.Item>
          <Form.Item label="Provincia">
            <Input name="provincia_id" />
          </Form.Item>
          <Form.Item label="Comuna">
            <Input name="comuna_id" />
          </Form.Item>
          <Form.Item label="Teléfono">
            <Input name="phone_id" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              {this.props.bntText}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForm;

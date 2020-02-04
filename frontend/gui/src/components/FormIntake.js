import React from "react";
import axios from "axios";
import moment from "moment";

import { Form, Input, Button } from "antd";

class IntakeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: 0,
      cost: {},
      amount: { price: 0, intake: 0 }
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      clientId: eval(props.data)
    });
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/cost/").then(res => {
      this.setState({
        cost: res.data
      });
    });
  }

  handleNumberChange = (e, lastMeasure) => {
    let amount = 0.0;
    let intake = 0;

    // Se Comprenden que los valores deben ser enteros
    const newMeasure = parseInt(e.target.value || 0, 10);

    if (newMeasure > lastMeasure) {
      intake = newMeasure - lastMeasure;
      amount = intake * parseFloat(this.state.cost[1].tariff);
    } else {
      amount = parseFloat(this.state.cost[0].tariff);
    }

    this.setState({
      amount: {
        price: eval(amount),
        intake: eval(intake)
      }
    });
  };

  handleFormSubmit = (e, clientID) => {
    e.preventDefault();

    let dataIntake = {
      client_id: clientID,
      period: moment().format("DD-MM-YYYY"),
      measure: e.target.elements.newMeasure.value,
      intake: this.state.amount.intake,
      is_paid:
        e.target.elements.paid.value == this.state.amount.price ? true : false,
      date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
      date_update: moment().format("DD-MM-YYYY hh:mm:ss")
    };

    console.log(dataIntake);
    //Se realiza el envio de la data a la base de datos.
    // axios.put("http://127.0.0.1:8080/api/intake/", data)
    //   .then(res => console.log(res))
    //   .catch(error => console.log(error));
  };

  //
  render() {
    const intake = this.props.data;
    return (
      <div>
        <Form
          layout="inline"
          onSubmit={event => this.handleFormSubmit(event, intake.cardId)}
        >
          <Form.Item>
            <strong> Medición Anterior = </strong> {intake.measure}
          </Form.Item>
          <Form.Item label="Medicion">
            <Input
              placeholder="newMeasure"
              name="newMeasure"
              type="number"
              required
              onChange={event => this.handleNumberChange(event, intake.measure)}
            />
          </Form.Item>
          <Form.Item label="Consumo="> {this.state.amount.intake} m3</Form.Item>
          <Form.Item label="Monto="> $ {this.state.amount.price} </Form.Item>
          <Form.Item label="Pago">
            <Input type="number" name="paid" type="number" required />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Guardar
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default IntakeForm;

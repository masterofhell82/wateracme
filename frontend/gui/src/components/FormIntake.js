import React from "react";
import axios from "axios";

import { Form, Input, Button } from "antd";

class IntakeForm extends React.Component {
 

  state = {
    clientId: 0,
    lastIntake: {measure : 0},
    cost: {},
    amount: { price: 0, intake: 0 }
  };

  componentWillReceiveProps(props){
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
    const clientID = this.state.clientId;
    axios.get(`http://127.0.0.1:8000/api/intake/?card_id=${clientID}`).then(res => {
      this.setState({
        lastIntake:{
          measure: res.data[0].measure 
        } 
      });
    });
  }

  handleNumberChange = (e) => {
    let amount = 0.0;
    let intake = 0;
    let last_measure = this.state.lastIntake.measure;
    // Se Comprenden que los valores deben ser enteros
    const newMeasure = parseInt(e.target.value || 0, 10);

    if (newMeasure > last_measure) {
      intake = newMeasure - last_measure;
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

  handleFormSubmit = (e, requestType, clientID) => {
    e.preventDefault();
  };

  //
  render() {
    const user = this.props.data;

    return (
      <div>
        <Form layout="inline">
          <Form.Item>
            <strong> Medición Anterior = </strong> {this.state.lastIntake.measure}
          </Form.Item>
          <Form.Item label="Medicion">
            <Input
              placeholder="newMeasure"
              name="newMeasure"
              type="number"
              required
              onChange={this.handleNumberChange}
            />
          </Form.Item>
          <Form.Item label="Consumo="> {this.state.amount.intake} m3</Form.Item>
          <Form.Item label="Monto="> $ {this.state.amount.price} </Form.Item>
          <Form.Item label="Pago">
            <Input type="number" required />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Guardar</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default IntakeForm;

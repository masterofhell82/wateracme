import React from "react";
import axios from "axios";

import { Card, Row, Col } from "antd";
import IntakeForm from "../components/FormIntake";
import SearchForm from "../components/FormSearchClient";

class ClientDetail extends React.Component {
  state = {
    lastIntake: { measure: 0 },
    client: {}
  };

  componentDidMount() {
    const clientID = this.props.match.params.clientID;
    axios.get(`http://127.0.0.1:8000/api/clients/${clientID}/`).then(res => {
      this.setState({
        client: res.data
      });
    });
    const clientId = this.props.match.params.cardId;
    axios
      .get(`http://127.0.0.1:8000/api/intake/?card_id=${clientId}`)
      .then(res => {
        this.setState({
          lastIntake: {
            measure: res.data[0].measure
          }
        });
      })
      .catch(error =>
        this.setState({
          lastIntake: {
            measure: 0
          }
        })
      );
  }

  render() {
    let obj = {
      measure: this.state.lastIntake.measure,
      cardId: this.state.client.card_id,
      props: this.props
    };
    return (
      <div>
        <Row>
          <Col span={8} offset={16}>
            <SearchForm></SearchForm>
          </Col>
        </Row>
        <Card title="Facturar">
          <strong>
            Nombres: {this.state.client.last_names}, {this.state.client.names}{" "}
            <br />
            Cliente: {this.state.client.card_id}
          </strong>
          <br />
          <div>
            <IntakeForm data={obj}></IntakeForm>
          </div>
        </Card>
      </div>
    );
  }
}

export default ClientDetail;

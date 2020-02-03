import React from "react";
import axios from "axios";

import { Card, Row, Col } from "antd";
import IntakeForm from "../components/FormIntake";
import SearchForm from "../components/FormSearchClient";

class ClientDetail extends React.Component {
  state = {
    client: {}
  };

  componentDidMount() {
    const clientID = this.props.match.params.clientID;
    axios.get(`http://127.0.0.1:8000/api/clients/${clientID}/`).then(res => {
      this.setState({
        client: res.data
      });
    });
  }

  render() {
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
            <IntakeForm data={this.state.client.card_id}></IntakeForm>
          </div>
        </Card>
      </div>
    );
  }
}

export default ClientDetail;

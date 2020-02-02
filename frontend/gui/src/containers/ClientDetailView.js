import React from "react";
import axios from "axios";

import { Card, Row, Col } from "antd";
import IntakeForm from "../components/FormIntake";
import SearchForm from "../components/FormSearchClient";

class ClientDetail extends React.Component {
  state = {
    cost: {},
    client: {},
    last_inteke: {}
  };

  componentDidMount() {
    const clientID = this.props.match.params.clientID;
    axios.get(`http://127.0.0.1:8000/api/clients/${clientID}/`).then(res => {
      this.setState({
        client: res.data
      });
    });

    axios.get("http://127.0.0.1:8000/api/cost/").then(res => {
      this.setState({
        cost: res.data
      });
      console.log(this.state.cost);
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
          </strong>
          <br />
          <div>
            <IntakeForm data={this.state.client}></IntakeForm>
          </div>
        </Card>
      </div>
    );
  }
}

export default ClientDetail;

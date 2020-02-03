import React from "react";
import axios from "axios";

import { Card } from "antd";
import Intake from "../components/IntekeList";

class IntekeDetail extends React.Component {
  state = {
    last_intake: [],
    intake: []
  };

  componentDidMount() {
    const cardID = this.props.match.params.cardID;
    axios
      .get(`http://127.0.0.1:8000/api/intake/?client_id=${cardID}`)
      .then(res => {
        this.setState({
          last_intake: res.data
        });
      });
  }

  render() {
    return (
      <div>
        <Card title="Facturación">
          <Intake data={this.state.last_intake}></Intake>
        </Card>
      </div>
    );
  }
}

export default IntekeDetail;

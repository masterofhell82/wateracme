import React from "react";
import axios from "axios";

import Clients from "../components/ClientList";
// import CustomForm from "../components/FormClient";

class ClientList extends React.Component {
  state = {
    clients: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/clients/").then(res => {
      this.setState({
        clients: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <Clients data={this.state.clients}></Clients>
        {/* <br />
        <h2>Agregar una nuevo Usuario</h2>
        <CustomForm
          requestType="post"
          clientID={null}
          bntText="Agregar"
        ></CustomForm> */}
      </div>
    );
  }
}

export default ClientList;

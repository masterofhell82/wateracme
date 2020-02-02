import React from "react";
import axios from "axios";

import { Form, Input, Button, Radio } from "antd";

class SearchForm extends React.Component {
  state = {
    client: {}
  };

  handleFormSubmit = (e, requestType) => {
    e.preventDefault();
    const search = e.target.elements.search.value;
    console.log(search);
  };
  render() {
    const { size, value } = this.props;
    return (
      <div>
        <Form layout="inline" onSubmit={event => this.handleFormSubmit(event)}>
          <Form.Item>
            <Input placeholder="Buscar" name="search" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Buscar
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default SearchForm;

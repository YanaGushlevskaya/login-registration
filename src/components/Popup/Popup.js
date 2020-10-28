import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import './Popup.scss';

export class Popup extends Component {

  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {

    return (
      <>
        <Button onClick={this.showModal}>
          {this.props.title}
        </Button>
        <Modal
          title={this.props.popupHeader}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          {this.props.popupContent}
        </Modal>
      </>
    );
  }

}

import { Modal, Button } from "antd";
import { MedicineBoxTwoTone } from "@ant-design/icons";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { addSoin } from "../actions/SoinAction";
import React, { Component } from "react";

class ModalSoin extends Component {
  state = {
    loading: false,
    visible: false,
    dateSoin: "",
    traitementSoin: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onChangedate = (date, dateString) => {
    this.setState({ dateSoin: dateString });
  };
  // componentWillReceiveProps(nextProps) {
  //   this.setState(nextProps.save);
  // }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <MedicineBoxTwoTone onClick={this.showModal} />
        <Modal
          visible={visible}
          title="Ajout Suivie Patient"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button
              key="Ajout"
              type="primary"
              loading={loading}
              onClick={(e) => {
                e.preventDefault();
                this.props.addSoin(this.state);
                this.setState({
                  dateSoin: "",
                  traitementSoin: "",
                });
              }}
            >
              Ajouter
            </Button>,
          ]}
        >
          <form style={{ display: "flex", flexWrap: "wrap" }}>
            <TextField
              id="date"
              name="dateSoin"
              label="Date de Soin"
              type="date"
              defaultValue="2017-05-24"
              value={this.state.dateSoin}
              style={{ width: "200px" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-basic"
              name=" traitementSoin"
              label="Taitement Soin"
              type="text"
              value={this.state.traitementSoin}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    soin: state.soin,
  };
};
export default connect(mapStateToProps, { addSoin })(ModalSoin);

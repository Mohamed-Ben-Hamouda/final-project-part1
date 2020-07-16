import { Modal, Button } from "antd";
import { MedicineBoxTwoTone } from "@ant-design/icons";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { addTestCovid } from "../actions/TestCovidAction";
import React, { Component } from "react";

class ModalTestCovid extends Component {
  state = {
    loading: false,
    visible: false,
    dateTest: "",
    testName: "",
    resultat: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onChangedate = (date, dateString) => {
    this.setState({ dateTest: dateString });
  };

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
          title="Ajout Test Covid19"
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
                  dateTest: "",
                  nomTest: "",
                  resultat: "",
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
              name="dateTest"
              label="Date de Test"
              type="date"
              value={this.state.dateTest}
              style={{ width: "200px" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-basic"
              name="nomTest"
              label="Nom du Test"
              type="text"
              value={this.state.nomTest}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-basic"
              name="resultat"
              label="Résultat du Test"
              type="text"
              value={this.state.resultat}
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
    tetCovid: state.testCovid,
  };
};
export default connect(mapStateToProps, { addTestCovid })(ModalTestCovid);

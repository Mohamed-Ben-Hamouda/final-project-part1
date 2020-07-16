import { Modal, Button } from "antd";
import { MedicineBoxTwoTone } from "@ant-design/icons";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { addSuivie } from "../actions/SuivieAction";
import React from "react";

class ModalSuivie extends React.Component {
  state = {
    loading: false,
    visible: false,
    dateSuivie: "",
    temperature: "",
    respiration: "",
    pulsation: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onChangedate = (date, dateString) => {
    this.setState({ dateSuivie: dateString });
    // console.log({ date, dateString });
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
                this.props.addSuivie(this.state);
                this.setState({
                  dateSuivie: "",
                  temperature: "",
                  respiration: "",
                  pulsation: "",
                });
              }}
            >
              Submit
            </Button>,
          ]}
        >
          <form style={{ display: "flex", flexWrap: "wrap" }}>
            <TextField
              id="date"
              name="dateSuivie"
              label="Date de Suivie"
              type="date"
              defaultValue="2017-05-24"
              value={this.state.dateSuivie}
              style={{ width: "200px" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
          <TextField
            id="standard-number"
            name="temperature"
            label="Température"
            type="number"
            value={this.state.temperature}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <form style={{ width: "25ch" }} noValidate autoComplete="off">
            <TextField
              name="respiration"
              id="outlined-basic"
              label="Réspiration"
              variant="outlined"
              value={this.state.respiration}
            />
            <TextField
              name="pulsation"
              id="outlined-basic"
              label="Pulsation"
              variant="outlined"
              value={this.state.pulsation}
            />
          </form>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    suivie: state.suivie,
  };
};
export default connect(mapStateToProps, { addSuivie })(ModalSuivie);

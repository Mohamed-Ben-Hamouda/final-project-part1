import React, { Component } from "react";
import {
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import ModalSuivie from "./ModalSuivie";
import { connect } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Select } from "antd";
import { loadInfermier } from "../actions/AuthAction";
import ModalPrescrip from "./ModalPrescrip";
import PrescripPatientItem from "./PrescripPatientItem";
const { Meta } = Card;

const { Option } = Select;
class PrescripPatient extends Component {
  state = {
    patient: null,
    infermier: null,
    medecin: null

  };
  componentDidMount() {

  }
  handleChange = (e) => {
    console.log(e)
    this.setState({

      patient: this.props.patient.patient.find((el) => el._id === e),
    });
  };


  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);

  }

  render() {
    return (
      <div className="card cadd">
        <div>
          {/* <CircularProgress color="secondary" /> */}


          <Select
            name="nom"
            defaultValue="--Nom Patient--"
            style={{ width: "100%" }}
            onChange={this.handleChange} style={{ textTransform: "capitalize" }}
          >
            {this.props.patient.patient &&
              this.props.patient.patient.map((el) => (
                <Option value={el._id} style={{ textTransform: "capitalize" }}> {el.nom + "  " + el.prenom}</Option>
              ))}
          </Select>
          <br />
          <br />
          <br />
          <br />



          <ModalPrescrip patient={this.state.patient} />

          <br />
          <br />
        </div>
        <div className="d-flex flex-wrap fl">
          {this.state.patient &&
            this.state.patient.prescription.map((el) => (
              <PrescripPatientItem data={el} patient={this.state.patient} />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    patient: state.patient,
    infermier: state.infermier,
  };
};
export default connect(mapStateToProps, { loadInfermier })(PrescripPatient);

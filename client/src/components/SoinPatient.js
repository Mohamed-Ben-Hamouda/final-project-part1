import React, { Component } from "react";
import {
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import ModalSuivie from "./ModalSuivie";
import { connect } from "react-redux";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Select } from "antd";
import { loadInfermier } from "../actions/AuthAction";
import ModalSoin from "./ModalSoin";
const { Meta } = Card;

const { Option } = Select;
class SoinPatient extends Component {
  state = {
    patient: null,
  };
  componentWillMount() {
    this.props.loadInfermier();
  }
  handleChange = (value) => {
    this.setState({
      patient: this.props.auth.user.patient.find((el) => el._id === value),
    });
  };

  render() {
    return (
      <div className="card">
        <div>
          <Select
            name="nom"
            defaultValue="--Nom Patient--"
            style={{ width: "100%" }}
            onChange={this.handleChange}
          >
            {this.props.auth.user.patient &&
              this.props.auth.user.patient.map((el) => (
                <Option value={el._id}>Mr: {el.nom + "  " + el.prenom}</Option>
              ))}
          </Select>
        </div>

        <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <SettingOutlined key="setting" />,
            <ModalSoin />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          {this.state.patient && (
            <Meta
              avatar={<Avatar src={this.state.patient.image} />}
              title={this.state.patient.nom + "  " + this.state.patient.prenom}
            />
          )}
          <CheckCircleTwoTone twoToneColor="#52c41a" /> Soin Patient
          <p>{this.state.patient.soin.dateSoin} </p>
          <p>{this.state.patient.soin.traitementSoin} </p>
        </Card>
        <footer style={{ textAlign: "center" }}>وزارة الصحة التونسية</footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, { loadInfermier })(SoinPatient);

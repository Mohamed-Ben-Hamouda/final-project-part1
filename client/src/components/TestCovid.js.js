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
import ModalTestCovid from "./ModalTestCovid";
const { Meta } = Card;

const { Option } = Select;
class TestCovid extends Component {
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
            <ModalTestCovid />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          {this.state.patient && (
            <Meta
              avatar={<Avatar src={this.state.patient.image} />}
              title={this.state.patient.nom + "  " + this.state.patient.prenom}
            />
          )}
          <CheckCircleTwoTone twoToneColor="#52c41a" /> Tests Covid19
          <p>{this.state.patient.soin.testName} </p>
          <p>{this.state.patient.soin.dateTest} </p>
          <p>{this.state.patient.soin.resultat} </p>
          {/* <CheckCircleTwoTone twoToneColor="#52c41a" />
          Suivie
          <p>{this.state.patient.soin.dateSuivie} </p>
          <p>{this.state.patient.soin.temperature} </p>
          <p>{this.state.patient.soin.respiration} </p>
          <p>{this.state.patient.soin.pulsation} </p> */}
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
export default connect(mapStateToProps, { loadInfermier })(TestCovid);

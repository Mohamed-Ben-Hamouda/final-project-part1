import React, { Component } from "react";
import { connect } from "react-redux";
import { Skeleton, Switch, Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Select } from "antd";
import { loadInfermier } from "../actions/AuthAction";
const { Meta } = Card;
const { Option } = Select;
class SuiviePatientItem extends Component {
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
      <div>
        <div className="inf">
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
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          {this.state.patient && (
            // <Skeleton avatar active>
            <Meta
              avatar={<Avatar src={this.state.patient.image} />}
              title={this.state.patient.nom + " " + this.state.patient.prenom}
              description={
                this.state.patient.cin +
                "  " +
                this.state.patient.dateEn +
                "  " +
                this.state.patient.email +
                "  " +
                this.state.patient.phone +
                "  " +
                this.state.patient.origin +
                "  " +
                this.state.patient.numChambre +
                "  " +
                this.state.patient.numLit +
                "  " +
                this.state.patient.etat +
                " ATCD " +
                this.state.patient.ATCD +
                "  " +
                this.state.patient.soin +
                "  " +
                this.state.patient.prescription +
                "  " +
                this.state.patient.suivie
              }
            />
            // </Skeleton>
          )}
        </Card>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, { loadInfermier })(SuiviePatientItem);
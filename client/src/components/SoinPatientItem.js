import React, { Component } from "react";
import ModalSoin from "./ModalSoin";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  SmileTwoTone,
  HeartTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";

const { Meta } = Card;

const SoinPatientItem = ({ data, patient }) => {
  return (
    <div className="d-flex flex-wrap fl">
      {data && (
        <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <SettingOutlined key="setting" />,
            <ModalSoin data={data} editMode={true} />,
          ]}
        >
          <Meta
            avatar={<Avatar src={patient.image} />}
            title={patient.nom + "  " + patient.prenom}
          />
          <br />
          <br />
          <div className="form">
            <div className="data">
              <h5>Date du Soin : </h5>
              <h6>{data.dateSoin} </h6>
            </div>

            <h5>Traitement du Soin : </h5>
            <h6>{data.traitementSoin} </h6>
          </div>
          {/* <SettingOutlined key="setting" />, */}

          {/* <EllipsisOutlined key="ellipsis" /> */}
          {/* <CheckCircleTwoTone twoToneColor="#52c41a" /> */}
        </Card>
      )}
    </div>
  );
};

export default SoinPatientItem;

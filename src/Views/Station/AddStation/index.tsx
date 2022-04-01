import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { StoreState } from "../../../models/reduxModels";
import { AddZones } from "../../../Stores/actions/zoneActions";
import StationAddView from "./StationAddView";



function AddStation({ AddZones }: AddZoneProps) {
  const history = useHistory();
  const submitData = (data: any) => {
    AddZones({
      payload: data,
      history: history,
    });
  };
  return <StationAddView submitData={submitData} />;
}

const mapStateToProps = (state: StoreState) => {
  return {};
};
const mapDispatchToProps = {
  AddZones,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStation);
interface AddZoneProps {
  AddZones?: any;
}
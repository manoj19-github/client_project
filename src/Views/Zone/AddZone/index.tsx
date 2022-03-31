import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { StoreState } from "../../../models/reduxModels";
import { AddZones } from "../../../Stores/actions/zoneActions";
import ZoneAddView from "./ZoneAddView";
import { useSnackbar } from "notistack";
function AddZone({ AddZones }: AddZoneProps) {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const submitData = (data: any) => {
    AddZones({
      payload: data,
      history: history,
      enqueueSnackbar: enqueueSnackbar,
    });
  };
  return <ZoneAddView submitData={submitData} />;
}

const mapStateToProps = (state: StoreState) => {
  return {};
};
const mapDispatchToProps = {
  AddZones,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddZone);
interface AddZoneProps {
  AddZones?: any;
}

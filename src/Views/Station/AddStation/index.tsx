import { useSnackbar } from "notistack";
import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { StoreState } from "../../../models/reduxModels";
import { ZoneList } from "../../../models/zoneModels";
import { AddStations } from "../../../Stores/actions/stationAction";
import StationAddView from "./StationAddView";

function AddStation({ AddStations, allzone }: AddZoneProps) {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const submitData = (data: any) => {
    AddStations({
      payload: data,
      history: history,
      enqueueSnackbar: enqueueSnackbar,
    });
  };
  return <StationAddView submitData={submitData} allzone={allzone} />;
}

const mapStateToProps = (state: StoreState) => {
  return {
    allzone: state.zone.zone_list,
  };
};
const mapDispatchToProps = {
  AddStations,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStation);
interface AddZoneProps {
  allzone: ZoneList[];
  AddStations?: any;
}

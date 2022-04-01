import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { StoreState } from "../../../models/reduxModels";
import { ZoneList } from "../../../models/zoneModels";
import { AddZones } from "../../../Stores/actions/zoneActions";
import StationAddView from "./StationAddView";

function AddStation({ AddZones, allzone }: AddZoneProps) {
  const history = useHistory();
  const submitData = (data: any) => {
    // AddZones({
    //   payload: data,
    //   history: history,
    // });
    console.log(data);
  };
  return <StationAddView submitData={submitData} allzone={allzone} />;
}

const mapStateToProps = (state: StoreState) => {
  return {
    allzone: state.zone.zone_list,
  };
};
const mapDispatchToProps = {
  AddZones,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddStation);
interface AddZoneProps {
  AddZones?: any;
  allzone: ZoneList[];
}

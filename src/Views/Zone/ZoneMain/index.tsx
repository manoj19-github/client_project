import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StoreState } from "../../../models/reduxModels";
import { ZoneList } from "../../../models/zoneModels";
import { DeleteZones, GetAllZones } from "../../../Stores/actions/zoneActions";
import ZoneMainView from "./ZoneMainView";
import { useSnackbar } from "notistack";
import { FiltreUpdateSuccessAction } from "../../../Stores/actions/stationAction";
import { useHistory } from "react-router-dom";
const ZoneMain = ({ GetAllZones, allzone, DeleteZones,FiltreUpdateSuccessAction }: ZoneProps) => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    GetAllZones();
  }, []);
  const Delete = (data: number) => {
    DeleteZones({
      payload: data,
      enqueueSnackbar: enqueueSnackbar,
    });
  };
  const gotoZone=(data: number)=>{
    FiltreUpdateSuccessAction(data)
    history.push(`/station/station-main`)
  }
  return <ZoneMainView allzone={allzone} Delete={Delete} gotoZone={gotoZone} />;
};

const mapStateToProps = (state: StoreState) => {
  return {
    allzone: state.zone.zone_list,
  };
};
const mapDispatchToProps = {
  GetAllZones,
  DeleteZones,
  FiltreUpdateSuccessAction
};

export default connect(mapStateToProps, mapDispatchToProps)(ZoneMain);
interface ZoneProps {
  GetAllZones?: any;
  allzone: ZoneList[];
  DeleteZones?: any;
  FiltreUpdateSuccessAction?: any
}

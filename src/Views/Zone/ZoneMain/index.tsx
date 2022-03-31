import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StoreState } from "../../../models/reduxModels";
import { ZoneList } from "../../../models/zoneModels";
import { DeleteZones, GetAllZones } from "../../../Stores/actions/zoneActions";
import ZoneMainView from "./ZoneMainView";
import { useSnackbar } from "notistack";
const ZoneMain = ({ GetAllZones, allzone, DeleteZones }: ZoneProps) => {
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
  return <ZoneMainView allzone={allzone} Delete={Delete} />;
};

const mapStateToProps = (state: StoreState) => {
  return {
    allzone: state.zone.zone_list,
  };
};
const mapDispatchToProps = {
  GetAllZones,
  DeleteZones,
};

export default connect(mapStateToProps, mapDispatchToProps)(ZoneMain);
interface ZoneProps {
  GetAllZones?: any;
  allzone: ZoneList[];
  DeleteZones?: any;
}

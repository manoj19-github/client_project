import { useSnackbar } from "notistack";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StoreState } from "../../../models/reduxModels";
import { StationList } from "../../../models/stationModel";
import { ZoneList } from "../../../models/zoneModels";
import {
  DeleteStations,
  GetAllStations,
} from "../../../Stores/actions/stationAction";
import StationMainView from "./StationMainView";

const StationMain = ({
  allstation,
  GetAllStations,
  allzone,
  DeleteStations,
}: StationProps) => {
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    GetAllStations();
  }, []);
  const Delete = (data: number) => {
    DeleteStations({
      payload: data,
      enqueueSnackbar: enqueueSnackbar,
    });
  };
  return (
    <StationMainView
      allstation={allstation}
      allzone={allzone}
      Delete={Delete}
    />
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    allstation: state.station.station_list,
    allzone: state.zone.zone_list,
  };
};
// export default (StationMain);
const mapDispatchToProps = {
  GetAllStations,
  DeleteStations,
};

export default connect(mapStateToProps, mapDispatchToProps)(StationMain);
interface StationProps {
  GetAllStations?: any;
  allstation: StationList[];
  allzone: ZoneList[];
  DeleteStations?: any;
}

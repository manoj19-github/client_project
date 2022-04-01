import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StoreState } from "../../../models/reduxModels";
import { StationList } from "../../../models/stationModel";
import { ZoneList } from "../../../models/zoneModels";
import { GetAllStations } from "../../../Stores/actions/stationAction";
import StationMainView from "./StationMainView";

const StationMain = ({ allstation, GetAllStations }: StationProps) => {
  useEffect(() => {
    GetAllStations();
  }, []);
  return <StationMainView allstation={allstation} />;
};

const mapStateToProps = (state: StoreState) => {
  return {
    allstation: state.station.station_list,
  };
};
// export default (StationMain);
const mapDispatchToProps = {
  GetAllStations,
};

export default connect(mapStateToProps, mapDispatchToProps)(StationMain);
interface StationProps {
  GetAllStations?: any;
  allstation: StationList[];
}

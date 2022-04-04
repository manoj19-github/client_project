import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { StoreState } from "../../../models/reduxModels";
import { StationList } from "../../../models/stationModel";
import { ZoneList } from "../../../models/zoneModels";
import {
  DeleteStations,
  FiltreUpdateSuccessAction,
  GetAllStations,
  getZoneStations,
} from "../../../Stores/actions/stationAction";
import StationMainView from "./StationMainView";

const StationMain = ({
  allstation,
  GetAllStations,
  allzone,
  DeleteStations,
  getZoneStations,
  filter,
  FiltreUpdateSuccessAction
}: StationProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const[filters, SetFilter]= useState<number>(0)
  useEffect(() => {
    if(!!filter){
      SetFilter(filter.zone_id)
      getZoneStations(+filter.zone_id)
    }else{
      GetAllStations();
      SetFilter(0)
    }
  }, []);
  const Delete = (data: number) => {
    DeleteStations({
      payload: data,
      enqueueSnackbar: enqueueSnackbar,
    });
  };
  const FilterData   =(data: number)=> {
    if(data != null){
      const zone = allzone.find(m=> m.zone_id == +data)
      SetFilter(data)
      FiltreUpdateSuccessAction(zone)
      getZoneStations(+data)
    }
    
  }
  return (
    <StationMainView
      allstation={allstation}
      allzone={allzone}
      Delete={Delete}
      FilterData={FilterData}
      filters={filters}
    />
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    allstation: state.station.station_list,
    allzone: state.zone.zone_list,
    filter: state.station.has_filter
  };
};
// export default (StationMain);
const mapDispatchToProps = {
  GetAllStations,
  DeleteStations,
  getZoneStations,
  FiltreUpdateSuccessAction
};

export default connect(mapStateToProps, mapDispatchToProps)(StationMain);
interface StationProps {
  GetAllStations?: any;
  allstation: StationList[];
  allzone: ZoneList[];
  DeleteStations?: any;
  getZoneStations?: any;
  filter?: ZoneList |undefined;
  FiltreUpdateSuccessAction?: any;
}

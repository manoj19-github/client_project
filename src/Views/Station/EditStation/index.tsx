import { useSnackbar } from "notistack";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { StoreState } from "../../../models/reduxModels";
import { StationList } from "../../../models/stationModel";
import { ZoneList } from "../../../models/zoneModels";
import {
  GetStationByIds,
  UpdateStations,
} from "../../../Stores/actions/stationAction";
import StationEditView from "./EditStation";

function EditStation({
  allzone,
  GetStationByIds,
  SingleStation,
  UpdateStations,
}: AddZoneProps) {
  let { id }: any = useParams();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const submitData = (data: any) => {
    UpdateStations({
      payload: { ...SingleStation, ...data },
      history: history,
      enqueueSnackbar: enqueueSnackbar,
    });
  };
  useEffect(() => {
    GetStationByIds(+id);
  }, []);
  return (
    <StationEditView
      submitData={submitData}
      allzone={allzone}
      SingleStation={SingleStation}
    />
  );
}

const mapStateToProps = (state: StoreState) => {
  return {
    allzone: state.zone.zone_list,
    SingleStation: state.station.single_station,
  };
};
const mapDispatchToProps = {
  GetStationByIds,
  UpdateStations,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditStation);
interface AddZoneProps {
  allzone: ZoneList[];
  GetStationByIds?: any;
  SingleStation?: StationList;
  UpdateStations?: any;
}

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StoreState } from "../../../models/reduxModels";
import { ZoneList } from "../../../models/zoneModels";
import { GetAllZones } from "../../../Stores/actions/zoneActions";
import ZoneMainView from "./ZoneMainView";

const ZoneMain = ({ GetAllZones, allzone }: ZoneProps) => {
  console.log(allzone);

  useEffect(() => {
    GetAllZones();
  }, []);
  return <ZoneMainView allzone={allzone} />;
};

const mapStateToProps = (state: StoreState) => {
  return {
    allzone: state.zone.zone_list,
  };
};
const mapDispatchToProps = {
  GetAllZones,
};

export default connect(mapStateToProps, mapDispatchToProps)(ZoneMain);
interface ZoneProps {
  GetAllZones?: any;
  allzone: ZoneList[];
}

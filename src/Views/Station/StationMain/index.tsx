import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StoreState } from "../../../models/reduxModels";
import { ZoneList } from "../../../models/zoneModels";
import { GetAllZones } from "../../../Stores/actions/zoneActions";
import StationMainView from "./StationMainView";




const StationMain = () => {
    
  
    useEffect(() => {
      GetAllZones();
    }, []);
    return <StationMainView allstation={[]}  />;
  };


  const mapStateToProps = (state: StoreState) => {
    return {
    //   allzone: state.zone.zone_list,
    allstation: []
    };
  };
// export default (StationMain);
const mapDispatchToProps = {
    GetAllZones,
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(StationMain);
interface ZoneProps {
  GetAllZones?: any;
  allstation: ZoneList[];
}


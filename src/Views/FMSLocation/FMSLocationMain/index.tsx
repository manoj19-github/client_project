import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StoreState } from "../../../models/reduxModels";
import { useSnackbar } from "notistack";
import { FMSLocationList } from "../../../models/fmsLocationModel";
import { DeleteFMSLocations, GetAllFMSLocations } from "../../../Stores/actions/fmsLocationAction";
import FMSLocationMainView from "./FMSLocationMainView";
const FMSLocationMain = ({ }: FMSLocationProps) => {
  const { enqueueSnackbar } = useSnackbar();
//   useEffect(() => {
//     GetAllFMSLocations();
//   }, []);
  const Delete = (data: number) => {
    DeleteFMSLocations({
      payload: data,
      enqueueSnackbar: enqueueSnackbar,
    });
  };
  return <FMSLocationMainView allfmslocation={[]} Delete={Delete} />;
};

const mapStateToProps = (state: StoreState) => {
  return {
    // allfmslocation: state.fmslocation.fmslocation_list,
  };
};
const mapDispatchToProps = {
  GetAllFMSLocations,
  DeleteFMSLocations,
};

export default connect(mapStateToProps, mapDispatchToProps)(FMSLocationMain);
interface FMSLocationProps {
//   GetAllFMSLocations?: any;
//   allfmslocation: FMSLocationList[];
//   DeleteFMSLocations?: any;
}

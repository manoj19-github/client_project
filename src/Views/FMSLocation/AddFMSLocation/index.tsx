import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { StoreState } from "../../../models/reduxModels";
import { useSnackbar } from "notistack";
import { AddFMSLocations } from "../../../Stores/actions/fmsLocationAction";
import FMSLocationAddView from "./FMSLocationAddView";
function AddFMSLocation({ AddFMSLocations }: AddFMSLocationProps) {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const submitData = (data: any) => {
    AddFMSLocations({
      payload: data,
      history: history,
      enqueueSnackbar: enqueueSnackbar,
    });
  };
  return <FMSLocationAddView submitData={submitData} />;
}

const mapStateToProps = (state: StoreState) => {
  return {};
};
const mapDispatchToProps = {
  AddFMSLocations,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFMSLocation);
interface AddFMSLocationProps {
  AddFMSLocations?: any;
}

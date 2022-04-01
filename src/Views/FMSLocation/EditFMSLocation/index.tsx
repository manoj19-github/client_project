import { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { StoreState } from "../../../models/reduxModels";
import { useSnackbar } from "notistack";
import { FMSLocationList } from "../../../models/fmsLocationModel";
import FMSLocationEditView from "./EditFMSLocationView";
import { GetFMSLocationsByIds, UpdateFMSLocations } from "../../../Stores/actions/fmsLocationAction";
function EditFMSLocation({ GetFMSLocationsByIds, SingleFMSLocation, UpdateFMSLocations }: EditFMSLocationProps) {
  let { id }: any = useParams();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const submitData = (data: any) => {
    let payload: FMSLocationList = JSON.parse(JSON.stringify(SingleFMSLocation));
    UpdateFMSLocations({
      payload: { ...payload, ...data },
      history: history,
      enqueueSnackbar: enqueueSnackbar,
    });
  };
  useEffect(() => {
    GetFMSLocationsByIds(+id);
  }, []);
  return <FMSLocationEditView submitData={submitData} SingleFMSLocation={SingleFMSLocation} />;
}

const mapStateToProps = (state: StoreState) => {
  return {
    SingleFMSLocation: state.fmslocation.single_fmslocation,
  };
};
const mapDispatchToProps = {
  GetFMSLocationsByIds,
  UpdateFMSLocations,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditFMSLocation);
interface EditFMSLocationProps {
  GetFMSLocationsByIds?: any;
  SingleFMSLocation?: FMSLocationList;
  UpdateFMSLocations?: any;
}

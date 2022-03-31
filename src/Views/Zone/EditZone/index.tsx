import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { StoreState } from "../../../models/reduxModels";
import { AddZones } from "../../../Stores/actions/zoneActions";
import ZoneEditView from "./EditZoneView";

function EditZone({ AddZones }: AddZoneProps) {
  const history = useHistory();
  const submitData = (data: any) => {
    AddZones({
      payload: data,
      history: history,
    });
  };
  return <ZoneEditView submitData={submitData} />;
}

const mapStateToProps = (state: StoreState) => {
  return {};
};
const mapDispatchToProps = {
  AddZones,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditZone);
interface AddZoneProps {
  AddZones?: any;
}

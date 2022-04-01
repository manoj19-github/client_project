import { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { StoreState } from "../../../models/reduxModels";
import { ZoneList } from "../../../models/zoneModels";
import {
  AddZones,
  GetZonesByIds,
  UpdateZones,
} from "../../../Stores/actions/zoneActions";
import ZoneEditView from "./EditZoneView";
import { useSnackbar } from "notistack";
function EditZone({ GetZonesByIds, SingleZone, UpdateZones }: EditZoneProps) {
  let { id }: any = useParams();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const submitData = (data: any) => {
    let payload: ZoneList = JSON.parse(JSON.stringify(SingleZone));
    UpdateZones({
      payload: { ...payload, ...data },
      history: history,
      enqueueSnackbar: enqueueSnackbar,
    });
  };
  useEffect(() => {
    GetZonesByIds(+id);
  }, []);
  return <ZoneEditView submitData={submitData} SingleZone={SingleZone} />;
}

const mapStateToProps = (state: StoreState) => {
  return {
    SingleZone: state.zone.single_zone,
  };
};
const mapDispatchToProps = {
  GetZonesByIds,
  UpdateZones,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditZone);
interface EditZoneProps {
  GetZonesByIds?: any;
  SingleZone?: ZoneList;
  UpdateZones?: any;
}

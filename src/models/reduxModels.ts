import { ErrorState } from "./errorModels";
import { LoadingState } from "./loadingModelss";
import { StationMain } from "./stationModel";
import { UserMain } from "./userModels";
import { ZoneMain } from "./zoneModels";

export interface StoreState {
  loading: LoadingState;
  error: ErrorState;
  user: UserMain;
  zone: ZoneMain;
  station: StationMain;
}

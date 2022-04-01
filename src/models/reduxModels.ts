import { ErrorState } from "./errorModels";
import { FMSLocationMain } from "./fmsLocationModel";
import { LoadingState } from "./loadingModelss";
import { UserMain } from "./userModels";
import { ZoneMain } from "./zoneModels";

export interface StoreState {
  loading: LoadingState;
  error: ErrorState;
  user: UserMain;
  zone: ZoneMain;
  fmslocation: FMSLocationMain;
}

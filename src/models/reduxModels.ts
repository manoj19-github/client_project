import { ErrorState } from "./errorModels";
import { LoadingState } from "./loadingModelss";

export interface StoreState {
  loading: LoadingState;
  error: ErrorState;
}

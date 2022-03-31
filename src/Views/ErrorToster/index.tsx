import React, { useEffect } from "react";
import { useSnackbar } from "notistack";
import { connect } from "react-redux";
import { ErrorModel } from "../../models/errorModels";
import { StoreState } from "../../models/reduxModels";
const ErrorToster = ({ error }: ErrorProps) => {
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (!!error) {
      ShowError(error.message);
    }
  }, [error]);
  const ShowError = async (data: string) => {
    await enqueueSnackbar(data, {
      variant: "error",
    });
  };
  return <div></div>;
};
const mapStateToProps = (state: StoreState) => {
  return {
    error: state.error.error,
  };
};

export default connect(mapStateToProps)(ErrorToster);
interface ErrorProps {
  error?: ErrorModel;
}

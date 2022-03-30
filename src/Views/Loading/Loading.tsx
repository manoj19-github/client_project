import ReactLoading from "react-loading";
import { connect } from "react-redux";
import { StoreState } from "../../models/reduxModels";
import "./Loading.css";
const Loading = (props: any) => {
  return (
    <>
      {!!props && !!props.loading && props.loading?.count > 0 ? (
        <div id="overlay">
          <div id="text">
            <ReactLoading
              type={"bars"}
              color={"#fff"}
              height={"70%"}
              width={"90%"}
            />
            <div style={{ color: "#fff" }}>{props?.loading.message}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
const mapStateToProps = (state: StoreState) => {
  return {
    loading: state.loading,
  };
};
export default connect(mapStateToProps)(Loading);

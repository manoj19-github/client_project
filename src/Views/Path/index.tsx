import { Breadcrumbs, Chip, emphasize, styled } from "@mui/material";
import { connect } from "react-redux";
import { useLocation, useRouteMatch } from "react-router-dom";
import { StoreState } from "../../models/reduxModels";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[300]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip;
const Path = (props: any) => {
  const location = useLocation();
  return (
    <>
      {!!props?.userDetail &&
      location.pathname != "/dashboard/dashboard-main" ? (
        <div style={{ margin: 5 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb component="a" href="#" label="XXXX" />
            <StyledBreadcrumb component="a" href="#" label="XXXX" />
            <StyledBreadcrumb component="a" href="#" label="XXXX" />
          </Breadcrumbs>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
const mapStateToProps = (state: StoreState) => {
  return {
    userDetail: state.user.userDetails,
  };
};
export default connect(mapStateToProps)(Path);

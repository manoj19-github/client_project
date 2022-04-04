import { Breadcrumbs, Chip, emphasize, styled, Typography } from "@mui/material";
import { connect } from "react-redux";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { StoreState } from "../../models/reduxModels";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor = '#00AAEE'
  return {
    backgroundColor,
    height: theme.spacing(4),
    color: '#ffff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
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
  const history = useHistory();
  
  return (
    <>
      {!!props?.userDetail &&
      location.pathname != "/dashboard/dashboard-main" ? (
        <div style={{ margin: 5 }}>
          <Breadcrumbs aria-label="breadcrumb">
            {
              !!props.zoneSet &&
              <StyledBreadcrumb  component="a" onClick={()=> history.push('/zone')} label={<Typography><b>ZONE : </b>{props.zoneSet.zone_name}</Typography>} />
            }
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
    zoneSet: state.station.has_filter
  };
};
export default connect(mapStateToProps)(Path);

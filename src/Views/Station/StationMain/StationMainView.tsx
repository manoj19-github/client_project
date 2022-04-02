import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  styled,
  tableCellClasses,
  TextField,
  Grid,
  Fab,
  SxProps,
  Zoom,
  useTheme,
  Breadcrumbs,
  Link,
  Typography,
  Chip,
  emphasize,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { green } from "@mui/material/colors";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { StationList } from "../../../models/stationModel";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { ZoneList } from "../../../models/zoneModels";
const StationMainView = ({ allstation, Delete, allzone }: StationViewProps) => {
  const history = useHistory();
  const columns: any[] = [
    "Station Name",
    "Station Code",
    "Station Address",
    "Station Type",
    "Lattitude",
    "Longitude",
    "Action",
  ];
  const [open, setOpen] = useState<boolean>(false);
  const [id, SetId] = useState<number>(-1);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = useState<StationList[]>([]);
  const [searched, setSearched] = useState<string>("");
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const requestSearch = (searchedVal: string) => {
    const filteredRows = !!allstation
      ? allstation.filter((row: StationList) => {
          return (
            row.station_name
              .toLowerCase()
              .includes(searchedVal.toLowerCase()) ||
            row.station_code
              .toLowerCase()
              .includes(searchedVal.toLowerCase()) ||
            row.station_address
              .toLowerCase()
              .includes(searchedVal.toLowerCase()) ||
            row.station_type.toLowerCase().includes(searchedVal.toLowerCase())
          );
        })
      : [];
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch("");
  };

  useEffect(() => {
    if (!!allstation) {
      cancelSearch();
    }
  }, [allstation]);
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const del = () => {
    setOpen(false);
    Delete(id);
  };
  const styles = {
    marginRight: "50px",
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this Station?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)}>
            No
          </Button>
          <Button onClick={() => del()} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Grid
          container
          justifyContent={"center"}
          alignItems="center"
          margin={1}
        >
          <Grid item xs={3}></Grid>
          <Grid item xs={5}>
            <TextField
              size="small"
              style={{ width: "100%" }}
              placeholder="Search..."
              id="fullWidth"
              value={searched}
              onChange={(e: any) => (
                requestSearch(e.target.value), setSearched(e.target.value)
              )}
              InputProps={{
                endAdornment:
                  !!searched && searched.length > 0 ? (
                    <IconButton color="primary" onClick={() => cancelSearch()}>
                      <CloseIcon />
                    </IconButton>
                  ) : (
                    <IconButton color="primary">
                      <SearchIcon />
                    </IconButton>
                  ),
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              style={{ marginLeft: "10px", width: "80%" }}
              id="outlined-select-currency"
              select
              size="small"
              placeholder="Select Zone"
              defaultValue={"0"}
            >
              <MenuItem value={"0"}>All Zone</MenuItem>
              {allzone.map((option) => (
                <MenuItem value={option.zone_id}>{option.zone_name}</MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <TableContainer sx={{ maxHeight: 480 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell align="center" key={column}>
                    {column}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {!!rows &&
                rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <StyledTableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.station_id}
                      >
                        <StyledTableCell align="center" key={columns[0]}>
                          {row.station_name}
                        </StyledTableCell>
                        <StyledTableCell align="center" key={columns[1]}>
                          {row.station_code}
                        </StyledTableCell>
                        <StyledTableCell align="center" key={columns[2]}>
                          {row.station_address}
                        </StyledTableCell>
                        <StyledTableCell align="center" key={columns[3]}>
                          {row.station_type}
                        </StyledTableCell>
                        <StyledTableCell align="center" key={columns[4]}>
                          {row.lattitude}
                        </StyledTableCell>
                        <StyledTableCell align="center" key={columns[5]}>
                          {row.longitude}
                        </StyledTableCell>
                        <StyledTableCell align="center" key={columns[6]}>
                          <Button
                            onClick={() =>
                              history.push(
                                `/station/edit-station/${row.station_id}`
                              )
                            }
                            variant="outlined"
                            color="primary"
                            size="small"
                            startIcon={<EditIcon />}
                          >
                            Edit
                          </Button>
                          <Button
                            onClick={() => (
                              SetId(row.station_id), setOpen(true)
                            )}
                            style={{ marginLeft: 10 }}
                            variant="outlined"
                            color="error"
                            size="small"
                            startIcon={<DeleteIcon />}
                          >
                            Delete
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          style={styles}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={allstation.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <Fab
          sx={fabStyle}
          aria-label={"Add"}
          color={"primary"}
          onClick={() => history.push("/station/add-station")}
        >
          {<AddIcon style={{ color: "#ffff" }} />}
        </Fab>
      </Paper>
    </>
  );
};

export default StationMainView;

interface StationViewProps {
  allstation: StationList[];
  Delete?: any;
  allzone: ZoneList[];
}
const fabStyle = {
  position: "absolute",
  bottom: 40,
  right: 16,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#00AAEE",
    color: theme.palette.common.white,
    padding: 10,
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: 10,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    padding: 10,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

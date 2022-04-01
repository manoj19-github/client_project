
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
  } from "@mui/material";
  import React from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { green } from "@mui/material/colors";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { StationList } from "../../../models/stationModel";




const StationMainView =({ allstation }: StationViewProps)=> {
    const columns: any[] = ["Station Name", "Station Code", "Description", "Action"];
  const history = useHistory();
  const theme = useTheme();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [value, setValue] = React.useState(0);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
   
    return (
        <>
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
              <Grid item xs={8}>
                <TextField
                  size="small"
                  style={{ width: "100%" }}
                  placeholder="Search..."
                  id="fullWidth"
                />
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
                  {!!allstation &&
                    allstation
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => {
                        return (
                          <StyledTableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.zone_id}
                          >
                            <StyledTableCell align="center" key={columns[0]}>
                              {row.zone_name}
                            </StyledTableCell>
                            <StyledTableCell align="center" key={columns[1]}>
                              {row.zone_code}
                            </StyledTableCell>
                            <StyledTableCell align="center" key={columns[2]}>
                              {row.zone_desc}
                            </StyledTableCell>
                            <StyledTableCell align="center" key={columns[3]}>
                              <Button
                                variant="outlined"
                                color="primary"
                                size="small"
                                startIcon={<EditIcon />}
                              >
                                Edit
                              </Button>
                              <Button
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



export default (StationMainView);


interface StationViewProps {
    allstation: StationList[];
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
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

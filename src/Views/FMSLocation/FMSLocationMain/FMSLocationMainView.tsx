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
    useMediaQuery,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import AddIcon from "@mui/icons-material/Add";
  import EditIcon from "@mui/icons-material/Edit";
  import SearchIcon from "@mui/icons-material/Search";
  import { useHistory } from "react-router-dom";
  import DeleteIcon from "@mui/icons-material/Delete";
  import CloseIcon from "@mui/icons-material/Close";
import { FMSLocationList } from "../../../models/fmsLocationModel";
  const FMSLocationMainView = ({ allfmslocation, Delete }: FMSlocationViewProps) => {
    const theme = useTheme();
    const columns: any[] = ["Zone Name", "Zone Code", "Description", "Action"];
    const [open, setOpen] = useState<boolean>(false);
    const [id, SetId] = useState<number>(-1);
    const history = useHistory();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = useState<FMSLocationList[]>([]);
    const [searched, setSearched] = useState<string>("");
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
    const requestSearch = (searchedVal: string) => {
      const filteredRows = !!allfmslocation
        ? allfmslocation.filter((row: FMSLocationList) => {
            return (
              row.fmslocation_code.toLowerCase().includes(searchedVal.toLowerCase()) ||
              row.fmslocation_name.toLowerCase().includes(searchedVal.toLowerCase()) ||
              row.fmslocation_desc.toLowerCase().includes(searchedVal.toLowerCase())
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
      if (!!allfmslocation) {
        cancelSearch();
      }
    }, [allfmslocation]);
  
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
    const styles={
        marginRight:'50px'
    }
  
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
              Are you sure you want to delete this fmslocation?
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
            <Grid item xs={8}>
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
                          key={row.fmslocation_id}
                        >
                          <StyledTableCell align="center" key={columns[0]}>
                            {row.fmslocation_name}
                          </StyledTableCell>
                          <StyledTableCell align="center" key={columns[1]}>
                            {row.fmslocation_code}
                          </StyledTableCell>
                          <StyledTableCell align="center" key={columns[2]}>
                            {row.fmslocation_desc}
                          </StyledTableCell>
                          <StyledTableCell align="center" key={columns[3]}>
                            <Button
                              onClick={() =>
                                history.push(`/fms-location/edit-fmslocation/${row.fmslocation_id}`)
                              }
                              variant="outlined"
                              color="primary"
                              size="small"
                              startIcon={<EditIcon />}
                            >
                              Edit
                            </Button>
                            <Button
                              onClick={() => (SetId(row.fmslocation_id), setOpen(true))}
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
            count={allfmslocation.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <Fab
            sx={fabStyle}
            aria-label={"Add"}
            color={"primary"}
            onClick={() => history.push("/fms-location/add-fmslocation")}
          >
            {<AddIcon style={{ color: "#ffff" }} />}
          </Fab>
        </Paper>
        <h1>trth</h1>
      </>
    );
  };
  
  export default FMSLocationMainView;
  
  interface FMSlocationViewProps {
    Delete?: any;
    allfmslocation:FMSLocationList[];
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
  
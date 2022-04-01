import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Grid,
    Paper,
    TextField,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { useForm } from "react-hook-form";
  
function StationAddView({ submitData }: StationAddViewProps) {
    const { register, handleSubmit, formState, setValue } = useForm();
    const { errors } = formState;
    const onSubmit = (props: any) => {
      submitData(props);
    };

    return (
        <Card sx={{}}>
          <CardHeader
            style={{ backgroundColor: "#00AAEE", color: "#fff" }}
            title="Add Station"
          />
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid
                container
                paddingTop={2}
                justifyContent="center"
                alignItems={"center"}
              >
                <Grid item xs={4}>
                  <Typography>Station Code</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    {...register("station_code", { required: true })}
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    variant="outlined"
                    size="small"
                    name="station_code"
                    placeholder="Type Station Code"
                    error={!!errors["station_code"]}
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent="center" alignItems={"center"}>
                <Grid item xs={4}>
                  <Typography>Station Name</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    {...register("zone_name", { required: true })}
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    variant="outlined"
                    size="small"
                    name="zone_name"
                    placeholder="Type Station Name"
                    error={!!errors["zone_name"]}
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent="center" alignItems={"center"}>
                <Grid item xs={4}>
                  <Typography>Description</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    {...register("zone_desc", { required: true })}
                    style={{ width: "100%", margin: "5px" }}
                    multiline
                    rows={4}
                    variant="outlined"
                    name={"zone_desc"}
                    placeholder="Type Description"
                    error={!!errors["zone_desc"]}
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent="center" alignItems={"center"}>
                <Grid item xs={2}>
                  <Button
                    type="submit"
                    style={{ color: "#fff" }}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
        
      );
    }
    
    export default StationAddView;
    
    interface StationAddViewProps {
      submitData?: any;
  }
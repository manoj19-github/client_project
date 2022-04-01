import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { ZoneList } from "../../../models/zoneModels";

function StationAddView({ submitData, allzone }: StationAddViewProps) {
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
                {...register("station_name", { required: true })}
                style={{ width: "100%", margin: "5px" }}
                type="text"
                variant="outlined"
                size="small"
                name="station_name"
                placeholder="Type Station Name"
                error={!!errors["station_name"]}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems={"center"}>
            <Grid item xs={4}>
              <Typography>Station Type</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>:</Typography>
            </Grid>
            <Grid item xs={5}>
              <TextField
                {...register("station_type", { required: true })}
                style={{ width: "100%", margin: "5px" }}
                variant="outlined"
                select
                size="small"
                name="station_type"
                placeholder="Select Station Type"
                error={!!errors["station_type"]}
              >
                <MenuItem key={"S/S"} value={"S/S"}>
                  S/S
                </MenuItem>
                <MenuItem key={"R/S"} value={"R/S"}>
                  R/S
                </MenuItem>
                <MenuItem key={"G/S"} value={"G/S"}>
                  G/S
                </MenuItem>
                <MenuItem key={"D/S"} value={"D/S"}>
                  D/S
                </MenuItem>
                <MenuItem key={"ARMU"} value={"ARMU"}>
                  ARMU
                </MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems={"center"}>
            <Grid item xs={4}>
              <Typography>Zone</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>:</Typography>
            </Grid>
            <Grid item xs={5}>
              <TextField
                {...register("zone_id", { required: true })}
                style={{ width: "100%", margin: "5px" }}
                type="text"
                variant="outlined"
                size="small"
                select
                name="zone_id"
                placeholder="Select zone_id"
                error={!!errors["zone_id"]}
              >
                {allzone.map((option) => (
                  <MenuItem key={option.zone_id} value={option.zone_id}>
                    {option.zone_name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems={"center"}>
            <Grid item xs={4}>
              <Typography>Lattitude</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>:</Typography>
            </Grid>
            <Grid item xs={5}>
              <TextField
                {...register("lattitude", { required: true })}
                style={{ width: "100%", margin: "5px" }}
                type="text"
                variant="outlined"
                size="small"
                name="lattitude"
                placeholder="Type Lattitude"
                error={!!errors["lattitude"]}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems={"center"}>
            <Grid item xs={4}>
              <Typography>Longitude</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>:</Typography>
            </Grid>
            <Grid item xs={5}>
              <TextField
                {...register("longitude", { required: true })}
                style={{ width: "100%", margin: "5px" }}
                type="text"
                variant="outlined"
                size="small"
                name="longitude"
                placeholder="Type Longitude"
                error={!!errors["longitude"]}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" alignItems={"center"}>
            <Grid item xs={4}>
              <Typography>Station Address</Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography>:</Typography>
            </Grid>
            <Grid item xs={5}>
              <TextField
                {...register("station_address", { required: true })}
                style={{ width: "100%", margin: "5px" }}
                multiline
                rows={4}
                variant="outlined"
                name={"station_address"}
                placeholder="Type Station Address"
                error={!!errors["station_address"]}
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
  allzone: ZoneList[];
}

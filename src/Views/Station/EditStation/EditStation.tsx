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
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { StationList } from "../../../models/stationModel";
import { ZoneList } from "../../../models/zoneModels";

function StationEditView({
  submitData,
  allzone,
  SingleStation,
}: StationEditViewProps) {
  const theme = useTheme();
  const {
    control,
    register,
    handleSubmit,
    formState,
    setValue,
    getValues,
  } = useForm();
  const { errors } = formState;
  const onSubmit = (props: any) => {
    submitData({
      lattitude: +props.lattitude,
      longitude: +props.longitude,
      station_address: props.station_address,
      station_code: props.station_code,
      station_name: props.station_name,
      station_type: props.station_type,
      zone_id: props.zone_id,
    });
  };
  useEffect(() => {
    if (!!SingleStation) {
      setValue("lattitude", SingleStation.lattitude);
      setValue("longitude", SingleStation.longitude);
      setValue("station_address", SingleStation.station_address);
      setValue("station_code", SingleStation.station_code);
      setValue("station_name", SingleStation.station_name);
      setValue("station_type", SingleStation.station_type);
      setValue("zone_id", SingleStation.zone_id.toString());
    }
  }, [SingleStation]);

  return (
    <Card sx={{}}>
      <CardHeader
        style={{ backgroundColor: "#00AAEE", color: "#fff" }}
        title="Edit Station"
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
              <Controller
                control={control}
                name={"station_type"}
                defaultValue={""}
                render={({ field: { onBlur, value, onChange } }) => (
                  <TextField
                    style={{ width: "100%", margin: "5px" }}
                    variant="outlined"
                    select
                    size="small"
                    onBlur={onBlur}
                    name="station_type"
                    defaultValue={""}
                    placeholder="Select Station Type"
                    error={!!errors["station_type"]}
                    value={value}
                    onChange={(value) =>
                      onChange(value.target.value.toString())
                    }
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
                )}
              />
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
              <Controller
                control={control}
                name={"zone_id"}
                defaultValue={""}
                render={({ field: { onBlur, value, onChange } }) => (
                  <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    variant="outlined"
                    size="small"
                    onBlur={onBlur}
                    value={value}
                    select
                    name="zone_id"
                    onChange={(value) =>
                      onChange(value.target.value.toString())
                    }
                    placeholder="Select zone_id"
                    error={!!errors["zone_id"]}
                    defaultValue={""}
                  >
                    {!!allzone &&
                      allzone.map((option, index) => (
                        <MenuItem value={option.zone_id.toString()}>
                          {option.zone_name}
                        </MenuItem>
                      ))}
                  </TextField>
                )}
              />
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

export default StationEditView;

interface StationEditViewProps {
  submitData?: any;
  allzone: ZoneList[];
  SingleStation?: StationList;
}

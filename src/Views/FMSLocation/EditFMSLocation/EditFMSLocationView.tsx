import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FMSLocationList } from "../../../models/fmsLocationModel";


function FMSLocationEditView({ submitData, SingleFMSLocation }: ZoneEditViewProps) {
  const { register, handleSubmit, formState, setValue } = useForm();
  const { errors } = formState;

  const onSubmit = (props: any) => {
    submitData(props);
  };
  useEffect(() => {
    if (!!SingleFMSLocation) {
      setValue("zone_code", SingleFMSLocation.fmslocation_code);
      setValue("zone_name", SingleFMSLocation.fmslocation_name);
      setValue("zone_desc", SingleFMSLocation.fmslocation_desc);
    }
  }, [SingleFMSLocation]);
  return (
    <>
      <Card sx={{}}>
        <CardHeader
          style={{ backgroundColor: "#00AAEE", color: "#fff" }}
          title="Edit Zone"
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
                <Typography>Zone Code</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={5}>
                <TextField
                  {...register("zone_code", { required: true })}
                  style={{ width: "100%", margin: "5px" }}
                  type="text"
                  variant="outlined"
                  size="small"
                  name="zone_code"
                  placeholder="Type Zone Code"
                  error={!!errors["zone_code"]}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems={"center"}>
              <Grid item xs={4}>
                <Typography>Zone Name</Typography>
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
                  placeholder="Type Zone Name"
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
                  Update
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default FMSLocationEditView;

interface ZoneEditViewProps {
  submitData?: any;
  SingleFMSLocation?: FMSLocationList;
}

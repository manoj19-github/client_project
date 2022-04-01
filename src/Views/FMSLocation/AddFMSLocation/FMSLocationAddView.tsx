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
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function FMSLocationAddView({ submitData }: FMSLocationAddViewProps) {
  const { register, handleSubmit, formState, setValue } = useForm();
  const { errors } = formState;

  const onSubmit = (props: any) => {
    submitData(props);
  };
  return (
    <>
      <Card sx={{}}>
        <CardHeader
          style={{ backgroundColor: "#00AAEE", color: "#fff" }}
          title="Add FMSLocation"
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
                <Typography>FMSLocation Code</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={5}>
                <TextField
                  {...register("fmslocation_code", { required: true })}
                  style={{ width: "100%", margin: "5px" }}
                  type="text"
                  variant="outlined"
                  size="small"
                  name="fmslocation_code"
                  placeholder="Type FMSLocation Code"
                  error={!!errors["fmslocation_code"]}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems={"center"}>
              <Grid item xs={4}>
                <Typography>FMSLocation Name</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography>:</Typography>
              </Grid>
              <Grid item xs={5}>
                <TextField
                  {...register("fmslocation_name", { required: true })}
                  style={{ width: "100%", margin: "5px" }}
                  type="text"
                  variant="outlined"
                  size="small"
                  name="fmslocation_name"
                  placeholder="Type FMSLocation Name"
                  error={!!errors["fmslocation_name"]}
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
                  {...register("fmslocation_desc", { required: true })}
                  style={{ width: "100%", margin: "5px" }}
                  multiline
                  rows={4}
                  variant="outlined"
                  name={"fmslocation_desc"}
                  placeholder="Type Description"
                  error={!!errors["fmslocation_desc"]}
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
    </>
  );
}

export default FMSLocationAddView;

interface FMSLocationAddViewProps {
  submitData?: any;
}

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
import { useHistory } from "react-router-dom";
import { ZoneList } from "../../../models/zoneModels";

function ZoneEditView({ submitData, SingleZone }: ZoneEditViewProps) {
  const history = useHistory();
  const { register, handleSubmit, formState, setValue } = useForm();
  const { errors } = formState;

  const onSubmit = (props: any) => {
    submitData(props);
  };
  useEffect(() => {
    if (!!SingleZone) {
      setValue("zone_code", SingleZone.zone_code);
      setValue("zone_name", SingleZone.zone_name);
      setValue("zone_desc", SingleZone.zone_desc);
    }
  }, [SingleZone]);
  return (
    <>
      <Card sx={{ marginTop: "10px" }}>
        <CardHeader
          style={{ backgroundColor: "#00AAEE", color: "#fff" }}
          titleTypographyProps={{ fontWeight: 600 }}
          title="Edit Zone"
        />
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container justifyContent="center" alignItems={"center"}>
              <Grid item xs={5}>
                <Grid
                  container
                  paddingTop={2}
                  justifyContent="left"
                  alignItems={"center"}
                >
                  <Grid item xs={11.5}>
                    <TextField
                      label="Zone Code"
                      {...register("zone_code", { required: true })}
                      style={{ width: "100%", margin: "5px" }}
                      type="text"
                      variant="outlined"
                      size="small"
                      name="zone_code"
                      placeholder="Zone Code"
                      error={!!errors["zone_code"]}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5}>
                <Grid
                  container
                  flexDirection={"row"}
                  paddingTop={2}
                  justifyContent="right"
                  alignItems={"center"}
                >
                  <Grid item xs={11.5}>
                    <TextField
                      {...register("zone_name", { required: true })}
                      style={{ width: "100%", margin: "5px" }}
                      type="text"
                      variant="outlined"
                      size="small"
                      label="Zone Name"
                      name="zone_name"
                      placeholder="Zone Name"
                      error={!!errors["zone_name"]}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="center"
              alignItems={"center"}
              paddingTop={2}
            >
              <Grid item xs={10}>
                <TextField
                  {...register("zone_desc", { required: true })}
                  style={{ width: "100%", margin: "5px" }}
                  multiline
                  rows={4}
                  label="Description"
                  variant="outlined"
                  name={"zone_desc"}
                  placeholder="Description"
                  error={!!errors["zone_desc"]}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems={"center"}>
              <Grid item>
                <Button
                  onClick={() => history.push(`/zone`)}
                  style={{
                    color: "#fff",
                    marginRight: 10,
                    background: "#C1B4B3",
                  }}
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Back
                </Button>
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

export default ZoneEditView;

interface ZoneEditViewProps {
  submitData?: any;
  SingleZone?: ZoneList;
}

import { useState, useEffect } from "react";
import {
  Box,
  Card,
  Grid,
  Typography,
  Stack,
  TextField,
  Dialog,
  Button,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import Axios from "../AxiosInstance";
import "../styles/Reminder.css";

const initialFvalues = {
  id: 0,
  medicineName: "",
  time: "",
  pill: "",
  datelist: "",
};

export default function Reminder() {
  const [values, setValues] = useState(initialFvalues);
  const [reminderlist, setReminderlist] = useState([]);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [isHideDelete, setIsHideDelete] = useState(false);

  useEffect(() => {
    reloadRemiderList();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClickOpen = () => {
    setValues({});
    setEditMode(false);
    setIsHideDelete(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addReminder = async () => {
    await Axios.post("http://localhost:3000/reminder", values, {
      headers: { Authorization: localStorage.getItem("token") },
    });

    Axios.get("http://localhost:3000/reminder/all", {
      headers: { Authorization: localStorage.getItem("token") },
    }).then((res) => {
      setReminderlist(res.data.data);
    });
    setOpen(false);
  };

  const editReminder = async () => {
    await Axios.put("http://localhost:3000/reminder", values, {
      headers: { Authorization: localStorage.getItem("token") },
    });
    reloadRemiderList();
    setOpen(false);
  };

  const reloadRemiderList = () => {
    Axios.get("http://localhost:3000/reminder/all", {
      headers: { Authorization: localStorage.getItem("token") },
    }).then((res) => {
      setReminderlist(res.data.data);
    });
  };

  const onClickDelete = () => {
    Axios.delete(`http://localhost:3000/reminder?id=${values.id}`, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    reloadRemiderList();
    setOpen(false);
  };

  return (
    <Grid container="column" style={{ width: "100vw", height: "100vh" }}>
      <Grid item xs={12} md={8} style={{ backgroundColor: "#C5D6F7" }}>
        <Grid item md={12} container alignItems="center">
          <Grid item md={10}>
            <Typography
              className="header"
              sx={{
                fontSize: "70px",
                fontWeight: "bold",
                paddingTop: "35px",
                paddingLeft: "35px",
                "@media (max-width: 768px)": {
                  fontSize: "40px",
                  paddingLeft: "20px",
                },
              }}
            >
              Reminder
            </Typography>
          </Grid>
          <Grid
            item
            md={2}
            sx={{
              alignItems: "center",
              paddingTop: "44px",
              "@media (max-width: 768px)": {
                fontSize: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
              },
            }}
          >
            <div>
              <AddCircleOutlineIcon
                className="icon"
                sx={{ fontSize: { xs: 25, md: 40 }, color: "#2D89FF" }}
                variant="outlined"
                onClick={handleClickOpen}
              ></AddCircleOutlineIcon>

              <Dialog open={open} onClose={handleClose}>
                <Grid container direction="column">
                  <Typography
                    variant="h4"
                    sx={{ marginTop: 2, marginLeft: 2, marginRight: 2 }}
                  >
                    {editMode ? "Edit Schedule" : "Add new medicine"}
                  </Typography>
                  <Box sx={{ padding: 2 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="outlined"
                          label="Medicine's Name"
                          name="medicineName"
                          value={values.medicineName}
                          onChange={handleInputChange}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="outlined"
                          type="time"
                          name="time"
                          value={values.time}
                          onChange={handleInputChange}
                          fullWidth
                          sx={{ textAlign: "center" }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="outlined"
                          label="Pills"
                          name="pill"
                          type="number"
                          value={values.pill}
                          onChange={handleInputChange}
                          fullWidth
                          sx={{ textAlign: "center" }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="outlined"
                          name="datelist"
                          type="date"
                          id="date"
                          value={values.datelist}
                          onChange={handleInputChange}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  <Grid container direction="column" alignItems="center">
                    {editMode ? (
                      <Button
                        sx={{ marginTop: 3, width: "50%" }}
                        onClick={editReminder}
                      >
                        Update Schedule
                      </Button>
                    ) : (
                      <Button
                        sx={{ marginTop: 3, width: "50%" }}
                        onClick={addReminder}
                      >
                        Add Schedule
                      </Button>
                    )}
                    {!isHideDelete ? (
                      <Button
                        sx={{ marginTop: 2, marginBottom: 3, width: "20%" }}
                        onClick={() => {
                          onClickDelete();
                        }}
                      >
                        Delete
                      </Button>
                    ) : (
                      <div
                        style={{ marginTop: 3, marginBottom: 3, width: "50%" }}
                      ></div>
                    )}
                  </Grid>
                </Grid>
              </Dialog>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          {reminderlist?.map((item, index) => (
            <Grid item xs={9} md={7} mb={2} ml={3} key={index}>
              <Card
                sx={{
                  backgroundColor: "#E8F2FF",
                  marginLeft: "15px",
                  height: "80px",
                  borderRadius: "15px",
                }}
                style={{
                  position: "relative",
                }}
              >
                <EditIcon
                  className="icon"
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    margin: "10px",
                  }}
                  onClick={() => {
                    setEditMode(true);
                    setIsHideDelete(false);
                    setValues({
                      id: item.id,
                      medicineName: item.medicine_name,
                      time: item.time,
                      pill: item.pill,
                      datelist: item.datelist,
                    });
                    setOpen(true);
                  }}
                />
                <Stack marginTop={2} marginLeft={3}>
                  {item.time}
                </Stack>
                <Stack
                  marginLeft={3}
                  direction="row"
                  sx={{ alignItems: "center" }}
                >
                  {item.pill}
                  <span style={{ margin: "0 5px" }}></span>
                  {item.medicine_name}
                  <span style={{ margin: "0 5px" }}></span>
                </Stack>
              </Card>
            </Grid>
          ))}
          {reminderlist?.length === 0 && <div>No remiders</div>}
        </Grid>
      </Grid>

      <Grid item xs={0} md={4} style={{ backgroundColor: "#C5D6F7" }}></Grid>
    </Grid>
  );
}

import React, { useState } from "react";
import { Form, Formik, useFormikContext } from "formik";
import { Minus, Plus } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import dayjs, { Dayjs } from "dayjs";
import { useMutate } from "@/hooks/UseMutate";
import { notify } from "@/utils/toast";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  IconButton,
  Grid,
  useMediaQuery,
  useTheme,
  Drawer,
  Box,
  AppBar,
  Toolbar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DatePickerModal from "@/components/molecules/dataPicker";
import SelectNationality from "./selects/SelectNationality";
import SelectMonth from "./selects/SelectMonth";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import { ToastContainer } from "react-toastify";
import BaseInputField from "./formik-fields/BaseInputField";

const DatePickerWrapper = ({ isOpen, onClose, onDateChange }) => {
  const { setFieldValue } = useFormikContext();

  return (
    <DatePickerModal
      open={isOpen}
      onClose={onClose}
      onDateChange={onDateChange}
      setFieldValue={setFieldValue}
    />
  );
};

function MainDataBookingForm({ DetailTour, open, onClose, title }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { mutate, isPending } = useMutate({
    mutationKey: ["bookings"],
    endpoint: `bookings`,
    onSuccess: () => {
      setTimeout(() => {
        notify("success", "Booking submitted successfully!");
      }, 100);
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [rangeDays, setRangeDays] = useState(1);

  const handleDateChange = (date: string, days: number) => {
    setSelectedDate(dayjs(date));
    setRangeDays(days);
  };

  const renderForm = (formContent) => (
    <Formik
      initialValues={{
        name: "",
        email: "",
        nationality_id: "",
        month: "",
        phone: "",
        start_at: "",
        num_of_adults: 1,
        num_of_children: 0,
        num_of_infants: 0,
        tour_id: DetailTour?.id,
        duration: "",
        phone_code: "+20",
      }}
      onSubmit={(values) =>
        mutate({
          ...values,
          phone: values?.phone.slice(2),
          start_at: selectedDate ? selectedDate.format("YYYY-MM-DD") : "",
        })
      }
    >
      {({ setFieldValue, values }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <BaseInputField
                name="email"
                placeholder="Email"
                type="email"
                className="block w-full border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BaseInputField
                name="name"
                placeholder="Name"
                type="text"
                className="block w-full border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <SelectNationality
                  name="nationality_id"
                  placeholder="Select Nationality"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <SelectMonth name="month" placeholder="Select Month" />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Start Date"
                value={
                  selectedDate
                    ? `${selectedDate.format("YYYY-MM-DD")} to ${selectedDate
                        .add(rangeDays - 1, "day")
                        .format("YYYY-MM-DD")}`
                    : ""
                }
                onClick={() => setIsDatePickerOpen(true)}
                InputProps={{
                  readOnly: true,
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    height: "50px",
                  },
                  "& .MuiInputLabel-root": {
                    top: "-1px",
                  },
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className="relative flex flex-col items-center">
                <PhoneInput
                  placeholder="Enter Your Number"
                  value={values.phone}
                  onChange={(value) => setFieldValue("phone", value)}
                  defaultCountry="EG"
                  className="w-full p-3 border border-gray-300 rounded-none"
                />
              </div>
            </Grid>

            {["Adults", "Children", "Infants"].map((label) => {
              const name = `num_of_${label.toLowerCase()}`;
              return (
                <Grid item xs={12} key={label}>
                  <div className="flex justify-between items-center">
                    <Typography>{`Number of ${label}`}</Typography>
                    <div className="flex items-center space-x-2">
                      <IconButton
                        onClick={() =>
                          setFieldValue(name, Math.max(0, values[name] - 1))
                        }
                      >
                        <Minus size={16} />
                      </IconButton>
                      <Typography>{values[name]}</Typography>
                      <IconButton
                        onClick={() => setFieldValue(name, values[name] + 1)}
                      >
                        <Plus size={16} />
                      </IconButton>
                    </div>
                  </div>
                </Grid>
              );
            })}

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Additional Details"
                variant="outlined"
              />
            </Grid>
          </Grid>

          {formContent}

          <DatePickerWrapper
            isOpen={isDatePickerOpen}
            onClose={() => setIsDatePickerOpen(false)}
            onDateChange={handleDateChange}
          />
        </Form>
      )}
    </Formik>
  );

  if (isMobile) {
    return (
      <Drawer
        anchor="bottom"
        open={open}
        onClose={onClose}
        sx={{
          "& .MuiDrawer-paper": {
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            height: "90vh",
          },
        }}
      >
        <AppBar
          position="sticky"
          color="default"
          elevation={0}
          sx={{
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        >
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <IconButton edge="end" onClick={onClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            overflow: "auto",
            padding: 2,
            height: "calc(100% - 64px)",
          }}
        >
          {renderForm(
            <DialogActions>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                className="bg-blue-600"
                type="submit"
                variant="contained"
                color="primary"
                disabled={isPending}
              >
                {isPending ? "Submitting..." : "Submit"}
              </Button>
            </DialogActions>
          )}
        </Box>

        <ToastContainer />
      </Drawer>
    );
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          width: "80%",
          maxWidth: "900px",
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {renderForm(
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              className="bg-blue-600"
              type="submit"
              variant="contained"
              color="primary"
              disabled={isPending}
            >
              {isPending ? "Submitting..." : "Submit"}
            </Button>
          </DialogActions>
        )}
      </DialogContent>
      <ToastContainer />
    </Dialog>
  );
}

export default MainDataBookingForm;

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
  Grid, // Material UI Grid component
} from "@mui/material";
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
  const { mutate, isPending } = useMutate({
    mutationKey: ["bookings"],
    endpoint: `bookings`,
    onSuccess: () => {
      setTimeout(() => {
        notify("success", "Booking submitted successfully!");
      }); // 100ms delay
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

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
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
              {/* Wrap the inputs inside a Grid container */}
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
                        ? `${selectedDate.format(
                            "YYYY-MM-DD"
                          )} to ${selectedDate
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
                        height: "50px", // Adjust as needed
                      },
                      "& .MuiInputLabel-root": {
                        top: "-1px", // Adjust label position if necessary
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
                            onClick={() =>
                              setFieldValue(name, values[name] + 1)
                            }
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

              <DatePickerWrapper
                isOpen={isDatePickerOpen}
                onClose={() => setIsDatePickerOpen(false)}
                onDateChange={handleDateChange}
              />
            </Form>
          )}
        </Formik>
      </DialogContent>
      <ToastContainer />
    </Dialog>
  );
}

export default MainDataBookingForm;

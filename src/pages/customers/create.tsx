import type { CustomerI } from "../../interfaces/customer";
import { HttpError } from "@pankod/refine-core";
import {
  Box,
  TextField,
  Autocomplete,
  useAutocomplete,
  Create,
} from "@pankod/refine-mui";
import { useForm, Controller } from "@pankod/refine-react-hook-form";

export default () => {
  const {
    refineCore: { formLoading },
    saveButtonProps,
    register,
    control,
    formState: { errors },
  } = useForm<CustomerI, HttpError>();

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box component="form" sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          required
          margin="normal"
          fullWidth
          id="id"
          label="Customer ID"
          autoFocus
          {...register("id", {
            required: "Please provide Customer ID!",
          })}
        />
        <TextField
          required
          margin="normal"
          fullWidth
          id="firstName"
          label="First Name"
          autoFocus
          {...register("firstName", {
            required: "Please enter your First Name!",
          })}
        />
        <TextField
          required
          margin="normal"
          fullWidth
          id="lastName"
          label="Last Name"
          {...register("lastName", {
            required: "Please enter your Last Name!",
          })}
        />
        <TextField
          required
          margin="normal"
          fullWidth
          id="address"
          label="Address"
          {...register("address", { required: "Please enter your Address!" })}
        />
        <TextField
          required
          margin="normal"
          fullWidth
          id="city"
          label="City"
          {...register("city", { required: "Please enter your City!" })}
        />
        <TextField
          required
          margin="normal"
          fullWidth
          id="state"
          label="State"
          {...register("state", { required: "Please enter your State!" })}
        />
        <TextField
          required
          margin="normal"
          fullWidth
          id="zip"
          label="Zip Code"
          {...register("zip", { required: "Please enter your zip code!" })}
        />
      </Box>
    </Create>
  );
};

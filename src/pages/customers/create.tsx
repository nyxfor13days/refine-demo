import type { CustomerI } from "../../interfaces/customer";
import { v4 as uuidv4 } from "uuid";
import { HttpError } from "@pankod/refine-core";
import { Box, TextField, Create } from "@pankod/refine-mui";
import { useForm } from "@pankod/refine-react-hook-form";

export default () => {
  const {
    refineCore: { formLoading },
    saveButtonProps,
    register,
    formState: { errors },
  } = useForm<CustomerI, HttpError>();

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box component="form" sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          required
          error={!!errors.id}
          margin="normal"
          fullWidth
          defaultValue={uuidv4()}
          id="id"
          label="Customer ID"
          disabled
          {...register("id", {
            required: "Please provide Customer ID!",
          })}
        />
        <TextField
          required
          error={!!errors.firstName}
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
          error={!!errors.lastName}
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
          error={!!errors.address}
          margin="normal"
          fullWidth
          id="address"
          label="Address"
          {...register("address", { required: "Please enter your Address!" })}
        />
        <TextField
          required
          error={!!errors.city}
          margin="normal"
          fullWidth
          id="city"
          label="City"
          {...register("city", { required: "Please enter your City!" })}
        />
        <TextField
          required
          error={!!errors.state}
          margin="normal"
          fullWidth
          id="state"
          label="State"
          {...register("state", { required: "Please enter your State!" })}
        />
        <TextField
          required
          error={!!errors.zip}
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

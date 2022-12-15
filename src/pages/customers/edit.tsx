import type { CustomerI } from "../../interfaces/customer";
import type { HttpError } from "@pankod/refine-core";
import { useForm } from "@pankod/refine-react-hook-form";
import { Box, Edit, TextField } from "@pankod/refine-mui";

export default () => {
  const {
    refineCore: { formLoading, queryResult },
    saveButtonProps,
    register,
    formState: { errors },
  } = useForm<CustomerI, HttpError>();

  return (
    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box component="form" sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          required
          error={!!errors.id}
          margin="normal"
          fullWidth
          id="id"
          label="Customer ID"
          name="id"
          defaultValue={queryResult?.data?.data.id}
        />
        <TextField
          required
          error={!!errors.firstName}
          margin="normal"
          fullWidth
          id="firstName"
          label="First Name"
          defaultValue={queryResult?.data?.data.firstName}
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
          defaultValue={queryResult?.data?.data.lastName}
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
          defaultValue={queryResult?.data?.data.address}
          {...register("address", {
            required: "Please enter your address!",
          })}
        />

        <TextField
          required
          error={!!errors.city}
          margin="normal"
          fullWidth
          id="city"
          label="City"
          defaultValue={queryResult?.data?.data.city}
          {...register("city", {
            required: "Please enter your city!",
          })}
        />

        <TextField
          required
          error={!!errors.state}
          margin="normal"
          fullWidth
          id="state"
          label="State"
          defaultValue={queryResult?.data?.data.state}
          {...register("state", {
            required: "Please enter your state!",
          })}
        />

        <TextField
          required
          error={!!errors.zip}
          margin="normal"
          fullWidth
          id="zip"
          label="Zip"
          defaultValue={queryResult?.data?.data.zip}
          {...register("zip", {
            required: "Please enter your zip!",
          })}
        />
      </Box>
    </Edit>
  );
};

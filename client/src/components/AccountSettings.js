import { Box, Button, CircularProgress } from "@mui/material";
import { Field, Form } from "react-final-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect, useDispatch } from "react-redux";
import { showError, showSuccess } from "../store/actions/alertActions";
import TextInput from "./library/form/TextInput";
import { hideProgressBar, showProgressBar } from "../store/actions/progressBarActions";

function AccountSettings({ user, loading }) {
  const dispatch = useDispatch();
  return (
    <Box
      borderRadius="5px"
      boxShadow="0px 0px 17px 5px #dbdada"
      p={3}
      bgcolor="#fff"
      textAlign="center"
      minWidth="350px"
    >
      <h3>Account Settings</h3>
      <Form
        onSubmit={(data) => {
          dispatch( showProgressBar() );
          return axios
            .post("/users/profile-update", data)
            .then(({ data }) => {
              if(data.user)
              {
                dispatch( showSuccess('Account settings updated successfully') );
              }
              dispatch( hideProgressBar() );
            })
            .catch((err) => {
              console.log(err);
              let message =
                err && err.response && err.response.data
                  ? err.response.data.error
                  : err.message;
              dispatch(showError(message));
              dispatch( hideProgressBar() );
            });
        }}
        validate={(data) => {
          const errors = {};
          if (!data.name) errors.name = "Name is required";
          if(data.newPassword)
          {
            if (!data.currentPassword)
              errors.currentPassword = "Current password is required";
            
            if (data.newPassword.length < 6)
              errors.newPassword = "Password should have at least 6 characters";
            if (!data.confirmPassword)
              errors.confirmPassword = "Confirm password is required";
            else if (data.newPassword !== data.confirmPassword)
              errors.confirmPassword = "Passwords are not same";
          }
          return errors;
        }}

        initialValues={{
          name: user.name,
          email:user.email,
          phoneNumber:user.phoneNumber,
        }}
      >
        {(props) => {
          const { invalid } = props;
          return (
            <form onSubmit={props.handleSubmit}>
              <Field
                name="name"
                type="text"
                component={TextInput}
                placeholder="Enter name"
              />
              <Field
                name="email"
                type="email"
                disabled
                component={TextInput}
                placeholder="Enter email address..."
                autoFocus
              />
              <Field
                name="phoneNumber"
                type="text"
                component={TextInput}
                placeholder="Enter phone number"
              />
              <Field
                name="currentPassword"
                type="password"
                component={TextInput}
                placeholder="Enter current password..."
              />
              <Field
                name="newPassword"
                type="password"
                component={TextInput}
                placeholder="Enter new password..."
              />
              <Field
                name="confirmPassword"
                type="password"
                component={TextInput}
                placeholder="Confirm new password..."
              />
              <Button
                type="submit"
                variant="outlined"
                disabled={invalid}
              >
                Update
              </Button>
            </form>
          );
        }}
      </Form>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    loading: state.progressBar.loading,
  };
};

export default connect(mapStateToProps, {})(AccountSettings);

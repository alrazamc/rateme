import { Box, Button } from "@mui/material";
import { Field, Form } from "react-final-form";
import TextInput from "../library/form/TextInput";
import { Link } from "react-router-dom";

function ResetPassword(){
  return(
    <Box borderRadius="5px" boxShadow="0px 0px 17px 5px #dbdada"  p={3} bgcolor="#fff" textAlign="center" minWidth="350px">
      <h3>Rate Me</h3>
      <Form
        onSubmit={(data) => {
          console.log('submitting', data);
        }}
        validate={(data) => {
          const errors = {};
          if(!data.newPassword)
            errors.newPassword = "Password is required";  
          else if(data.newPassword.length < 6)
            errors.newPassword = "Password should have at least 6 characters";

          if(!data.confirmPassword)
            errors.confirmPassword = "Please confirm password";
          else if(data.newPassword !== data.confirmPassword)
            errors.confirmPassword = 'Passwords are not same';

          return errors;
        }}
      >
        {
          (props) => {
            return (
              <form onSubmit={props.handleSubmit}>
                <Field name="newPassword" type="password" component={TextInput} placeholder="Enter new password..." label="New Password" />
                <Field name="confirmPassword" type="password" component={TextInput} placeholder="Confirm password..." label="Confirm Password" />
                <Button type="submit" variant="outlined">Change Password</Button>
                <Box mt={2}>
                  <Link style={{textDecoration: 'none'}} to="/admin/signin">Sign in</Link>
                </Box>
              </form>
            )
          }
        }
      </Form>
    </Box>
  )
}

export default ResetPassword;
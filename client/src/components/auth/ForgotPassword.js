import { Box, Button } from "@mui/material";
import { Field, Form } from "react-final-form";
import TextInput from "../library/form/TextInput";
import { Link } from "react-router-dom";

function ForgotPassword(){
  return(
    <Box borderRadius="5px" boxShadow="0px 0px 17px 5px #dbdada"  p={3} bgcolor="#fff" textAlign="center" minWidth="350px">
      <h3>Rate Me</h3>
      <Form
        onSubmit={(data) => {
          console.log('submitting', data);
        }}
        validate={(data) => {
          const errors = {};
          if(!data.email)
            errors.email = "Email address is required";
          else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email))
            errors.email = "invalid email address";

          return errors;
        }}
      >
        {
          (props) => {
            return (
              <form onSubmit={props.handleSubmit}>
                <Field name="email" type="email" component={TextInput} placeholder="Enter email address..." label="Email" />
                <Button type="submit" variant="outlined">Reset Password</Button>
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

export default ForgotPassword;
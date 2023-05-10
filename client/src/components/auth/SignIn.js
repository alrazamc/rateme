import { Box, Button } from "@mui/material";
import { Field, Form } from "react-final-form";
import TextInput from "../library/form/TextInput";
import { Link } from "react-router-dom";

function Signin(){
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

          if(!data.password)
            errors.password = "Password is required";

          return errors;
        }}
      >
        {
          (props) => {
            return (
              <form onSubmit={props.handleSubmit}>
                <Field name="email" type="email" component={TextInput} placeholder="Enter email address..." label="Email" />
                <Field name="password" type="password" component={TextInput} placeholder="Enter password..." label="Password" />
                <Button type="submit" variant="outlined">Sign In</Button>
                <Box mt={2}>
                  <Link style={{textDecoration: 'none'}} to="/admin/forgot-password">Forgot Password?</Link>
                </Box>
              </form>
            )
          }
        }
      </Form>
    </Box>
  )
}

export default Signin;
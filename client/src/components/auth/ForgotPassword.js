import { Box, Button, CircularProgress } from "@mui/material";
import { Field, Form } from "react-final-form";
import TextInput from "../library/form/TextInput";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { showError, showSuccess } from "../../store/actions/alertActions";
import { useDispatch } from "react-redux";

function ForgotPassword(){
  const dispatch = useDispatch();
  const navigator = useNavigate();
  return(
    <Box borderRadius="5px" boxShadow="0px 0px 17px 5px #dbdada"  p={3} bgcolor="#fff" textAlign="center" minWidth="350px">
      <h3>Rate Me</h3>
      <Form
        onSubmit={(data) => {
          return axios.post('api/users/forgot-password', data).then(({ data }) => {
            if(data.success)
            {
              navigator('/admin/signin');
              dispatch( showSuccess("An email has been sent successfully to your inbox. Please check it to reset your password.") )
            }
            
          }).catch(err => {
            let message = err && err.response && err.response.data ? err.response.data.error : err.message;
            dispatch( showError(message) ); 
          })
        }}
        validate={(data) => {
          const errors = {};
          if(!data.email)
            errors.email = "Email address is required";
          else if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(data.email))
            errors.email = "invalid email address";

          return errors;
        }}
      >
        {
          (props) => {
            const { submitting, invalid } = props;
            return (
              <form onSubmit={props.handleSubmit}>
                <Field name="email" type="email" component={TextInput} placeholder="Enter email address..." label="Email" autoFocus />
                <Button type="submit" variant="outlined" disabled={submitting || invalid}>Reset Password { submitting && <CircularProgress style={{ marginLeft: '10px'}} size={20} /> } </Button>
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
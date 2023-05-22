import { Box, Button, CircularProgress } from "@mui/material";
import { Field, Form } from "react-final-form";
import TextInput from "../library/form/TextInput";
import { Link } from "react-router-dom";
import axios from "axios";
import { showError } from "../../store/actions/alertActions";
import { useDispatch } from "react-redux";
import { signin } from "../../store/actions/authActions";

function Signin(){
  const dispatch = useDispatch();
  return(
    <Box borderRadius="5px" boxShadow="0px 0px 17px 5px #dbdada"  p={3} bgcolor="#fff" textAlign="center" minWidth="350px">
      <h3>Rate Me</h3>
      <Form
        onSubmit={(data) => {
          return axios.post('api/users/signin', data).then(({ data }) => {
            dispatch( signin(data.user, data.token) )
            localStorage.setItem('token', data.token);
          }).catch(err => {
            let message = err && err.response && err.response.data ? err.response.data.error : err.message;
            dispatch( showError(message) ); 
          })
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
            const { invalid, submitting } = props;
            return (
              <form onSubmit={props.handleSubmit}>
                <Field name="email" type="email" component={TextInput} placeholder="Enter email address..." label="Email" autoFocus />
                <Field name="password" type="password" component={TextInput} placeholder="Enter password..." label="Password" />
                <Button type="submit" variant="outlined" disabled={invalid || submitting}>Sign In { submitting && <CircularProgress style={{ marginLeft: '10px'}} size={20} /> } </Button>
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
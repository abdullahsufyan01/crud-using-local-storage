import { Container, FormControl, FormGroup, Grid, TextField, Button, styled } from '@mui/material';
import React, { useState } from 'react';
import { AddNewUserAccount } from '../service/api';
import { useNavigate } from 'react-router-dom';


const FormWrapper = styled('section')({
  padding: '70px 0',
  backgroundColor: '#d2d2d2',
});

const initialValues = {
    firstName:'',
    lastName:'',
    email:'',
    phoneNum:'',
    age:''
}

const AddUser = () => {
    const navigateTo = useNavigate()
    const [user,setUser] = useState(initialValues)

    const onValueChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value})
    }

    const addNewUser = async ()=> {
        await AddNewUserAccount(user);
        navigateTo('/')
    }

  return (
    <>
    <FormWrapper className='add-user'>
      <Container maxWidth="lg">
        <FormGroup>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField label="First Name" type='text' variant="outlined" name='firstName' onChange={(e)=> onValueChange(e)}/>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField label="Last Name" type='text' variant="outlined" name='lastName' onChange={(e)=> onValueChange(e)}/>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField label="Email" type='email' variant="outlined" name='email' onChange={(e)=> onValueChange(e)}/>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField label="Phone Number" type='text' variant="outlined" name='phoneNum' onChange={(e)=> onValueChange(e)}/>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField label="Age" type='text' variant="outlined" name='age' onChange={(e)=> onValueChange(e)}/>
              </FormControl>
            </Grid>
          </Grid>
          <Button variant="contained" type='submit' onClick={()=> addNewUser()} color="primary" sx={{ mt: 2 }}>
            Submit
          </Button>
        </FormGroup>
      </Container>
    </FormWrapper>
    </>
  );
};

export default AddUser;

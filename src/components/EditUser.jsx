import {
  Container,
  FormControl,
  FormGroup,
  Grid,
  TextField,
  Button,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { AddNewUserAccount, updateSingleUser } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleUser } from "../service/api";

const FormWrapper = styled("section")({
  padding: "70px 0",
  backgroundColor: "#d2d2d2",
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNum: "",
  age: "",
};

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(initialValues);
  const navigateTo = useNavigate();

  const gettingSingleUserData = async () => {
    const response = await getSingleUser(id);

    setUser(response.data)
  };


  useEffect(() => {
    gettingSingleUserData();
  }, []);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addNewUser = async () => {
    await updateSingleUser(user,id);
    navigateTo("/");
  };

  return (
    <>
      <FormWrapper className="add-user">
        <Container maxWidth="lg">
          <FormGroup>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <TextField
                    label="First Name"
                    type="text"
                    variant="outlined"
                    name="firstName"
                    value={user.firstName}
                    onChange={(e) => onValueChange(e)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <TextField
                    label="Last Name"
                    type="text"
                    variant="outlined"
                    name="lastName"
                    value={user.lastName}
                    onChange={(e) => onValueChange(e)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    name="email"
                    value={user.email}
                    onChange={(e) => onValueChange(e)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <TextField
                    label="Phone Number"
                    type="text"
                    variant="outlined"
                    name="phoneNum"
                    value={user.phoneNum}
                    onChange={(e) => onValueChange(e)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <TextField
                    label="Age"
                    type="text"
                    variant="outlined"
                    name="age"
                    value={user.age}
                    onChange={(e) => onValueChange(e)}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              type="submit"
              onClick={() => addNewUser()}
              color="primary"
              sx={{ mt: 2 }}
            >
              Update User
            </Button>
          </FormGroup>
        </Container>
      </FormWrapper>
    </>
  );
};

export default EditUser;

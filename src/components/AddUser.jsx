import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
} from "@mui/material";
import React from "react";
import { addUser } from "../service/api";

const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

export default function AddUser() {
  const [user, setUser] = React.useState(initialValues);
  const { name, username, email, phone } = user;

  const onValueChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async () => {
    // e.preventDefault();
    await addUser(user);
    // console.log(response);
  }; 
  return (
    <div
      style={{
        width: "50%",
        margin: "5% 0 0 25%",
      }}
    >
      <FormGroup>
        <h2>Add User</h2>
        <FormControl>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
        </FormControl>
        <FormControl style={{ marginTop: 20 }}>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="username"
            value={username}
          />
        </FormControl>
        <FormControl style={{ marginTop: 20 }}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="email"
            value={email}
          />
        </FormControl>
        <FormControl style={{ marginTop: 20 }}>
          <InputLabel htmlFor="phone">Phone</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="phone"
            value={phone}
          />
        </FormControl>
        <Button
          onClick={() => onSubmit()}
          variant="contained"
          color="primary"
          style={{
            marginTop: 20,
          }}
        >
          Add User
        </Button>
      </FormGroup>
    </div>
  );
}

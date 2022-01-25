import {
    FormControl,
    FormGroup,
    InputLabel,
    Input,
    Button,
  } from "@mui/material";
  import React from "react";
  import { addUser, getAllUsers,editUser, getUserById} from "../service/api";
    import { useParams } from "react-router-dom";
  
  const initialValues = {
    name: "",
    username: "",
    email: "",
    phone: "",
  };
  
  export default function EditUser() {
    const [user, setUser] = React.useState(initialValues);
    const { name, username, email, phone } = user;
    const { id } = useParams();

    React.useEffect(() => {
      loadUserData();
    }, []);

    const loadUserData = async () => {
        const response = await getUserById(id);
        setUser(response.data);
    };

  
    const onValueChange = (e) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    };
  
    const onSubmit = async () => {
      await editUser(id, user);
    }; 
    return (
      <div
        style={{
          width: "50%",
          margin: "5% 0 0 25%",
        }}
      >
        <FormGroup>
          <h2>Edit User</h2>
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
            Edit User
          </Button>
        </FormGroup>
      </div>
    );
  }
  
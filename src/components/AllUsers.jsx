import React from "react";
import { getAllUsers,deleteUser } from "../service/api";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function AllUsers() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await getAllUsers();
    setUsers(response.data);
    console.log(response);
  };

 const deleteUserData = async (id) => {
    await deleteUser(id);
    getUsers();

  };
  return (
    <div
      style={{
        width: "90%",
        marginLeft: "5%",
      }}
    >
      <h2>All Users</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Edit | Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: 10 }}
                  to={`/edit/${user.id}`}
                  component={Link}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    deleteUserData(user.id);
                  }}
                  variant="contained"
                  color="secondary"
                  style={{ marginRight: 10 }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

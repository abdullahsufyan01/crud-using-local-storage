import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { GetAllUsersDetail, deletUser } from "../service/api";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";



const columns = [
  { id: "id", label: "ID" },
  { id: "fname", label: "First Name" },
  { id: "lname", label: "Last Name" },
  { id: "fullName", label: "Full Name" },
  { id: "email", label: "Email" },
  { id: "phone_num", label: "Phone Number" },
  { id: "age", label: "Age" },
  { id: "actions", label: "Actions" },
];

const AllUser = ({darkMode}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [users, setUsers] = useState([]);

  const handleDelete = async (id)=> {
    await deletUser(id)
    gettingUserDetails()
  }

  const gettingUserDetails = async () => {
    try {
      const response = await GetAllUsersDetail();
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gettingUserDetails();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
 

  return (
    <>
      <Box component="section" sx={{ p: 5 }}>
        <Container maxWidth="lg">
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 1000 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth, color:darkMode ? "#ffa726" : "purple" }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users &&
                    users
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>{user.id}</TableCell>
                          <TableCell>{user.firstName}</TableCell>
                          <TableCell>{user.lastName}</TableCell>
                          <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.phoneNum}</TableCell>
                          <TableCell>{user.age}</TableCell>
                          <TableCell>
                            <Stack direction="row" spacing={2}>
                              <Button variant="contained" color={darkMode?"warning":"success"} component={Link} to={`/edit-user/${user.id}`}>
                                Edit
                              </Button>
                              <Button variant="contained" color="error" onClick={(id)=> handleDelete(user.id)}>
                                Delet
                              </Button>
                            </Stack>
                          </TableCell>
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default AllUser;
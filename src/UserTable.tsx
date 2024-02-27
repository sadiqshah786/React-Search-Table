import React from "react";
import Table from "react-bootstrap/Table";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface Props {
  Userdata: User[] | undefined;
}

const UserTable: React.FC<Props> = ({ Userdata }) => {
  console.log(Userdata);
  return (
    <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {Userdata?.map((items: User) => {
          return (
            <tr key={items.id}>
              <td>{items.id}</td>
              <td>{items.name}</td>
              <td>{items.email}</td>
              <td>{items.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default UserTable;

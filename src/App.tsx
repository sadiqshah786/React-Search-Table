import Container from "react-bootstrap/Container";
import axios from "axios";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import UserTable from "./UserTable";
interface UsersData {
  id: number;
  name: string;
  email: string;
  phone: string;
  searchText: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<UsersData[] | null>(null);
  const [searchText, setSearchText] = useState<string>("");

  const apiCall = async () => {
    try {
      const response = await axios.get<UsersData[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  const SearchKey = ["name", "email", "phone"];

  const searchList = (searchItem) => {
    return searchItem?.filter((users) =>
      SearchKey?.some((items: string) =>
        users[items]?.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  return (
    <div className="my-4">
      <Container>
        <Form className="my-4">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              placeholder="Search data"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </Form.Group>
        </Form>

        <UserTable Userdata={searchList(data)} />
      </Container>
    </div>
  );
};

export default App;

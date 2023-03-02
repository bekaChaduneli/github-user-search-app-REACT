import axios from "axios";
import { useEffect } from "react";
import { Container, Button, Input, Logo } from "./SearchBar.styled";
import searchImg from "../assets/icon-search.svg";
export default function SearchBar({ setUsers, users, value, setValue }) {
  const addUser = (e) => {
    setValue(e.target.value);
  };

  const sub = (e) => {
    e.preventDefault();
    requestUser(value);
    setValue("");
  };

  useEffect(() => {
    const MyUser = async () => {
      const res = await axios(`https://api.github.com/users/bekachaduneli`);
      const data = res.data;
      setUsers(data);
    };

    MyUser();
  }, []);

  const requestUser = async (user) => {
    const res = await axios(`https://api.github.com/users/${user}`);
    const data = res.data;
    setUsers(data);
    data.login !== null ? (Error.value = "") : (Error.value = "No Result");
  };

  return (
    <Container>
      <Logo src={searchImg} alt="" />
      <Input
        placeholder="Search GitHub username…"
        type="text"
        onChange={addUser}
        value={value}
      />
      <Button type="submit" onClick={sub}>
        Search
      </Button>
    </Container>
  );
}

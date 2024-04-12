import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Container, Logo, Title, Form, Input, Button } from "./styles";

import githublogo from "../../assets/img/github-logo.svg";

export default function MainPage() {
  const [login, setLogin] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      window.location.href = `/${login}/repositories`;
    }
  };

  return (
    <Container>
      <Logo src={githublogo} alt="API GitHub" />
      <Title>API GitHub</Title>
      <Form>
        <Input
          placeholder="usuário"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          onKeyPress={handleKeyPress}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}

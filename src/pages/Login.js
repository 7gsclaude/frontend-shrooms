import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../components/context/AuthContext";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: blue;
`;

const AlreadySignedIn = styled.div`
  padding: 0.5rem;
  background-color: #a9a7a7;
  color: black;
  border: none;
  cursor: pointer;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 1rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
`;

const StyledButton = styled.button`
  padding: 0.5rem;
  background-color: #f1356d;
  color: white;
  border: none;
  cursor: pointer;
`;

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch {
      setError("Failed to Sign In");
    }
    setLoading(false);
  }

  return (
    <Container>
      <Title>Log In</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput type="email" ref={emailRef} placeholder="Email" required />
        <StyledInput
          type="password"
          ref={passwordRef}
          placeholder="Password"
          required
        />
        <StyledButton disabled={loading} type="submit">
          Login
        </StyledButton>
        <AlreadySignedIn>
          Need an account? <Link to="/signup">Sign Up Here</Link> or{" "}
          <Link to="/forgot-password">Forgot Password?</Link>
        </AlreadySignedIn>
      </StyledForm>
    </Container>
  );
};

export default Login;

import React from "react";
import styled from "styled-components";
import { useAuth } from "../components/context/AuthContext";

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 30%;
  margin: 0 auto;
`;

const Username = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const ProfileCard = () => {
  const { currentUser } = useAuth();

  return (
    <CardContainer>
      <Username>{currentUser.email}</Username>
      {/* Additional profile information can be added here */}
    </CardContainer>
  );
};

export default ProfileCard;

import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const CampaignDetails = () => {
  let { id } = useParams();

  return (
    <Container className="mt-5">
      <h1>Campaign Details</h1>
      <p>Details of campaign with ID: {id}</p>
    </Container>
  );
};

export default CampaignDetails;

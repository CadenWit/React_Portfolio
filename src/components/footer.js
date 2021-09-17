import React from "react";
import { Card, Button } from "react-bootstrap";
function Footer() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Thanks For Checking Out My Portfolio.</Card.Title>
        <Card.Text>Please checkout my linkedIn and Github.</Card.Text>
        <Button
          href="https://www.linkedin.com/in/caden-witbeck-2382b916a/"
          variant="primary"
          className="linkedin"
        >
          LinkedIn
        </Button>
        <Button
          href="https://github.com/CadenWit"
          variant="primary"
          className="github"
        >
          Github
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Footer;

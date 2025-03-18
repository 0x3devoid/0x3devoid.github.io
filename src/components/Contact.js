import React from "react";
import { Form, Button } from "semantic-ui-react";

function Contact() {
  return (
    <div className="contact__container">
      <p className="contact__header">
        <p className="line__thick"></p>DROP A MESSAGE
      </p>

      <h2>Kindly fill up the form</h2>

      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="ENTER YOUR NAME"
            placeholder="Whats your name"
            icon="user"
            iconPosition="right"
            required
          />
          <Form.Input
            fluid
            label="EMAIL ADDRESS"
            icon="mail"
            iconPosition="right"
            placeholder="Enter your email address"
            required
          />
        </Form.Group>
        <Form.Input
          fluid
          label="SUBJECT"
          placeholder="Brief header of your message"
          icon="pencil"
          iconPosition="right"
          required
        />
        <Form.TextArea
          label="YOUR MESSAGE"
          placeholder="Provide the details of your message"
          icon="pencil"
          iconPosition="right"
          required
        />

        <p
          style={{
            textAlign: "center",
          }}
        >
          <i>You'll be replied to as fast as possible</i>
        </p>

        <div>
          <Button
            style={{
              backgroundColor: "#a598fa",
              color: "#fff",
              borderRadius: "0px",
              marginTop: "10px",
            }}
          >
            {" "}
            Send Message
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Contact;

'use client';
import React from "react";
import { Button, Image } from "react-bootstrap";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import "../styles/index.css";
import VirtualChatOppened from "./VirtualChatOppened";

const Index = () => {
  const [open, setOpen] = useState(false); //virtual chat

  return (
    <div className="row p-4">
      <h2 className="display-6 text-center">Asistente Virtual</h2>
      <div className="chat-div">
        <Collapse in={open}>
          <div className="collapse-card">
            <Card>
              <VirtualChatOppened />
            </Card>
          </div>
        </Collapse>
        <Button
          className="chat-btn col-1"
          variant="none"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          <Image
            className="chat-image"
            src="./img/chat-an.png"
            alt="Chat virtual"
          />
        </Button>
      </div>
    </div>
  );
};
export default Index;

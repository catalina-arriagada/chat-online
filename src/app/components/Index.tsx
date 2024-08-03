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
      <h2 className="display-6 text-center">Informacion</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, in nulla consectetur fugit minus veritatis facilis, eius autem, nostrum beatae libero facere commodi. Explicabo, nesciunt aliquid eos voluptate perferendis odio.</p>
      <h3 className="display-6 text-center">Tienes alguna duda? abre el chat virtual:</h3>
      <div className="chat-div">
        <Collapse in={open}>
          <div className="collapse-card">
            <Card>
              <VirtualChatOppened />
            </Card>
          </div>
        </Collapse>
        <Button
          className="chat-btn"
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

import React, { useState, useEffect, useRef, ChangeEvent, KeyboardEvent, MouseEvent } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Tab
} from "react-bootstrap";
import "../styles/index.css";
import moment from "moment"; // Instala moment.js para formatear las marcas de tiempo: npm install moment

interface Message {
  sender?: string;
  message?: string;
  timestamp: string;
}

const VirtualChatOppened: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const initialMessage: Message = {
      timestamp: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    setMessages([initialMessage]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim()) {
      setLoading(true);
      const newMessage: Message = {
        sender: "Usuario: ",
        message: input,
        timestamp: moment().format("YYYY-MM-DD HH:mm:ss"),
      };
      setTimeout(() => {
        setMessages([...messages, newMessage]);
        setInput('');
        setLoading(false);
      }, 400);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage();
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    handleSendMessage();
  }

  return (
    <Container className="box pb-3">
      <Row>
        <Col className="img-box">
          <header>
            <div className="inner">
              <Image
                className="inner-header-img"
                src="./img/carr-1.jpg"
                alt="Chat IA"
              />
            </div>
          </header>
        </Col>
      </Row>

      <Row className="chat-elements">
        <Col className="scrollable">
          <ListGroup>
            {messages.map((msg, index) => (
              <Tab.Content className="mt-1" key={index}>
                <strong>{msg.sender}</strong> {msg.message}
                <div className="text-muted mb-2" style={{ fontSize: '0.8em' }}>
                  {msg.timestamp}
                </div>
              </Tab.Content>
            ))}
            {loading && (<span className="loader"></span>)}
            <div ref={messagesEndRef} />
          </ListGroup>
        </Col>

        <div className="chat-bar">      
          <Col>
            <input
              type="text"
              value={input}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="Escribe un mensaje..."
              disabled={loading}
            />
          </Col>
          <Col xs="auto">
            <button onClick={handleClick} disabled={loading}>
              Enviar
            </button>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default VirtualChatOppened;

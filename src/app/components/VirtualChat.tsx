import React from 'react';
import { Button, Image } from 'react-bootstrap';
import "../styles/index.css";

interface VirtualChatProps {
  imageChatSource: string;
  onClick: () => void;
}

const VirtualChat: React.FC<VirtualChatProps> = ({ imageChatSource, onClick }) => {
  return (
    <Button className="chat-btn" variant='none' onClick={onClick}>
      <Image className='chat-image' src={imageChatSource} alt="Chat Virtual" fluid />
    </Button>
  );
};

export default VirtualChat;

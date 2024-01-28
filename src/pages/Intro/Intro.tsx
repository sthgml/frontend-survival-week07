import React from 'react';
import { useNavigate } from 'react-router';

type ButtonProps = {
  label: string;
  id: string;
  onClick: (t:any) => void;
}

function Button({
  label,
  id,
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      className="intro-btn-or"
      id={id}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default function Intro() {
  const navigate = useNavigate();
  const handleBtnOr = (e: MouseEvent) => {
    navigate('/order');
    console.log(e.target.id);
  };

  return (
    <div className="intro-or">
      <Button label="먹고 갈래요" id="for-here" onClick={handleBtnOr} />
      <Button label="포장해서 갈래요" id="to-go" onClick={handleBtnOr} />
    </div>
  );
}

import { useNavigate } from 'react-router';
import useOrderStore from '../../../hooks/useStore';

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
  const [, store] = useOrderStore();

  const navigate = useNavigate();

  const handleBtnOr = (e: MouseEvent) => {
    if (!e.target) return;
    const isToGo = e.target.id === 'to-go';
    store.setTogo(isToGo);
    navigate('/order');
  };

  return (
    <div className="intro-or">
      <Button label="먹고 갈래요" id="for-here" onClick={handleBtnOr} />
      <Button label="포장해서 갈래요" id="to-go" onClick={handleBtnOr} />
    </div>
  );
}

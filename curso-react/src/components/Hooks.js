import { useEffect, useState } from 'react';

const Hooks = () => {
  const [novaIdade, setNovaIdade] = useState(40);

  const handlechangeAge = () => {
    setNovaIdade(novaIdade + 1);
  };

  useEffect( () => {
    console.log("Testando o useEffect")
  }

  )

  return (
    <div>
      <p>Idade: {novaIdade}</p>
      <button onClick={handlechangeAge}>Mudar idade</button>
    </div>
  );
};
export default Hooks;

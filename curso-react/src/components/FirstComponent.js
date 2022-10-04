// comentário JS - Component com estrutura clássica
function FistComponent() {
  const nome = 'Matheus';
  return (
    <div className='firstcomponent'>
      {/** comentário no JSX */}
      <p>{nome}</p>
      <p> Primeiro Component</p>
    </div>
  );
}
export default FistComponent;

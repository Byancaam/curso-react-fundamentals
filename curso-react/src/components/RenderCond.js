const RenderCond = () => {
  const x = 15;
  return (
    <div>
      { x > 5 && <p>X é maior do que 5</p>}
      { x > 5  ?  <p>X é um número alto</p>   :  <p> X é um número baixo</p>}
    </div>
  );
};
export default RenderCond;
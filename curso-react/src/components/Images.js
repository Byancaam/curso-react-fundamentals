import imagem from '../assets/beautiful-rain-forest1.jpg';
const Images = () => {
  return (
    <div>
      <img src='/imagem.jpg' alt='imagem'></img>
      <img src={imagem} alt='imagem2'></img>
    </div>
  );
};
export default Images;

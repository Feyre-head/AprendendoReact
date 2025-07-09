import React, { useState } from "react";

const ImagemHover: React.FC = () => {
  const imagemPadrao =
    "https://i.pinimg.com/736x/2d/81/53/2d81538bb7c18d5519c1a0b95c5937b0.jpg";
  const imagemHover =
    "https://i.pinimg.com/1200x/97/c3/e0/97c3e03d8bc65b3f277908c07289141f.jpg";

  const [srcAtual, setSrcAtual] = useState(imagemPadrao);

  return (
    <img
      src={srcAtual}
      alt="Imagem com efeito Hover"
      onMouseEnter={() => setSrcAtual(imagemHover)}
      onMouseLeave={() => setSrcAtual(imagemPadrao)}
      className="w-64 h-40 shadow-md rounded cursor-pointer transition-all duration-300"
    />
  );
};

export default ImagemHover;

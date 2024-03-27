import Title from "./Title";

const Patrocinadores = () => {
  return (
    <main className="w-full max-w-7xl m-auto overflow-x-hidden">
      <div className="w-full p-4 max-w-5xl mx-auto">
        <div className="my-12">
          <Title>NOSSOS PARCEIROS</Title>
        </div>
        {/* Logos */}
        <div className="grid grid-cols-2 place-items-center place-content-center gap-8">
          <div className="h-32 col-start-1 col-end-2 flex items-center">
            <img
              src="anteus.png"
              alt="Anteus construtora e incorporadora"
              className="max-h-full max-w-36 md:max-w-60"
            />
          </div>
          <div className="h-32  col-start-1 col-end-2 flex items-center">
            <img
              src="logo-cabral.jpg"
              alt="logo Cabral"
              className="max-h-full max-w-36 md:max-w-60"
            />
          </div>
          <div className="h-32 col-start-1 col-end-2 flex items-center">
            <img
              src="logo-eco.png"
              alt="logo Eco Tênis"
              className="max-h-full max-w-36 md:max-w-60"
            />
          </div>
          <div className="h-32 col-start-1 col-end-2 flex items-center">
            <img
              src="masterkraft.png"
              alt="Masterkraft Embalagens"
              className="max-h-full max-w-36 md:max-w-60"
            />
          </div>
          <div className="h-32 col-start-1 col-end-2 flex items-center">
            <img
              src="logo-seguru.jpg"
              alt="logo Seguru Certo"
              className="max-h-full max-w-36 md:max-w-60"
            />
          </div>
          <div className="h-32 col-start-1 col-end-2 flex items-center">
            <img
              src="timbu.png"
              alt="Água Mineral Timbu"
              className="max-h-full max-w-36 md:max-w-48"
            />
          </div>
          <div className="h-32 col-start-1 col-end-2 flex items-center">
            <img
              src="wg.jpg"
              alt="logo WG Critical Care"
              className="max-h-full max-w-36 md:max-w-60"
            />
          </div>
          {/* Links */}
          <a
            href="https://www.anteus.com.br/"
            target="_blank"
            className="text-xl md:text-2xl font-bold col-start-2 col-span-1 row-start-1 row-span-1 hover:text-yellow-tsf transition"
          >
            Anteus Construtora e Incorporadora
          </a>
          <a
            href="http://www.cabralnatacao.com.br/"
            target="_blank"
            className="text-xl md:text-2xl font-bold col-start-2 col-span-1 row-start-2 row-span-1 hover:text-yellow-tsf transition"
          >
            Cabral Natação & Fitness
          </a>
          <a
            href="https://www.instagram.com/ecotenisclube/"
            target="_blank"
            className="text-xl md:text-2xl font-bold col-start-2 col-span-1 row-start-3 row-span-1 hover:text-yellow-tsf transition"
          >
            Eco Tênis Academia
          </a>
          <a
            href="https://www.masterkraft.com.br/"
            target="_blank"
            className="text-xl md:text-2xl font-bold col-start-2 col-span-1 row-start-4 row-span-1 hover:text-yellow-tsf transition"
          >
            Masterkraft Soluções em Embalagens
          </a>
          <a
            href="#"
            target="_blank"
            className="text-xl md:text-2xl font-bold col-start-2 col-span-1 row-start-5 row-span-1 hover:text-yellow-tsf transition"
          >
            Seguru Certo Corretora de Seguros
          </a>
          <a
            href="https://www.aguatimbu.com.br/"
            target="_blank"
            className="text-xl md:text-2xl font-bold col-start-2 col-span-1 row-start-6 row-span-1 hover:text-yellow-tsf transition"
          >
            Água Mineral Timbu
          </a>
          <a
            href="#"
            target="_blank"
            className="text-xl md:text-2xl font-bold col-start-2 col-span-1 row-start-7 row-span-1 hover:text-yellow-tsf transition"
          >
            WG Critical Care
          </a>
        </div>
      </div>
    </main>
  );
};

export default Patrocinadores;

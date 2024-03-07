import Title from "./Title";

const Patrocinadores = () => {
  return (
    <main className="w-full max-w-7xl m-auto overflow-x-hidden">
      <div className="w-full p-4 max-w-5xl mx-auto">
        <div className="my-12">
          <Title>NOSSOS PARCEIROS</Title>
        </div>
        <div className="grid grid-cols-2 place-items-center place-content-center gap-8">
          {/* <div className="h-32 col-start-1 col-end-2 flex items-center"> */}
          {/* <a href="https://celtacontainers.com.br/" target="_blank"> */}
          {/* <img src="celta.jpg" alt="logo Celta" className="max-h-full" /> */}
          {/* </a> */}
          {/* </div> */}
          {/* <div className="h-32 col-start-1 col-end-2 flex items-center"> */}
          {/* <a href="https://www.cronengenharia.com.br/" target="_blank"> */}
          {/* <img src="cron.jpg" alt="logo Cron" className="max-h-full" /> */}
          {/* </a> */}
          {/* </div> */}
          <div className="h-32 col-start-1 col-end-2 flex items-center">
            <img
              src="anteus.png"
              alt="Anteus construtora e incorporadora"
              className="max-h-full max-w-48"
            />
          </div>
          <div className="h-32 col-start-1 col-end-2 flex items-center">
            <img
              src="logo-eco.png"
              alt="logo Eco Tênis"
              className="max-h-full"
            />
          </div>
          <div className="h-32 col-start-1 col-end-2 flex items-center">
            <img
              src="jdl.png"
              alt="logo JDL Locações de Bens"
              className="max-h-full"
            />
          </div>
          <div className="h-32 col-start-1 col-end-2 flex items-center">
            <img
              src="wg.jpg"
              alt="logo WG Critical Care"
              className="max-h-full"
            />
          </div>
          {/* <a
            href="https://celtacontainers.com.br/"
            target="_blank"
            className="text-xl md:text-2xl font-bold col-start-2 col-span-1 row-start-1 row-span-1 hover:text-yellow-tsf transition"
          >
            Celta Containers
          </a>
          <a
            href="https://www.cronengenharia.com.br/"
            target="_blank"
            className="text-xl md:text-2xl font-bold col-start-2 col-span-1 row-start-2 row-span-1 hover:text-yellow-tsf transition"
          >
            Cron Engenharia Construtiva
          </a> */}
          <a
            href="https://www.anteus.com.br/"
            target="_blank"
            className="text-xl md:text-2xl font-bold col-start-2 col-span-1 row-start-1 row-span-1 hover:text-yellow-tsf transition"
          >
            Anteus Construtora e Incorporadora
          </a>
          <a
            href="https://www.instagram.com/ecotenisclube/"
            target="_blank"
            className="text-xl md:text-2xl font-bold col-start-2 col-span-1 row-start-2 row-span-1 hover:text-yellow-tsf transition"
          >
            Eco Tênis Academia
          </a>
          <a
            href="#"
            target="_blank"
            className="text-xl md:text-2xl font-bold col-start-2 col-span-1 row-start-3 row-span-1 hover:text-yellow-tsf transition"
          >
            JDL Locações de Bens
          </a>
          <a
            href="#"
            target="_blank"
            className="text-xl md:text-2xl font-bold col-start-2 col-span-1 row-start-4 row-span-1 hover:text-yellow-tsf transition"
          >
            WG Critical Care
          </a>
        </div>
      </div>
    </main>
  );
};

export default Patrocinadores;

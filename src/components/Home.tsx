// import pic10 from "../pictures/10.jpg";
import { Link } from "react-router-dom";
import Title from "./Title.tsx";

const Home = () => {
  return (
    <main className="w-full max-w-7xl m-auto">
      <div className="flex flex-col md:flex-row mb-12">
        <img
          src="/pictures/17.jpg"
          alt={"Crianças em quadra"}
          className="md:w-7/12 block m-auto shadow-md"
        />
        <div className="md:w-5/12 md:order-first flex flex-col justify-center gap-10 p-5">
          <Title>O PROJETO</Title>
          <div className="md:pl-20">
            O projeto Tênis Sem Fronteiras foi criado pela{" "}
            <span className="font-bold">Academia Tênis Integrativo</span> em
            parceria com a <span className="font-bold">Eco Tênis Academia</span>{" "}
            e visa proporcional uma atividade saudável e educativa para crianças
            da rede pública de ensino através de aulas de tênis
          </div>
          <Link
            to={"/participar"}
            className="bg-yellow-tsf text-white mx-auto text-lg font-bold rounded-xl p-3 hover:text-slate-700 transition shadow-md"
          >
            Como participar?
          </Link>
        </div>
      </div>

      {/* <div className="flex justify-evenly gap-16 mt-20 w-full h-24 md:h-28 overflow-hidden"> */}
      <div className="grid grid-cols-2 place-content-center place-items-center md:grid-cols-4 p-5 gap-16 my-20 w-full overflow-hidden">
        <img
          src="logo-ti.png"
          alt="Logo Tênis Integrativo"
          className="object-contain max-w-full col-span-1 md:col-span-2 h-32"
        />
        <img
          src="logo-eco.png"
          alt="Logo Eco Tênis"
          className="object-contain max-w-full col-span-1 md:col-span-2 h-32"
        />
        <img
          src="celta.jpg"
          alt="logo celta"
          className="object-contain max-w-full col-span-1 row-start-2 h-24"
        />
        <img
          src="cron.jpg"
          alt="logo cron"
          className="object-contain max-w-full col-span-1 row-start-2 h-24"
        />
        <img
          src="jdl.png"
          alt="logo JDL"
          className="object-contain max-w-full col-span-1 row-start-3 md:row-start-2 h-24"
        />
        <img
          src="wg.jpg"
          alt="logo WG"
          className="object-contain max-w-full col-span-1 row-start-3 md:row-start-2 h-24"
        />
      </div>

      <div className="flex flex-col md:h-[500px] md:flex-row mb-12 overflow-hidden">
        <div className="md:w-5/12">
          <img
            src="/pictures/7.jpg"
            alt={"Crianças em quadra"}
            className="block m-auto shadow-md max-h-full object-contain"
          />
        </div>
        <div className="md:w-7/12 flex flex-col justify-center gap-10 p-5">
          <Title>O TÊNIS</Title>
          <p className="md:pl-20">
            Como esporte, o tênis educa para a honestidade, responsabilidade e
            saúde, propicia diversão e hábitos de vida saudáveis como a prática
            de exercícios físicos regulares (o tênis é o esporte com o menor
            índice de evasão que se conhece) e é um excelente meio de
            relacionamento e formação de amigos.
          </p>
          <div>
            <h3 className="font-bold text-xl pl-5 md:pl-20 mb-2">
              Benefícios:
            </h3>
            <ul className="md:pl-[100px] list-disc">
              <li>Desenvolvimento físico e motor</li>
              <li>Melhora da autoestima através da competência esportiva</li>
              <li>Ocupação do tempo ocioso</li>
              <li>Ambiente seguro e educativo</li>
              <li>Interação social</li>
              <li>Desenvolvimento de valores éticos e sociais</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

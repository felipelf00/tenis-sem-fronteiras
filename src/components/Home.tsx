import { Link } from "react-router-dom";
import Title from "./Title.tsx";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  return (
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
          parceria com a <span className="font-bold">Eco Tênis Academia</span> e
          visa proporcionar uma atividade saudável e educativa para crianças da
          rede pública de ensino através de aulas de tênis
        </div>
        <Link
          to={"/participar"}
          className="bg-yellow-tsf text-white w-48 text-center animate-ping-small mx-auto text-lg font-bold rounded-xl p-3 hover:text-slate-700 transition shadow-md"
        >
          Como participar?
        </Link>
        <Link
          to={"/ajudar"}
          className="bg-blue-tsf text-white w-48 text-center animate-ping-small mx-auto text-lg font-bold rounded-xl p-3 hover:text-slate-700 transition shadow-md"
        >
          Como ajudar?
        </Link>
      </div>
    </div>
  );
};

const Sponsors = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const transformedProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  return (
    <motion.div
      style={{
        scale: transformedProgress,
        opacity: scrollYProgress,
      }}
      ref={ref}
      className="grid grid-cols-2 place-content-center place-items-center md:grid-cols-12 p-5 gap-16 my-20 w-full overflow-hidden"
    >
      <img
        src="logo-ti.png"
        alt="Logo Tênis Integrativo"
        className="object-contain max-w-40 md:max-w-56 col-span-2 md:col-start-1 md:col-span-4 h-32"
      />
      <img
        src="logo-eco.png"
        alt="Logo Eco Tênis"
        className="object-contain max-w-40 md:max-w-56 col-span-1 md:col-start-5 md:col-span-4 h-32 "
      />
      <img
        src="anteus.png"
        alt="Logo Anteus"
        className="object-contain max-w-40 md:max-w-56 col-span-1 md:col-start-9 md:col-span-4 h-32"
      />
      <img
        src="jdl.png"
        alt="logo JDL"
        className="object-contain max-w-40 md:max-w-56 md:row-start-2 col-span-1 md:col-start-1 md:col-span-3 h-32"
      />
      <img
        src="masterkraft.png"
        alt="logo Masterkraft"
        className="object-contain max-w-40 md:max-w-56 md:row-start-2 col-span-1 md:col-start-4 md:col-span-3 h-32"
      />
      <img
        src="timbu.png"
        alt="logo Timbu"
        className="object-contain max-w-40 md:max-w-56 md:row-start-2 col-span-1 md:col-start-7 md:col-span-3 h-32"
      />
      <img
        src="wg.jpg"
        alt="logo WG"
        className="object-contain max-w-40 md:max-w-56 md:row-start-2 col-span-1 md:col-start-10 md:col-span-3 h-32"
      />
    </motion.div>
  );
};

const Tenis = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.25 1"],
  });
  const transformedProgress = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <motion.div
      style={{
        x: transformedProgress,
        opacity: scrollYProgress,
      }}
      ref={ref}
      className="flex flex-col md:h-[500px] md:flex-row my-20 overflow-hidden"
    >
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
          saúde, propicia diversão e hábitos de vida saudáveis como a prática de
          exercícios físicos regulares (o tênis é o esporte com o menor índice
          de evasão que se conhece) e é um excelente meio de relacionamento e
          formação de amigos.
        </p>
        <div>
          <h3 className="font-bold text-xl pl-5 md:pl-20 mb-2">Benefícios:</h3>
          <ul className="pl-5 md:pl-[100px] list-disc">
            <li>Desenvolvimento físico e motor</li>
            <li>Melhora da autoestima através da competência esportiva</li>
            <li>Ocupação do tempo ocioso</li>
            <li>Ambiente seguro e educativo</li>
            <li>Interação social</li>
            <li>Desenvolvimento de valores éticos e sociais</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Metodo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.4 1"],
  });
  const transformedProgress = useTransform(scrollYProgress, [0, 1], [200, 0]);

  return (
    <motion.div
      style={{
        x: transformedProgress,
        opacity: scrollYProgress,
      }}
      ref={ref}
      className="flex flex-col md:flex-row my-20 md:my-32"
    >
      <img
        src="/pictures/24.jpg"
        alt={"Crianças em quadra"}
        className="md:w-7/12 block m-auto shadow-md"
      />
      <div className="md:w-5/12 md:order-first flex flex-col justify-center gap-10 p-5">
        <Title size="m">PROPOSTA METODOLÓGICA</Title>
        <ul className="pl-5 md:pl-[100px] list-disc">
          <li>
            Turmas com até 6 crianças divididas por faixa-etária: 5 a 6 anos, 7
            a 8 anos, 9 a 10 anos
          </li>
          <li>Processo seletivo para crianças da rede pública de ensino</li>
          <li>Frequência de uma vez na semana</li>
          <li>
            Método <span className="italic">Play and Stay</span>, desenvolvido
            pela Federação Internacional de Tênis (ITF)
          </li>
          <li>Professores formados em Educação Física</li>
        </ul>
      </div>
    </motion.div>
  );
};

const Locais = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.4 1"],
  });
  const transformedProgress = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <motion.div
      style={{
        x: transformedProgress,
        opacity: scrollYProgress,
      }}
      ref={ref}
      className="flex flex-col-reverse md:h-[500px] md:flex-row my-20 overflow-hidden"
    >
      <div className="md:w-7/12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14415.738337277984!2d-49.3618332!3d-25.4070002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce581d4fabe35%3A0xf1a6f63ce331de54!2sEco%20T%C3%AAnis%20Academia!5e0!3m2!1spt-BR!2sbr!4v1706131208992!5m2!1spt-BR!2sbr"
          className="w-full h-80 md:w-[600px] md:h-[450px] p-4 shadow-md"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="md:w-5/12 flex flex-col justify-center gap-10 p-5">
        <Title>LOCAL</Title>
        <div>
          <p className="md:pl-20 font-bold">Eco Tênis Academia</p>
          <p className="md:pl-20">
            R. Brasílio Cuman, 1324 - São Braz, Curitiba - PR, 82315-010
          </p>
          <p className="md:pl-20">
            Telefones: (41) 99131-9654 – (41) 98807-4002
          </p>
        </div>
        <p className="md:pl-20">
          <span className="font-bold">Coordenação</span>: Tênis Integrativo –
          Eduardo Figueiredo
        </p>
      </div>
    </motion.div>
  );
};

const Home = () => {
  return (
    <main className="w-full h-full max-w-7xl m-auto overflow-x-hidden">
      <Hero />
      <Sponsors />
      <Tenis />
      <Metodo />
      <Locais />
    </main>
  );
};

export default Home;

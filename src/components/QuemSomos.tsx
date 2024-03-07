import images from "../imageList.ts";
import ImageSlider from "./ImageSlider";
import Title from "./Title";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Quem = () => {
  return (
    <div className="flex flex-col md:flex-row mb-12">
      <img
        src="/tenissemfronteiras.svg"
        alt="Logo Tênis Sem Fronteiras"
        className="md:w-5/12 block m-auto p-10 h-96 w-auto"
      />
      <div className="md:w-7/12 order-first flex flex-col justify-center gap-10 p-5">
        <div className="mt-12">
          <Title>QUEM SOMOS</Title>
        </div>
        <div className="md:pl-20">
          <p className="indent-8">
            O projeto Tênis Sem Fronteiras tem o objetivo de, por meio do
            esporte, proporcionar oportunidades para as crianças da comunidade
            local se envolverem em atividades esportivas e educativas, num
            ambiente seguro e acolhedor, tendo as chances de conviver no meio
            esportivo saudável e aprenderem o esporte melhorando a qualidade de
            vida e perspectivas futuras.
          </p>
          <br />
          <p className="indent-8">
            Além de oferecer oportunidades de inclusão e convívio entre crianças
            de diferentes classes sociais, de ocupação do tempo ocioso com
            atividade educativa, e de desenvolvimento esportivo, o tênis pode
            ainda abrir outras portas na vida dessas crianças, seja
            proporcionando uma carreira de atleta, ou futuros professores, ou
            até mesmo outras profissões antes não sonhadas.
          </p>
          <br />
          <p className="indent-8">
            A atividade física e o esporte contribuem para o desenvolvimento
            cognitivo e motor, melhora a autoestima através da competência
            esportiva e desenvolve valores éticos, morais e sociais. Dessa
            forma, cada criança que participa do projeto pode, futuramente, vir
            a tornar-se um agente de mudança não apenas da sua vida, mas também
            na sua própria comunidade.
          </p>
        </div>
      </div>
    </div>
  );
};

const Metodologia = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.5 1"],
  });
  const transformedProgress = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <motion.div
      style={{
        x: transformedProgress,
        opacity: scrollYProgress,
      }}
      ref={ref}
      className="p-5"
    >
      <Title size="m">METODOLOGIA</Title>
      <div className="py-5 md:p-20">
        <p className="indent-8">
          Para o início do projeto foram selecionadas escolas da rede pública de
          ensino, utilizando o critério de proximidade ao local da realização do
          projeto.
        </p>
        <br />
        <p className="indent-8">
          Após a divulgação na rede de ensino as famílias das crianças
          interessadas as inscrevem na secretaria das sedes do projeto. As
          crianças recebem uma hora de aula de tênis por semana. As turmas são
          compostas por até 6 crianças divididas por faixa-etária, das seguintes
          formas:
        </p>
        <br />

        <ul className="pl-5 md:pl-[100px] list-disc">
          <li>
            5/6 anos – bola vermelha (bolas 75% mais lentas e quadras de 12m x
            6m);
          </li>
          <li>
            7/8 anos – bola laranja (bolas 50% mais lentas e quadras de 18m x
            6,5m);
          </li>
          <li>
            9/10 anos – bola laranja/verde (bolas 25% mais lentas e quadra
            oficial).
          </li>
        </ul>
        <br />
        <p className="indent-8">
          Cada turma terá um professor de tênis graduado em educação física e
          devidamente capacitado para o trabalho com tênis infantil.
        </p>
        <br />
        <p className="indent-8">
          As aulas do projeto serão desenvolvidas através do método Play and
          Stay da Federação Internacional de Tênis (ITF), que possibilita que a
          criança consiga jogar desde a primeira aula. O lema é “saque, troque
          bolas e pontue”. Com materiais adaptados (bolas mais lentas, raquetes
          de cabo curto e leves e quadras menores) a criança consegue realizar
          as atividades desde a primeira aula, sentindo-se capaz e motivada a
          continuar no esporte.
        </p>
      </div>
    </motion.div>
  );
};

const Equipe = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.7 1"],
  });
  const transformedProgress = useTransform(scrollYProgress, [0, 1], [200, 0]);

  return (
    <motion.div
      style={{
        x: transformedProgress,
        opacity: scrollYProgress,
      }}
      ref={ref}
      className="flex flex-col md:h-[500px] md:flex-row mb-12"
    >
      <div className="md:w-5/12">
        <img
          src="/pictures/equipe.jpg"
          alt={"Equipe"}
          className="block m-auto shadow-md max-h-full object-contain"
        />
      </div>
      <div className="md:w-7/12 p-5">
        <Title>EQUIPE</Title>
        <p className="md:pl-20 mt-8 indent-8">
          O projeto é coordenado pelo prof. Eduardo Carlos Gonçalves Figueiredo,
          formado em Educação Física pela UFPR, pós-graduado em Fisiologia do
          Exercício pela PUC-PR e em Exercício e Saúde pela UFPR, mestre em
          Educação Física pela UFPR na área de Psicologia do Esporte, Técnico
          Master da CBT, níveis 1 e 2 da ITF e licença A, B e C da Confederação
          Alemã de Tênis, ex-jogador e professor desde 1979.
        </p>
        <br />
        <p className="md:pl-20 indent-8">
          Além disso integram também o projeto os professores Mauricio Negoseki
          Da Silva, graduado em Educação Física pela Unicesumar e Fabrycio
          Watrich, estudante de Educação Física na Universidade Positivo. Ambos
          são professores certificados pela Confederação Brasileira de Tênis.
        </p>
      </div>
    </motion.div>
  );
};
const QuemSomos = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const transformedProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <main className="w-full h-full max-w-7xl m-auto overflow-x-hidden">
      <Quem />
      <motion.div
        style={{
          scale: transformedProgress,
          opacity: scrollYProgress,
        }}
        ref={ref}
      >
        <ImageSlider images={images} />
      </motion.div>
      <Metodologia />
      <Equipe />
    </main>
  );
};

export default QuemSomos;

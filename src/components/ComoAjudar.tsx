import Title from "./Title.tsx";
import { Link } from "react-router-dom";

const ComoAjudar = () => {
  return (
    <main className="w-full h-full min-h-screen max-w-7xl mx-auto overflow-x-hidden">
      <div className="w-[690px] mx-auto">
        <div className="my-12">
          <Title>COMO AJUDAR</Title>
        </div>
        <p>Esta área do site está em construção.</p>
        <br />
        <p>
          Para mais informações, entre em{" "}
          <Link
            className="font-semibold text-blue-tsf hover:text-yellow-tsf transition"
            to="/contato"
          >
            contato
          </Link>{" "}
          ou acesse o nosso{" "}
          <Link
            className="font-semibold text-blue-tsf hover:text-yellow-tsf transition"
            to="http://campanhadobem.com/tenis-sem-fronteiras-educacao-e-inclusao-social-atraves-do-tenis"
          >
            financiamento coletivo
          </Link>
          .
        </p>
      </div>
    </main>
  );
};

export default ComoAjudar;

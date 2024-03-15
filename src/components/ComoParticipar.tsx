import { Link } from "react-router-dom";
import Title from "./Title.tsx";

const ComoParticipar = () => {
  return (
    <main className="w-full h-full min-h-screen max-w-7xl mx-auto overflow-x-hidden">
      <div className="w-4xl mx-auto p-5">
        <div className="my-12">
          <Title>COMO PARTICIPAR</Title>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="md:w-1/2">
            <h4 className="text-xl font-bold mb-4">Requisitos:</h4>
            <p>
              Para participar do projeto Tênis Sem Fronteiras, a criança deve
              ter no máximo 10 anos completados em 2024 e estudar em escola
              publica.
            </p>
            <br />
            <h4 className="text-xl font-bold mb-4">Inscrições:</h4>
            <p>
              Para se inscrever, basta preencher o formulário de inscrição
              através do botão ou QR Code abaixo. Havendo vagas disponíveis,
              entraremos em contato informando os próximos passos. Todo o
              material para as aulas será fornecido pelo projeto.
            </p>
            <div className="flex flex-col md:flex-row my-10 gap-6 justify-around items-center">
              <Link
                to="https://forms.office.com/r/HwnnnRaBtd"
                className="bg-yellow-tsf text-white w-48 text-center text-lg font-bold rounded-xl p-3 hover:text-slate-700 transition shadow-md"
              >
                Inscrições
              </Link>
              <img src="/qr-code.png" className="max-w-56" />
            </div>
          </div>
          <div className="md:w-1/2 flex items-center">
            <img
              src="/pictures/5.jpg"
              alt="Crianças em quadra"
              className="object-contain shadow-md"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ComoParticipar;

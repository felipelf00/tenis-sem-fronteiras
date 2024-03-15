import Title from "./Title.tsx";
import { Link } from "react-router-dom";

const ComoAjudar = () => {
  return (
    <main className="w-full h-full min-h-screen max-w-7xl mx-auto overflow-x-hidden">
      <div className="w-4xl mx-auto p-5">
        <div className="my-12">
          <Title>COMO AJUDAR</Title>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="md:w-1/2">
            <p>
              O Tênis Sem Fronteiras depende de apoiadores para realizar suas
              atividades. Você pode contribuir de diversas formas:
            </p>
            <br />
            <h4 className="text-xl font-bold mb-4">
              Pessoas físicas e jurídicas:
            </h4>
            <p>
              A melhor forma de contribuir é adotar uma turma mensalmente, o
              valor é R$520,00 mensais por turma e a contribuição é de março a
              dezembro. Também é possível patrocinar meia turma.
            </p>
            <br />
            <p>
              <a
                className="font-semibold text-blue-tsf hover:text-yellow-tsf transition"
                href="/documents/termo-de-compromisso-patrocinadores.docx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clique aqui
              </a>{" "}
              para consultar nosso termo de compromisso.
            </p>
            <br />
            <p>
              Caso queira colaborar de forma pontual ou esporádica, temos o
              nosso financiamento coletivo pela plataforma Campanha do Bem.
            </p>
            <br />
            <p>
              <Link
                className="font-semibold text-blue-tsf hover:text-yellow-tsf transition"
                to="http://campanhadobem.com/tenis-sem-fronteiras-educacao-e-inclusao-social-atraves-do-tenis"
              >
                Clique aqui
              </Link>{" "}
              para acessar a página do nosso financiamento coletivo.
            </p>
            <br />
            <h4 className="text-xl font-bold mb-4">Escolas:</h4>
            <p>
              O projeto também realiza parcerias com escolas visando alcançar
              alunos sem nenhum tipo de custo para a escola ou para as famílias.
            </p>
            <br />
            <p>
              <a
                className="font-semibold text-blue-tsf hover:text-yellow-tsf transition"
                href="/documents/termo-de-parceria-escolas.docx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clique aqui
              </a>{" "}
              para consultar o termo de parceria com escolas.
            </p>
          </div>
          <div className="md:w-1/2 flex items-center">
            <img src="/pictures/8.jpg" className="object-contain shadow-md" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ComoAjudar;

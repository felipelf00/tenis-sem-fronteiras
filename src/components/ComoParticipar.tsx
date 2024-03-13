import { Link } from "react-router-dom";

const ComoParticipar = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl">Em breve!</h1>
      <br />
      <p>
        Para mais informações, entre em{" "}
        <Link
          to="/contato"
          className="font-semibold text-blue-tsf hover:text-yellow-tsf transition"
        >
          contato
        </Link>
        .
      </p>
    </main>
  );
};

export default ComoParticipar;

import Title from "./Title";

const Contato = () => {
  return (
    <main className="w-full h-full min-h-screen max-w-7xl m-auto overflow-x-hidden">
      <div className="md:w-[690px] mx-auto p-5">
        <div className="my-12">
          <Title>CONTATO</Title>
        </div>
        <div className="text-lg md:text-2xl flex items-center gap-4 mb-10">
          <strong>Telefone: </strong>(41) 98807-4002
          <a href="https://wa.me/5541988074002" target="_blank">
            <img src="whatsapp.png" className="h-12 inline" />
          </a>
        </div>
        <p>Se preferir, preencha seus dados e nós entraremos em contato:</p>

        <form
          className="contact-form flex flex-col my-4"
          action="https://formsubmit.co/2dfeb9f5e70934193b23681d9161f2be"
          method="POST"
        >
          <label htmlFor="name" className="block my-2 font-bold">
            Nome
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight"
            type="text"
            id="name"
            name="name"
            required
          />
          <label htmlFor="email" className="block my-2 font-bold">
            E-mail
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight"
            type="email"
            id="email"
            name="email"
            required
          />
          <label htmlFor="phone" className="block my-2 font-bold">
            Telefone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight"
            type="tel"
            id="phone"
            name="phone"
            required
          />
          <label htmlFor="message" className="block my-2 font-bold">
            Sua mensagem
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight"
            rows={5}
            id="message"
            name="message"
            placeholder="Sua mensagem"
            required
          />
          <button
            type="submit"
            className="bg-blue-tsf text-white hover:text-slate-700 transition shadow-md font-bold py-2 px-4 my-8 mx-auto rounded-xl w-32"
          >
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contato;

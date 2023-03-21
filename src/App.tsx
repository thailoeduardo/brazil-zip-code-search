import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";

// interface zipCode {}= string;

interface infoAdreess {
	bairro: string;
	cep: string;
	complemento: string;
	ddd: string;
	gia: string;
	ibge: string;
	localidade: string;
	logradouro: string;
	siafi: string;
	uf: string;
}

function App() {
  const [zipCode, setZipCode] = useState("");
  const [addreess, setAddreess] = useState({});

	//
	const getAddressApi = (cep: string) => {
		axios
		.get(`https://viacep.com.br/ws/${cep}/json/`)
		.then((response) => setAddreess(response.data))
		.catch((err) => {
			console.error("ops! ocorreu um erro" + err);
		});
	}

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

		const teste = getAddressApi(zipCode)

    console.log(zipCode);
    console.log(addreess);

		
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <form
          onSubmit={handleSubmit}
          action=""
          method="post"
          className="flex gap-3 border p-3"
        >
          <input
            id="email-address"
            name="zipcode"
            type="text"
            autoComplete=""
            required
            className="relative block w-72 border-0 p-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Digite o CEP"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <button
            type="submit"
            className="group relative flex justify-center bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Pesquisar
          </button>
        </form>

				<div className="w-1/2 md:max-w-7xl border p-3 mt-5">
				<p>
				<strong>Rua:</strong> Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Dolorum, quo!
				</p>
				<p>
				<strong>Estado:</strong> Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Dolorum, quo!
				</p>
				<p>
				<strong>País:</strong> Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Dolorum, quo!
				</p>
				<p>
				<strong>Logradouro:</strong> Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Dolorum, quo!
				</p>
				</div>			
       
      </div>
    </>
  );
}

export default App;

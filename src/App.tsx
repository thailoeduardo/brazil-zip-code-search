import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import appLogo from "./assets/map-maker.svg";
import api from "./services/api";
import Text from "./components/Text";
import MessageError from "./components/MessageError";

// // interface zipCode {}= string;

interface InfoZipCode {
  bairro?: string;
  cep?: string;
  localidade?: string;
  logradouro?: string;
  uf?: string;
}

function App() {
  const [zipCode, setZipCode] = useState("");
  const [ErrorZipCode, setErrorZipCode] = useState(false);
  const [messageErrorZipCode, setMessageErrorZipCode] = useState("");
  const [contentZipCode, setContentZipCode] = useState<InfoZipCode>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (zipCode === "") {
      setErrorZipCode(true);
      setMessageErrorZipCode("CEP não preenchido!");
      setZipCode("");

      return;
    }

    try {
      const responseZipCode = await api.get(`${zipCode}/json/`);

      setContentZipCode(responseZipCode.data);
      setErrorZipCode(false);
      setZipCode("");
    } catch (error) {
      setErrorZipCode(true);
      setMessageErrorZipCode("CEP não encontrado!");
      setZipCode("");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <img src={appLogo} alt="" width={100} height={100} className="mb-5" />

        {ErrorZipCode == true && <MessageError message={messageErrorZipCode} />}

        <form
          onSubmit={handleSubmit}
          action=""
          method="post"
          className="flex gap-3 p-3 "
        >
          <input
            id="email-address"
            name="zipcode"
            type="text"
            autoComplete=""
            className="relative block w-72 border-0 bg-[#e8e8e8] rounded-lg p-3 text-[#090909]"
            placeholder="Digite o CEP"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />

          <button
            type="submit"
            className="flex justify-center items-center py-2 px-10 rounded-lg bg-[#e8e8e8] text-[#090909]"
          >
            Search
          </button>
        </form>

        {Object.keys(contentZipCode).length > 0 && (
          <div className="w-1/2 md:max-w-7xl border p-3 mt-5">
            <Text title="CEP" description={contentZipCode.cep} />
            <Text title="Logradouro" description={contentZipCode.logradouro} />
            <Text title="Bairro" description={contentZipCode.bairro} />
            <Text title="Localidade" description={contentZipCode.localidade} />
            <Text title="Estado" description={contentZipCode.uf} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;

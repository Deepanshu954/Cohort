import { Button } from "../component/Button";
import { Input } from "../component/Input";
import { Header } from "../component/Header";

export function Home({ onContinue }) {
  return (
    <div className="text-white grid grid-rows-20 h-screen bg-[#002a5a]">
      <Header />

      <div className="text-3xl row-8 flex justify-center ">Verify Your Age</div>

      <div className="text-md row-10 flex justify-center text-gray-500 ml-5">
        Please confirm your birth year. This data will not be stored.
      </div>

      <div className="row-11 flex justify-center ">
        <Input type="text" placeholder="Your Birth Year"></Input>
      </div>
      <div className="row-12 flex justify-center mt-1">
        <Button onClick={onContinue}>Continue</Button>
      </div>
    </div>
  );
}
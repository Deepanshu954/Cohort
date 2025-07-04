import { Button } from "../component/Button";
import { Input } from "../component/Input";
import { Header } from "../component/Header";

export function LogIn({ onContinue }) {
  return (
    <div className="text-white grid grid-rows-20 h-screen bg-[#002a5a]">
      <Header />

      <div className="text-3xl row-8 flex justify-center ">
        Let's Get Started
      </div>

      <div className="row-10 flex justify-center ">
        <Input type="text" placeholder="Email Id"></Input>
      </div>

      <div className="row-11 flex justify-center mt-1">
        <Button onClick={onContinue}>Continue</Button>
      </div>
    </div>
  );
}
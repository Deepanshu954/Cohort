import { Button } from "../component/Button";
import { OTP } from "../component/OTP";
import { Header } from "../component/Header";

export function LogInOtp({ onVerify }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-4 h-screen bg-[#002a5a] ">
      <Header />
      {/* Subheading */}
      <div className="text-2xl sm:text-3xl mb-2 text-center">
        Check Your Email For A Code
      </div>

      {/* Description */}
      <div className="text-md text-gray-400 mb-6 text-center max-w-md">
        Please enter the verification code sent to your email ID.
      </div>

      {/* OTP Component */}
      <div className="mb-6">
        <OTP />
      </div>
      <Button onClick={onVerify} className="mb-4">Verify</Button>
      {/* Resend Option */}
      <div className="text-sm text-gray-500 text-center cursor-pointer hover:text-white">
        Can't find the email? <span className="underline">Click here to resend.</span>
      </div>
    </div>
  );
}
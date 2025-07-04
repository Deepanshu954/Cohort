import { useRef, forwardRef } from "react";
import { Button } from "../component/Button"

export function OTP() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();


  return (
    <div>
        <div className="flex justify-center">
          <SubOtpBox ref={ref1} onDone={() => ref2.current.focus()} />
          <SubOtpBox ref={ref2} onDone={() => ref3.current.focus()} />
          <SubOtpBox ref={ref3} onDone={() => ref4.current.focus()} />
          <SubOtpBox ref={ref4} onDone={() => ref5.current.focus()} />
          <SubOtpBox ref={ref5} onDone={() => ref6.current.focus()} />
          <SubOtpBox ref={ref6} onDone={{}} />
        </div>
      </div>
  );
}

const SubOtpBox = forwardRef(function SubOtpBox({ onDone }, ref) {
  return (
    <div>
      <input
        ref={ref}
        maxLength={1}
        onChange={(e) => {
          if (e.target.value.length === 1) {
            onDone(); // 👈 Now it works!
          }
        }}
        type="text"
        className="w-[40px] h-[50px] text-center px-4 rounded-2xl bg-[#18406a] m-1 text-white outline-none"
      />
    </div>
  );
});
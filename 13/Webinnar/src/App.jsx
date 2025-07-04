import { useState } from "react";
import { Home } from "./pages/Home";
import { LogIn } from "./pages/LogIn";
import { LogInOtp } from "./pages/LogInOtp";
import { Dashboard } from "./pages/Dashboard";


export default function App()
{
  const [page, setPage] = useState(1);

  return (
    <div className = "">

      {page === 1 && <Home onContinue={() => setPage(2)} />}
      {page === 2 && <LogIn onContinue={() => setPage(3)} />}
      {page === 3 && <LogInOtp onVerify={() => setPage(4)} />}
      {page === 4 && <Dashboard />}

    </div>
  );
}



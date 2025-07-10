import { BrowserRouter, Routes, Route, /* Link, useNavigate, Outlet */} from "react-router-dom";
import { Layout } from "../ui/Layout";
import { Tweets } from "../ui/Tweets";
import { Videos } from "../ui/Videos";
import { Documents } from "../ui/Documents";
import { Links } from "../ui/Links";
import { Tags } from "../ui/Tags";
import { ErrorPage } from "../ui/ErrorPage";

export function Home()
{
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<Layout />}>
                        <Route path = "/Tweets" element = {<Tweets />} />
                        <Route path = "/Videos" element = {<Videos />} />
                        <Route path = "/Documents" element = {<Documents />} />
                        <Route path = "/Links" element = {<Links />} />
                        <Route path = "/Tags" element = {<Tags />} />
                        <Route path = "*" element = {<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

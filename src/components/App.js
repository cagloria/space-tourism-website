import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";
// import { GlobalStyle } from "./Theme";

export default function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/destination" element={<Destination />} />
                    <Route path="/crew" element={<Crew />} />
                    <Route path="/technology" element={<Technology />} />
                </Routes>
            </main>
        </>
    );
}

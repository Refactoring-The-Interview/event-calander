import { Route, Routes } from "react-router-dom";
import { Paths } from "../../Apis/Types";
import { Home } from "../Home/Home";

export const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path={Paths.home} element={<Home />} />
            </Routes>
        </div>
    );
};

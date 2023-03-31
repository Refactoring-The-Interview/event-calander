import { Route, Routes } from "react-router-dom";
import { Paths } from "../../Apis/Types";
import { MyCalenderProvider } from "../Context/CalenderContext";
import { EditEventPage } from "../EditEventPage/EditEventPage";
import { EventCalender } from "../EventCalender/EventCalender";
import { EventPage } from "../EventPage/EventPage";
import { Home } from "../Home/Home";
import { NavBar } from "../NavBar/NavBar";
import "./AppS.scss";

export const App = () => {
    return (
        <div className="App">
            <MyCalenderProvider>
                <NavBar />
                <Routes>
                    <Route path={Paths.EditEvent} element={<EditEventPage />} />
                    <Route path={Paths.EventInfo} element={<EventPage />} />
                    <Route path={Paths.HOME} element={<Home />} />
                    <Route
                        path={Paths.EVENTCALENDER}
                        element={<EventCalender />}
                    />
                </Routes>
            </MyCalenderProvider>
        </div>
    );
};

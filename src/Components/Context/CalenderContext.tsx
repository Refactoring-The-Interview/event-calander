import { ReactNode, createContext } from "react";
import { EventDay } from "../../Apis/Types";
import { useCalenderEvents } from "./useCalenderEvents";

export interface CalenderContext {
    events: EventDay[];
    setEvents(events: EventDay[]): void;
}

export const MyCalenderContext = createContext<CalenderContext>({
    events: [],
    setEvents: () => {},
});

interface Props {
    children: ReactNode;
}

export const MyCalenderProvider = ({ children }: Props) => {
    const { events, setEvents } = useCalenderEvents();
    return (
        <MyCalenderContext.Provider
            value={{
                events,
                setEvents,
            }}
        >
            {children}
        </MyCalenderContext.Provider>
    );
};

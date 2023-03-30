// todo make uniform style
export enum Paths {
    HOME = "/HOME",
    EVENTCALENDER = "/EVENTCALENDER",
    EventInfo = "/EventInfo/:eventId",
}

export interface EventDay {
    dayId: string;
    date: number;
    day: string;
    events: Event[];
}

export interface Event {
    eventId: string;
    eventName: string;
    joined: string[];
    description: string;
    location: string;
    eventLeader: string;
    otherInfo: any;
    startTime: string;
    endTime: string;
}

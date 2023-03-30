export enum Paths {
    HOME = "/HOME",
    EVENTCALENDER = "/EVENTCALENDER",
    EventInfo = "/EventInfo/:EventInfoId",
}

export interface EventDay {
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
}

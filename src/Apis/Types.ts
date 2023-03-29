export enum Paths {
    HOME = "/HOME",
    EVENTCALENDER = "/EVENTCALENDER",
}

export interface EventDay {
    date: number;
    day: string;
    events: Event[];
}

export interface Event {
    eventName: string;
    joined: string[];
    description: string;
    location: string;
    eventLeader: string;
    otherInfo: any;
}

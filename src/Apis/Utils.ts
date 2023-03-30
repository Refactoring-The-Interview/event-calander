import { faker } from "@faker-js/faker";
import { EventDay, Paths } from "./Types";

// gets the amount of days in the given month
export const GetDateCount = () => {
    const date = new Date();
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;

    return new Date(year, month, 0).getDate();
};

// Creates a set of dummy events for the given month
export const DummyEvents = () => {
    const daysOfMonth = GetDateCount();
    const events = [];

    for (let i = 0; i < daysOfMonth; i += 1) {
        const dayId = i.toString();
        const day: EventDay = {
            dayId: dayId,
            date: i + 1,
            day: "Monday",

            events: [
                {
                    eventId: Math.random().toString(),
                    eventName: faker.lorem.word(),
                    joined: [
                        faker.name.fullName(),
                        faker.name.fullName(),
                        faker.name.fullName(),
                    ],
                    description: faker.lorem.paragraph(),
                    location: faker.address.streetAddress(),
                    eventLeader: faker.name.fullName(),
                    otherInfo: null,
                    startTime: "1pm",
                    endTime: "4pm",
                },
                {
                    eventId: Math.random().toString(),
                    eventName: faker.lorem.word(),
                    joined: [
                        faker.name.fullName(),
                        faker.name.fullName(),
                        faker.name.fullName(),
                    ],
                    description: faker.lorem.paragraph(),
                    location: faker.address.streetAddress(),
                    eventLeader: faker.name.fullName(),
                    otherInfo: null,
                    startTime: "1pm",
                    endTime: "4pm",
                },
                {
                    eventId: Math.random().toString(),
                    eventName: faker.lorem.word(),
                    joined: [
                        faker.name.fullName(),
                        faker.name.fullName(),
                        faker.name.fullName(),
                    ],
                    description: faker.lorem.paragraph(),
                    location: faker.address.streetAddress(),
                    eventLeader: faker.name.fullName(),
                    otherInfo: null,
                    startTime: "1pm",
                    endTime: "4pm",
                },
            ],
        };
        events.push(day);
    }
    return events;
};

// generates a path for Event page
export const pathGenEvent = {
    [Paths.EventInfo]: (eventId: string) => `/EventInfo/${eventId}`,
};

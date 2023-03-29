import { faker } from "@faker-js/faker";
import { EventDay } from "./Types";

export const GetDateCount = () => {
    const date = new Date();
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;

    return new Date(year, month, 0).getDate();
};

export const DummyEvents = () => {
    const daysOfMonth = GetDateCount();
    const events = [];

    for (let i = 0; i < daysOfMonth; i += 1) {
        const day: EventDay = {
            date: i + 1,
            day: "Monday",

            events: [
                {
                    eventName: faker.lorem.word(),
                    joined: [
                        faker.name.fullName(),
                        faker.name.fullName(),
                        faker.name.fullName(),
                    ],
                    description: faker.lorem.sentence(),
                    location: faker.address.streetAddress(),
                    eventLeader: faker.name.fullName(),
                    otherInfo: null,
                },
                {
                    eventName: faker.lorem.word(),
                    joined: [
                        faker.name.fullName(),
                        faker.name.fullName(),
                        faker.name.fullName(),
                    ],
                    description: faker.lorem.sentence(),
                    location: faker.address.streetAddress(),
                    eventLeader: faker.name.fullName(),
                    otherInfo: null,
                },
                {
                    eventName: faker.lorem.word(),
                    joined: [
                        faker.name.fullName(),
                        faker.name.fullName(),
                        faker.name.fullName(),
                    ],
                    description: faker.lorem.sentence(),
                    location: faker.address.streetAddress(),
                    eventLeader: faker.name.fullName(),
                    otherInfo: null,
                },
            ],
        };
        events.push(day);
    }
    return events;
};

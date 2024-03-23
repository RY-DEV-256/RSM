export const menu = [
    {
        id: 1,
        title: "Page",
        listItem: [
            {
                id: 1,
                title: "Dashbord",
                path: "/dashboard",
                icon: null
            }],
    },
    {
        id: 2,
        title: "Manage",
        listItem: [
            {
                id: 1,
                title: "Administrators",
                path: "/dashboard/administrators",
                icon: null
            },
            {
                id: 2,
                title: "Students",
                path: "/dashboard/students",
                icon: null
            },
        ],
    },
    {
        id: 3,
        title: "Manage",
        listItem: [
            {
                id: 1,
                title: "faculties",
                path: "/dashboard/faculties",
                icon: null
            },
            {
                id: 2,
                title: "departments",
                path: "/dashboard/departments",
                icon: null
            },
            {
                id: 3,
                title: "Programs",
                path: "/dashboard/programs",
                icon: null
            },
            {
                id: 4,
                title: "year",
                path: "/dashboard/year",
                icon: null
            },
            {
                id: 5,
                title: "chats",
                path: "/dashboard/chats",
                icon: null
            },
            {
                id: 6,
                title: "Comments",
                path: "/dashboard/comments",
                icon: null
            },
            {
                id: 7,
                title: "Inquiries",
                path: "/dashboard/inquiries",
                icon: null
            },
            {
                id: 8,
                title: "Proposals",
                path: "/dashboard/proposals",
                icon: null
            },
            {
                id: 9,
                title: "Modules",
                path: "/dashboard/modules",
                icon: null
            },
        ],
    },
];

export interface Administrators {
    id: number;
    name: string;
    email: string;
    phone: string;
    role: string;
    password: string;
};

export const defaultAdministrator: Administrators[] = [
    {
        id: 1,
        name: "Yiga Richard",
        email: "yiga@gmail.com",
        phone: "0782569870",
        role: "HOD",
        password: "yiga"
    },
    {
        id: 2,
        name: "Sam",
        email: "sam@gmail.com",
        phone: "0782569870",
        role: "Dean",
        password: "sam"
    },
    {
        id: 3,
        name: "Juliet",
        email: "juliet@gmail.com",
        phone: "0782569870",
        role: "Lecturer",
        password: "jj"
    }
];


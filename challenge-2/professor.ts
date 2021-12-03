interface Professor {
    id: string;
    name: string;
    faculty: string;
    phone: string;
    email: string;
    subjects: {
        [name: string]: {
            professors: Professor[];
            students: Student[];
            lectures: [
                {
                    date: Date;
                    duration: number;
                    classroom: string;
                }
            ];
        };
    };
}



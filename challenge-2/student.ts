interface Student {
    id: string;
    name: string;
    degree: string;
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
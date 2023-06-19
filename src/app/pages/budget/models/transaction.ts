export interface Transaction {
    id: number;
    date: string;
    description: string;
    amount: number;
    category: {
        id: number;
        name: string;
    };
    type: string;
}

export interface ICard {
    id: string;
    title: string;
    cardNumber: string;
    name: string;
    dueDate: string;
    category: string;
    fav: boolean;
    picture: string | null;
    notes: string;
    issuer: string;
}

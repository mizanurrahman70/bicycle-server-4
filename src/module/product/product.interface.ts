export interface Iproduct {
    name: string;
    brand: string;
    price: number;
    type: "Mountain" | "Road" | "Hybrid" | "Electric"|'BMX';
    description: string;
    quantity: number;
    inStock: boolean;
}
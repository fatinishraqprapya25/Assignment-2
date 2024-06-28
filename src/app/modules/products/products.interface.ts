
export interface Variant {
    type: string;
    value: string;
}

export interface Inventory {
    quantity: number;
    inStock: true;
}

export interface Products {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: Variant[];
    inventory: Inventory;
}

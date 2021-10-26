import { Comparable } from '../interfaces/Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    private static numberOfItems: number;
    private id: number;
    private value: number;
    private name: string;
    private weight: number;

    protected constructor(name: string, value: number, weight: number) {
        Item.numberOfItems = id; // static getter property which returns “counter”

        this.id = id;
        this.name = name;
        this.value = value;
        this.weight = weight;

        id++;
    }

    public compareTo(other: Item): number {
        const value = other.getValue();
        const name = other.getName();

        if (this.value == value) {
            return this.name.toLowerCase().localeCompare(name.toLowerCase())
        }

        return this.value > value ? 1 : -1
    }

    public abstract use(): void

    public abstract polish(): void

    public abstract eat(): void

    public toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight.toFixed(2)}`
    }

    public getId(): number {
        return this.id
    }

    public getValue(): number {
        return this.value
    }
    
    public getName(): string {
        return this.name
    }
    
    public getWeight(): number {
        return this.weight
    }

    public setValue(price: number): void {
        this.value = price
    }

    public setName(name: string): void {
        this.name = name
    }

    public setWeight(weight: number): void {
        this.weight = weight
    }

    public reset(): void {
        id = 0;
    }
}

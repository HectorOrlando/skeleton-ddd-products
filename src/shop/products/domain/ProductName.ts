// src\shop\products\domain\ProductName.ts

export class ProductName {
    private readonly _value: string;

    public constructor(value: string) {
        this.ensureIsValid(value);
        this.validateCharacters(value);
        this._value = value;
    }

    get value(): string {
        return this._value;
    }

    static create(name: string): ProductName {
        return new ProductName(name);
    }

    private ensureIsValid(value: string): void {
        if (!value || value.trim().length === 0 || value.trim().length > 150) {
            throw new Error('Product name cannot be empty.');
        }
    }

    private validateCharacters(value: string): void {
        const allowedCharactersRegex = /^[A-Za-z0-9\s]+$/; // Permitir letras, números y espacios.
        if (!allowedCharactersRegex.test(value)) {
            throw new Error('The Product name contains illegal characters.');
        }
    }

}

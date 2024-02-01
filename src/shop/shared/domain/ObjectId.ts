// src\shop\shared\domain\ObjectId.ts

import { ObjectId as MongoObjectID } from 'mongodb';

export abstract class ObjectId {
    public readonly value: string;

    protected constructor(id: string) {
        this.checkIsValid(id);
        this.value = new MongoObjectID(id).toHexString();
    }

    public static random(): ObjectId {
        const id = new MongoObjectID().toHexString();
        return new (this as any)(id);
    }

    protected checkIsValid(value: string): void {
        if (!MongoObjectID.isValid(value)) {
            throw new Error(`Id is not valid. ${value}`);
        }
    }
}

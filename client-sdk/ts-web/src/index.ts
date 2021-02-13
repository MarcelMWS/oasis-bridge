import * as oasis from '@oasisprotocol/client';
import * as oasisRT from '@oasisprotocol/client-rt';

export const MODULE_NAME = 'bridge';
export const CODE_INVALID_ARGUMENT = 1;
export const CODE_NOT_AUTHORIZED = 2;
export const CODE_INVALID_SEQUENCE_NUMBER = 3;
export const CODE_INSUFFICIENT_BALANCE = 4;
export const CODE_ALREADY_SUBMITTED_SIGNATURE = 5;
export const CODE_UNSUPPORTED_DENOMINATION = 6;

export const METHOD_LOCK = 'bridge.Lock';
export const METHOD_WITNESS = 'bridge.Witness';
export const METHOD_RELEASE = 'bridge.Release';
export const METHOD_NEXT_SEQUENCE_NUMBERS = 'bridge.NextSequenceNumbers';

export interface Lock {
    amount: oasisRT.types.BaseUnits;
}

export interface LockResult {
    id: oasis.types.longnum;
}

export interface NextSequenceNumbers {
    in: oasis.types.longnum;
    out: oasis.types.longnum;
}

export interface Operation {
    lock?: Lock;
    release?: Release;
}

export interface Release {
    id: oasis.types.longnum;
    owner: Uint8Array;
    amount: oasisRT.types.BaseUnits;
}

export interface Witness {
    id: oasis.types.longnum;
    signature: Uint8Array;
}

// TODO: Events.
export interface WitnessSignatures {
    id: oasis.types.longnum;
    op: Operation;
    wits: number[];
    sigs: Uint8Array[];
}

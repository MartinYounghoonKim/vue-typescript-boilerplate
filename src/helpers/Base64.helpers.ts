import { Base64 } from 'js-base64';

export interface IBase64Helper {
    encoding(value: string): string;
    decoding(value: string): string;
}

class Base64Helper implements IBase64Helper {
    public encoding (value: string): string {
        return Base64.encode(value);
    }

    public decoding (value: string): string {
        return Base64.decode(value);
    }
}

export const base64Helper = new Base64Helper;

import Cookie, { CookieAttributes } from 'js-cookie';

import { base64Helper, IBase64Helper } from '@/helpers/Base64.helpers';

export interface ICookieHelper {
    set (name: string, value: string, options?: CookieAttributes): void;
    get (name: string, value: string): string;
    destroy (name: string): void;
};

class CookieHelper implements ICookieHelper {
    public set (name: string, value: string, options?: CookieAttributes) {
        Cookie.set(name, value, options);
    }

    public get (name: string) {
        return Cookie.get(name) || '';
    }

    public destroy (name: string) {
        Cookie.remove(name);
    }
}

class EncodedCookieHelper extends CookieHelper {
    converter: IBase64Helper;

    constructor () {
        super();
        this.converter = base64Helper;
    }

    public set (name: string, value: string) {
        const encodedValue = this.converter.encoding(value);
        Cookie.set(name, encodedValue);
    }

    public get (name: string) {
        const encodedValue = Cookie.get(name) || '';

        return this.converter.decoding(encodedValue);
    }
}

export const cookieHelper = new CookieHelper;
export const encodedCookieHelper = new EncodedCookieHelper;

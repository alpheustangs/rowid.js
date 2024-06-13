type GetRandomDigitsProps = {
    charList: string;
    count: number;
};

type UnsafedGetRandomDigitsProps = GetRandomDigitsProps;

type randomDigitsProcessProps = GetRandomDigitsProps;

const randomDigitsValidate = (count: number): void => {
    // check type
    if (typeof count !== "number") {
        throw new TypeError("Input is not a number");
    }

    // check range
    if (count < 0) {
        throw new RangeError("Input should be equal or greater than to 0");
    }
};

const getRandomByte = (): number => {
    // use window.crypto when available
    if (
        typeof window !== "undefined" &&
        window.crypto &&
        window.crypto.getRandomValues
    ) {
        try {
            return window.crypto.getRandomValues(new Uint8Array(1))[0];
        } catch (e: unknown) {
            // ignore
        }
    }

    // use node:crypto when available
    if (typeof require === "function") {
        try {
            return require("node:crypto").randomBytes(1)[0];
        } catch (e: unknown) {
            // ignore
        }
    }

    // use Math.random
    return Math.floor(Math.random() * 256);
};

const randomDigitsProcess = (props: randomDigitsProcessProps): string => {
    // declarations
    let randomDigits: string = "";

    // implementation
    for (let i: number = 0; i < props.count; i++) {
        randomDigits += props.charList[getRandomByte() % props.charList.length];
    }

    // result
    return randomDigits;
};

const unsafedGetRandomDigits = (props: UnsafedGetRandomDigitsProps): string => {
    return randomDigitsProcess({
        count: props.count,
        charList: props.charList,
    });
};

const getRandomDigits = (props: GetRandomDigitsProps): string => {
    randomDigitsValidate(props.count);
    return randomDigitsProcess({
        count: props.count,
        charList: props.charList,
    });
};

export { getRandomDigits, unsafedGetRandomDigits };

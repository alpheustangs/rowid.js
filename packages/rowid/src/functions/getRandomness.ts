type GetRandomnessProps = {
    charList: string;
    randomnessLength: number;
};

type UnsafedGetRandomnessProps = GetRandomnessProps;

type randomnessProcessProps = GetRandomnessProps;

const randomnessValidate = (count: number): void => {
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

const randomnessProcess = (props: randomnessProcessProps): string => {
    // declarations
    let randomness: string = "";

    // implementation
    for (let i: number = 0; i < props.randomnessLength; i++) {
        randomness += props.charList[getRandomByte() % props.charList.length];
    }

    // result
    return randomness;
};

const unsafedGetRandomness = (props: UnsafedGetRandomnessProps): string => {
    return randomnessProcess({
        randomnessLength: props.randomnessLength,
        charList: props.charList,
    });
};

const getRandomness = (props: GetRandomnessProps): string => {
    randomnessValidate(props.randomnessLength);
    return randomnessProcess({
        randomnessLength: props.randomnessLength,
        charList: props.charList,
    });
};

export { getRandomness, unsafedGetRandomness };

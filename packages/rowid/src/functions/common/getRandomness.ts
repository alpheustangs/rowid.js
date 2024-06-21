import { validateNumber } from "#/functions/validateNumber";

type GetRandomnessOptions = {
    charList: string;
    randomnessLength: number;
};

type UnsafedGetRandomnessOptions = GetRandomnessOptions;

type randomnessProcessOptions = GetRandomnessOptions;

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

const randomnessProcess = (opts: randomnessProcessOptions): string => {
    // declarations
    let randomness: string = "";

    // implementation
    for (let i: number = 0; i < opts.randomnessLength; i++) {
        randomness += opts.charList[getRandomByte() % opts.charList.length];
    }

    // result
    return randomness;
};

const unsafedGetRandomness = (opts: UnsafedGetRandomnessOptions): string => {
    return randomnessProcess({
        randomnessLength: opts.randomnessLength,
        charList: opts.charList,
    });
};

const getRandomness = (opts: GetRandomnessOptions): string => {
    validateNumber({
        name: "RandomnessLength",
        number: opts.randomnessLength,
    });

    return randomnessProcess({
        randomnessLength: opts.randomnessLength,
        charList: opts.charList,
    });
};

export { getRandomness, unsafedGetRandomness };

type ValidateNumberOptions = {
    name: string;
    number: number;
};

const validateNumber = (options: ValidateNumberOptions): void => {
    const maxInt: number = Number.MAX_SAFE_INTEGER ?? 9_007_199_254_740_991;

    // check type
    if (typeof options.number !== "number") {
        throw new TypeError(`${options.name} is not a number`);
    }

    // check range
    if (options.number < 0) {
        throw new RangeError(
            `${options.name} must be greater than or equal to 0`,
        );
    }

    if (options.number > maxInt) {
        throw new RangeError(
            `${options.name} must be less than or equal to ${maxInt}`,
        );
    }
};

export { validateNumber };

const isNumber = (input: string | number): boolean => {
    try {
        return !Number.isNaN(Number(input));
    } catch (e: unknown) {
        return false;
    }
};

export { isNumber };

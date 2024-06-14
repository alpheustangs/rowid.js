import { RowID } from "rowid";

// should be higher than 6 to avoid duplicates
const randomness: number = 32 - 10;

const dynamicLog = (message: string): void => {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(message);
};

(async (): Promise<void> => {
    const start = Date.now();

    while (true) {
        const result: string[] = [];
        const loopStart = Date.now();

        while (Date.now() - loopStart < 100) {
            const id: string = RowID(randomness);
            result.push(id);
            // console.log(id);
        }

        // find duplicates
        const duplicates: string[] = result.filter(
            (value: string, index: number): boolean =>
                result.indexOf(value) !== index,
        );

        // check for duplicates
        if (duplicates.length > 0) {
            console.log("\n");
            console.log(duplicates);
            console.log(`Total duplicates: ${duplicates.length}`);
            break;
        }

        dynamicLog(`The program has been running for ${Date.now() - start}ms`);
    }
})();

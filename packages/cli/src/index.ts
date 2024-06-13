import type { RowIDWithConfigResult } from "rowid";

import type { Config } from "#/@types/config";
import type { PackageJson } from "#/@types/packageJson";

import { Command } from "commander";
import { RowIDWithConfig } from "rowid";

import { charList } from "#/configs/common";
import { readConfig } from "#/functions/readConfig";
import { readPackageJson } from "#/functions/readPackageJson";

(async (): Promise<void> => {
    try {
        // declarations
        const program: Command = new Command();
        const config: Config = await readConfig();
        const pkj: PackageJson | null = await readPackageJson();

        const {
            RowID,
            encode,
            decode,
            generate,
            verify,
            getRandomDigits,
        }: RowIDWithConfigResult = RowIDWithConfig({
            charList: config.charList ?? charList,
        });

        // RowID
        program
            .name("rowid")
            .description("RowID, a time based unique ID solution")
            .version(
                `v${pkj ? pkj.version : "0.0.0"}`,
                "-v, --version",
                "get the version of RowID CLI",
            )
            .option(
                "-n, --number <number>",
                "specify the number of random digits",
            )
            .action(async (args: { number: string }): Promise<void> => {
                try {
                    console.log(
                        RowID(args.number ? Number(args.number) : void 0),
                    );
                } catch (e: unknown) {
                    console.error(e);
                }
            });

        // encode
        program
            .command("encode")
            .description("encode a date to RowID")
            .argument("<date>", "the date to encode")
            .action(async (date: string): Promise<void> => {
                try {
                    const _date: number = new Date(date).getTime();
                    console.log(encode(_date));
                } catch (e: unknown) {
                    console.error(e);
                }
            });

        // decode
        program
            .command("decode")
            .description("decode a RowID to date")
            .argument("<rowid>", "the RowID to decode")
            .action(async (rowid: string): Promise<void> => {
                try {
                    console.log(decode(rowid));
                } catch (e: unknown) {
                    console.error(e);
                }
            });

        // generate
        program
            .command("generate")
            .description("generate a RowID")
            .argument("<date>", "the date to generate")
            .argument("[number]", "the number of random digits")
            .action(
                async (
                    date: string,
                    number: string | undefined,
                ): Promise<void> => {
                    try {
                        console.log(
                            JSON.stringify(
                                generate(
                                    new Date(date).getTime(),
                                    number ? Number(number) : void 0,
                                ),
                            ),
                        );
                    } catch (e: unknown) {
                        console.error(e);
                    }
                },
            );

        // verify
        program
            .command("verify")
            .description("verify a RowID")
            .argument("<rowid>", "the RowID to verify")
            .action(async (rowid: string): Promise<void> => {
                try {
                    console.log(JSON.stringify(verify(rowid)));
                } catch (e: unknown) {
                    console.error(e);
                }
            });

        // get random digits
        program
            .command("random")
            .description("generate random digits")
            .argument("<number>", "the number of random digits")
            .action(async (number: string): Promise<void> => {
                try {
                    console.log(getRandomDigits(Number(number)));
                } catch (e: unknown) {
                    console.error(e);
                }
            });

        // parse
        await program.parseAsync();
    } catch (e: unknown) {
        console.log(e);
    }
})();

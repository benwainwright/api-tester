import type { Config } from "jest";

const es6 = [
  "ink",
  "ansi-escapes",
  "auto-bind",
  "patch-console",
  "yoga-wasm-web",
].join("|");

const config: Config = {
  collectCoverageFrom: ["./src/**/*"],
  collectCoverage: true,
  transformIgnorePatterns: [`/node_modules/(?!${es6})`],
  moduleNameMapper: {
    "(.+)\\.js": "$1",
    "(.+)\\.jsx": "$1",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};

export default config;
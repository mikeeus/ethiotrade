// Typings reference file, see links for more information
// https://github.com/typings/typings
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html

interface NodeRequire {
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void, name?:string ) => void;
}

declare var System: any;
declare var require: NodeRequire;

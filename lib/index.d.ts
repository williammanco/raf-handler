export interface TypesOptions {
    fps?: number;
}
export interface TypesStore {
    rAF: any[];
    fps: number;
    then: number;
    id?: number;
    now?: number;
    delta?: number;
    interval?: number;
}
export declare const store: TypesStore;
export declare const update: (timestamp: number) => number;
export declare const resetUpdate: () => void;
export declare const subscribeUpdate: (fn: () => any) => void;
export declare const unsubscribeUpdate: (fn: () => any) => void;
declare const initUpdate: (options?: TypesOptions) => {
    reset: () => void;
    add: (fn: () => any) => void;
    remove: (fn: () => any) => void;
    update: (timestamp: number) => number;
    store: TypesStore;
};
export default initUpdate;

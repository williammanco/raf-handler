export interface TypesOptions {
    fps?: number;
}
export interface TypesStore {
    rAF?: {
        (timestamp: number): void;
    }[];
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
export declare const subscribeUpdate: (fn: (timestamp: number) => any) => void;
export declare const unsubscribeUpdate: (fn: (timestamp: number) => any) => void;
declare const initUpdate: (options?: TypesOptions) => {
    reset: () => void;
    add: (fn: (timestamp: number) => any) => void;
    remove: (fn: (timestamp: number) => any) => void;
    update: (timestamp: number) => number;
    store: TypesStore;
};
export default initUpdate;

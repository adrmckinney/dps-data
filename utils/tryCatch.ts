type TryCatchProps<T> = {
    tryFn: () => Promise<T>;
    catchFn: (error: unknown) => Promise<T>;
};

export async function tryCatch<T>({ tryFn, catchFn }: TryCatchProps<T>): Promise<T> {
    try {
        return await tryFn();
    } catch (error) {
        return await catchFn(error);
    }
}

export type TryCatchSyncProps<T> = {
    tryFn: () => T;
    catchFn: (error: unknown) => T;
};

export function tryCatchSync<T>({ tryFn, catchFn }: TryCatchSyncProps<T>) {
    try {
        return tryFn();
    } catch (error) {
        return catchFn(error);
    }
}

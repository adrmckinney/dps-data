import { useEffect, useState } from 'react';

type Props<T> = {
    autoFetch?: boolean;
    apiFn: () => Promise<T>;
};

const useFetch = <T,>({ autoFetch = true, apiFn }: Props<T>) => {
    const [state, setState] = useState<T | null>(null);
    const [loading, setLoading] = useState(autoFetch);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!autoFetch) return;

        let ignore = false;

        setLoading(true);
        apiFn()
            .then(data => {
                if (!ignore) {
                    setState(data);
                    setError(null);
                }
            })
            .catch(err => {
                if (!ignore) {
                    setError(err);
                }
            })
            .finally(() => {
                setLoading(false);
            });

        return () => {
            ignore = true;
        };
    }, []);

    return { state, loading, error };
};

export default useFetch;

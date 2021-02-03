export default function UseCache<K extends Object, V>(lifetime: number, fetcher: (key: K) => Promise<V>): ((key: K, ignoreCache?: boolean) => Promise<V>)[];

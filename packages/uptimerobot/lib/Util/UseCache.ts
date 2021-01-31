import CachedEntry from "./CachedEntry";

/**
 * 
 * @param lifetime Lifetime of the cache in MS
 * @param fetcher Function to retrieve new elements
 */
export default function UseCache<K extends Object, V>(lifetime: number, fetcher: (key: K) => Promise<V>) {
  const cache: WeakMap<K, CachedEntry<V>> = new WeakMap();

  /**
   * Fetches the data through the cache
   * @param key Key to fetch from
   * @param ignoreCache If the cache should be ignored or not
   */
  const fetch = async (key: K, ignoreCache?: boolean): Promise<V> => {
    if(ignoreCache !== true && cache.has(key)) {
      const cacheEntry = cache.get(key)

      if(Date.now() - cacheEntry.time.getTime() > lifetime) {
        // Entry has expired, delete it
        cache.delete(key)
      } else {
        // Entry is valid, send it off
        return cacheEntry.entry
      }
    }

    // Fetch a new value
    const fetched = await fetcher(key)
    
    // Populate it into cache
    cache.set(key, {time: new Date(), entry: fetched});

    // Return it
    return fetched;
  }

  return [ fetch ]
}
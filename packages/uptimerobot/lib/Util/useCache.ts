import CachedEntry from "./CachedEntry";

function objKeyComparison<K, V>(map: Map<K, V>, key: K): K | false {
  const keys = map.keys();
  let compareKey: K;

  while(compareKey = keys.next().value) {
    if (JSON.stringify(key) === JSON.stringify(compareKey)) return compareKey;
  }

  return false;
}

/**
 * 
 * @param lifetime Lifetime of the cache in MS
 * @param fetcher Function to retrieve new elements
 */
export default function useCache<K extends Object, V>(lifetime: number, fetcher: (key: K) => Promise<V>) {
  const cache: Map<K, CachedEntry<V>> = new Map();

  /**
   * Fetches the data through the cache
   * @param key Key to fetch from
   * @param ignoreCache If the cache should be ignored or not
   */
  const fetch = async (key: K, ignoreCache?: boolean): Promise<V> => {
    const cacheKey = ignoreCache === true ? false : objKeyComparison(cache, key);

    if(cacheKey) {
      const cacheEntry = cache.get(cacheKey);
      
      if(Date.now() - cacheEntry.time.getTime() > lifetime) {
        // Entry has expired, delete it
        cache.delete(key)
      } else {
        // Entry is valid, send it off
        return cacheEntry.entry
      }
    }
    
    if(cache.size > 20) cache.clear();

    // Fetch a new value
    const fetched = await fetcher(key)
    
    // Populate it into cache
    cache.set(key, {time: new Date(), entry: fetched});

    // Return it
    return fetched;
  }

  return [ fetch ]
}
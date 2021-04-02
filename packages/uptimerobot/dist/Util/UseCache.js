"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function objKeyComparison(map, key) {
    const keys = map.keys();
    let compareKey;
    while (compareKey = keys.next().value) {
        if (JSON.stringify(key) === JSON.stringify(compareKey))
            return compareKey;
    }
    return false;
}
function UseCache(lifetime, fetcher) {
    const cache = new Map();
    const fetch = async (key, ignoreCache) => {
        const cacheKey = ignoreCache === true ? false : objKeyComparison(cache, key);
        if (cacheKey) {
            const cacheEntry = cache.get(cacheKey);
            if (Date.now() - cacheEntry.time.getTime() > lifetime) {
                cache.delete(key);
            }
            else {
                return cacheEntry.entry;
            }
        }
        if (cache.size > 20)
            cache.clear();
        const fetched = await fetcher(key);
        cache.set(key, { time: new Date(), entry: fetched });
        return fetched;
    };
    return [fetch];
}
exports.default = UseCache;
//# sourceMappingURL=UseCache.js.map
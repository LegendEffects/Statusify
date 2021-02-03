"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function UseCache(lifetime, fetcher) {
    const cache = new WeakMap();
    const fetch = async (key, ignoreCache) => {
        if (ignoreCache !== true && cache.has(key)) {
            const cacheEntry = cache.get(key);
            if (Date.now() - cacheEntry.time.getTime() > lifetime) {
                cache.delete(key);
            }
            else {
                return cacheEntry.entry;
            }
        }
        const fetched = await fetcher(key);
        cache.set(key, { time: new Date(), entry: fetched });
        return fetched;
    };
    return [fetch];
}
exports.default = UseCache;
//# sourceMappingURL=UseCache.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function useSomewhatSingleton(resolver) {
    let currentPromise = undefined;
    const fetch = (...args) => {
        if (currentPromise !== undefined) {
            return currentPromise;
        }
        currentPromise = resolver(...args);
        currentPromise.then(() => {
            currentPromise = undefined;
        });
        return currentPromise;
    };
    return fetch;
}
exports.default = useSomewhatSingleton;
//# sourceMappingURL=useSomewhatSingleton.js.map
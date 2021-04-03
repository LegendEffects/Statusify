export default function useSomewhatSingleton<T>(resolver: (...args: unknown[]) => Promise<T>) {
  let currentPromise = undefined;

  const fetch = (...args) => {
    // Check if there is a current promise being processed
    if(currentPromise !== undefined) {
      return currentPromise;
    }
    
    currentPromise = resolver(...args);

    // Reset the promise
    currentPromise.then(() => {
      currentPromise = undefined;
    })

    return currentPromise;
  }

  return fetch;
}
export default function useSomewhatSingleton<T>(resolver: (...args: any[]) => Promise<T>) {
  let currentPromise: Promise<any> | undefined = undefined;

  const fetch = (...args: any[]) => {
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
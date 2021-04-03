export default function useSomewhatSingleton<T>(resolver: (...args: unknown[]) => Promise<T>): (...args: any[]) => any;

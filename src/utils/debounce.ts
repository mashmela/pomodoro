export function debounce<F extends (...args: any[]) => any>(
  func: F,
  ms: number,
): { (...args: Parameters<F>): void; cancel: () => void } {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  const debounced = function (this: any, ...args: Parameters<F>): void {
    if (timeout !== undefined) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func.apply(this, args);
    }, ms);
  };

  debounced.cancel = function (): void {
    if (timeout !== undefined) {
      clearTimeout(timeout);
      timeout = undefined;
    }
  };

  return debounced;
}

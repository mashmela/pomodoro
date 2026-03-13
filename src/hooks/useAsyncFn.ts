import React from "react";

export function useAsyncFn<AsyncFunction extends (...args: any[]) => Promise<any>>(
  asyncFn: AsyncFunction,
  initialState?: boolean,
) {
  const [loading, setLoading] = React.useState(initialState || false);

  const handleAsyncFnCall = React.useCallback(
    async (...args: Parameters<AsyncFunction>) => {
      setLoading(true);
      const result = await asyncFn(...args);
      setLoading(false);
      return result;
    },
    [asyncFn],
  );

  return [loading, handleAsyncFnCall] as const;
}

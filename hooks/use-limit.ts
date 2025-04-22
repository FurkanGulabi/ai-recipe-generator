import useSWR, { Fetcher } from "swr";
export function useLimit() {
  const fetcher: Fetcher<{ remaining: number; reset: number }> = (
    url: string
  ) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(`/api/limit`, fetcher);

  return {
    limit: data ? data.remaining : 0,
    isLimitReached: data ? data.remaining <= 0 : false,
    resetAtEpoch: data ? data.reset : 0,
    isLoading,
    error,
  };
}

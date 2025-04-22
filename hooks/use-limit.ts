import useSWR from "swr";
export function useLimit() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(`/api/limit`, fetcher);
  console.log("Limit data:", data); // Log the data to see what you're getting

  return {
    limit: data?.remaining,
    isLimitReached: data?.remaining <= 0,
    resetAtEpoch: data?.reset, // daha net isim
    isLoading,
    error,
  };
}

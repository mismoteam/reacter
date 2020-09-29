import { useEffect, useState } from "react";

/**
 * https://usehooks-typescript.com/use-is-client
 */
const useIsClient = () => {
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  return isClient;
};

export default useIsClient;

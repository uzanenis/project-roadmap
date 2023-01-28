import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function HomePage({ ...props }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      router.push("/home");
    }
  }, [isLoggedIn]);
  return <div>Loading</div>;
}

export default HomePage;

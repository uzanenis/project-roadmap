import Button from "../components/Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function HomePage({ ...props }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn]);
  return <div>Loading</div>;
}

export default HomePage;

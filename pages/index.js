import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Loader } from "@mantine/core";

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
  const primaryColor = "#C4AE78";
  return (
    <div className="loadingContainer">
      <Loader color={primaryColor} size="100" variant="dots" />
      <style jsx>{`
        .loadingContainer {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default HomePage;

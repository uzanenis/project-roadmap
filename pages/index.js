import Button from "../components/Button";
import { useState } from "react";
import LoginCard from "../components/LoginCard";
import { useRouter } from "next/router";

function HomePage({ ...props }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  return (
    <>
      {isLoggedIn ? (
        <div>
          {isLoggedIn}
          <Button>Save</Button>
        </div>
      ) : (
        router.push("/login")
      )}
    </>
  );
}

export default HomePage;

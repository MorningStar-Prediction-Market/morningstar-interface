import { useEffect } from "react";
import { useRouter } from "next/router";

const Page404 = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page after 3 seconds
    const timeout = setTimeout(() => {
      router.push("/");
    }, 3000); // 3 seconds

    // Clean up the timeout if the component is unmounted
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
        <p className="text-gray-500">
          You will be redirected to the homepage shortly...
        </p>
      </div>
    </div>
  );
};

export default Page404;

"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LocationDetector = () => {
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    const params = new URLSearchParams(searchParams);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        params.set("latitude", position.coords.latitude);
        params.set("longitude", position.coords.longitude);
        setIsLoading(false);
        router.push(`/current-location?${params.toString()}`);
      });
    }
  }, [searchParams, router, pathName]);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
        {isLoading && (
          <>
            <Image
              unoptimized
              src="/assets/images/network.gif"
              alt="Loading..."
              height={500}
              width={500}
              className="border rounded-md my-4"
            />
            <p className="text-4xl text-center">Detecting Location...</p>
          </>
        )}
      </div>
    </>
  );
};

export default LocationDetector;

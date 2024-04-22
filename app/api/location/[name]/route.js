import { NextResponse } from "next/server";
import { getLocationsData } from "../locationData-utils";

export const GET = async (_request, { params }) => {
  const locationData = await getLocationsData();

  const founded = locationData.find(
    (item) => item.location.toLowerCase() === params?.name.toLowerCase()
  );

  return NextResponse.json(
    founded || {
      error: {
        message: "Sorry, this location is not available in our data.",
      },
    }
  );
};

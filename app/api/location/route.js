import { NextResponse } from "next/server";
import { getLocationsData } from "./locationData-utils";

export const GET = async () => {
  const locationData = await getLocationsData();
  return NextResponse.json(locationData);
};

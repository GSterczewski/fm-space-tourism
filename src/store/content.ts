import content from "../content.json";

interface CrewMember {
  name: string;
  role: string;
  image: string;
  brief: string;
}
interface Destination {
  name: string;
  distance: string;
  travelTime: string;
  image: string;
  brief: string;
}
interface Technology {
  name: string;
  image: string;
  definition: string;
}

export const getDestinations = (): Destination[] => content.destinations;
export const getCrew = (): CrewMember[] => content.crew;
export const getTechnology = (): Technology[] => content.terminology;

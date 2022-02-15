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
  definition: string;
}
interface Content {
  crew: CrewMember[];
  destinations: Destination[];
  technology: Technology[];
}

export function useContent(): Content {
  return {
    crew: content.crew,
    destinations: content.destinations,
    technology: content.terminology,
  };
}

export default useContent;

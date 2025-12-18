import { useParams } from "react-router-dom";

export default function Speakers() {
  const { workshopid } = useParams();
  console.log("Workshop id from URL:", workshopid);

  return <h1>Speakers Page</h1>;
}

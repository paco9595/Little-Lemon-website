import { useLocation } from "react-router-dom";

export default function confirmedBooking() {
  const location = useLocation();
  return <pre>{JSON.stringify(location.state,null, 20)}</pre>;
}

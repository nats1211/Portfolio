import { LoaderCircle } from "lucide-react";

function Spinner() {
  return <LoaderCircle aria-hidden="true" className="animate-spin" size={18} />;
}

export default Spinner;

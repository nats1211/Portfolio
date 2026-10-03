import { Toaster as SonnerToaster } from "sonner";

function Toaster({ theme }) {
  return (
    <SonnerToaster
      closeButton
      position="top-right"
      richColors
      theme={theme}
    />
  );
}

export default Toaster;

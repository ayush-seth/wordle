import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="top-center"
      offset={80}
      theme="dark"
      duration={1000}
      richColors
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      toastOptions={{
        style: {
          width: "fit-content",
        },
      }}
    />
  );
}

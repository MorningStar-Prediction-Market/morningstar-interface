import LoadingProvider from "./Loading/LoadingProvider";
import ToastProvider from "./Toast/ToastProvider";

const UIKitProvider:any = ({ children }: { children: React.ReactNode }) => {
  return (
    <LoadingProvider>
      <ToastProvider>{children}</ToastProvider>
    </LoadingProvider>
  );
};

export default UIKitProvider;

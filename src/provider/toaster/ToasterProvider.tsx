import { FC, Fragment, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface ToasterProviderProps {
  children?: ReactNode | undefined;
}

const ToasterProvider: FC<ToasterProviderProps> = ({ children }) => {
  return (
    <Fragment>
      {children}
      <Toaster position="bottom-right" reverseOrder={false} />
    </Fragment>
  );
};

export default ToasterProvider;

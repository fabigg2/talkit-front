import { RecoilRoot } from "recoil";
import ReactQueryProvider from "./ReactQueryProider";

export default function Providers({ children }) {
  return (
    <RecoilRoot>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </RecoilRoot>
  );
}

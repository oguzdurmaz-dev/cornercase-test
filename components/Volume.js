import { useContext } from "react";
import AppContext from "@/context/AppContext";
export default function Volume() {
  const { volume } = useContext(AppContext);

  return <>Volume is {volume}%</>;
}

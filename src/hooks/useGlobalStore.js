import { useContext } from "react";
import { GlobalContext } from "../context/GlobalStore";

const useGlobalStore = () => useContext(GlobalContext);

export default useGlobalStore;

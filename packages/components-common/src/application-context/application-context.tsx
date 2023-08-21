import { LiftographApplicationState } from "@liftograph/types-common";
import { createContext, useContext } from "react";

const ApplicationContext = createContext({} as LiftographApplicationState);

export const useApplicationContext = () => useContext(ApplicationContext);

export default ApplicationContext;

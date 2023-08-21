import { createContext, useContext } from "react";

const ApplicationContext = createContext({});

export const useApplicationContext = () => useContext(ApplicationContext);

export default ApplicationContext;

"use client";
import axios from "axios";
import { useContext, useCallback, useState, createContext } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [castings, setCastings] = useState([]);



  const getCastings = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/castings`
      );
      setCastings(response.data.castings);
      console.log(response.data.castings);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);


  return (
    <AppContext.Provider
      value={{
        castings,
        getCastings,
        loading
      }}
    >

      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext:must be used within a AppContextProvider");
  return context;
};

export default AppContext;

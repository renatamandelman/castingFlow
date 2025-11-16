"use client";
import axios from "axios";
import { useContext, useCallback, useState, createContext, useEffect } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [castings, setCastings] = useState([]);
  const [model, setModel] = useState(null);



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
    const getModel = useCallback(async ({id}) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/models/${id}`
      );
      setModel(response.data.model);
      console.log('obtuviste el model', response.data.model);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const createModel = useCallback(async (model) => {
    try {
      const response = await axios.post( `${process.env.NEXT_PUBLIC_API_URL}/models/`, model);
      console.log('se creo el modelo', response.data)
      return response.data;
      
    } catch (error) {
      console.log(error, 'error')
    }
  })
   const createRecruiter = useCallback(async (recruiter) => {
    try {
      const response = await axios.post( `${process.env.NEXT_PUBLIC_API_URL}/recruiters/`, recruiter);
      console.log('se creo el recruiter', response.data)
      
    } catch (error) {
      console.log(error, 'error')
    }
  })

useEffect(() => {
      getCastings();
      
    }, [getCastings]);

  return (
    <AppContext.Provider
      value={{
        castings,
        model,
        getModel,
        createModel,
        createRecruiter,
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

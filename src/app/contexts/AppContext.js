"use client";
import axios from "axios";
import { useContext, useCallback, useState, createContext, useEffect } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [castings, setCastings] = useState([]);
  const [modelApplications, setModelApplications] = useState([]);
  const [model, setModel] = useState(null);
  const [recruiter, setRecruiter] = useState(null);
  const [models, setModels] = useState([]);


 const getModels = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/models`
      );
      setModels(response.data.models);
      console.log(response.data.models);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);
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
    const getModel = useCallback(async (id) => {
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
  
      const getRecruiter = useCallback(async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/recruiters/${id}`
      );
      setRecruiter(response.data.recruiter);
      console.log('obtuviste el model', response.data.recruiter);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const createModel = useCallback(async (model) => {
    try {
      const response = await axios.post( `${process.env.NEXT_PUBLIC_API_URL}/models/`, model);
      console.log('se creo el modelo', response.data)
      return response.data.model._id
      
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
  const getModelApplication = useCallback(async (id) => {
  try {
    setLoading(true);
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/applications/model/${id}`
    );
    setModelApplications(response.data.applications);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
}, []);

useEffect(() => {
      getModels();
      getCastings();
      const modelId = localStorage.getItem("modelId");
      if (modelId) {
        getModel(modelId);
      }
      getModelApplication(model?._id);
    }, [getCastings, getModel, getModelApplication]);

  return (
    <AppContext.Provider
      value={{
        castings,
        model,
        models,
        getModel,
        recruiter,
        getRecruiter,
        createModel,
        createRecruiter,
        modelApplications,
        getModelApplication,
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

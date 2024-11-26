import { useCallback, useEffect, useMemo, useState } from 'react'
import '/src/App.css'
import Header from '../components/Header'
import Main from '../components/MainContainer'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'
import CountryDetail from './CountryDetail'
import PageNotFound from '../components/PageNotFound'

function App() {

  const BASE_PATH = import.meta.env.VITE_BASE_PATH || "/rest-countries-api/";
 

  const [data, setData] = useState([])
  const [originalData, setOrginalData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchCountries = useCallback(async ()=> {
    try {
      setLoading(true)
      const response = await fetch('https://restcountries.com/v3.1/all?fields=landlocked,unMember,maps,population,name,flags,cca3,capital,region,subregion,tld,currencies,languages')
      if (!response.ok) {
        throw new Error('failed to fetch data')
      }
      const results = await response.json()
      setData(results)
      setOrginalData(results)
    }catch(error){
      setError(error)
      console.log(error)
    }finally {
      setLoading(false)
    }
  })


  const router = useMemo(() =>createBrowserRouter([
    {
      path:BASE_PATH,
      element: <Main  data={data || ''} 
                      setData={setData || ''} 
                      originalData={originalData || ''} 
                      loading={loading}
                      error={error}
                      />,
      errorElement: <PageNotFound />
    },
    {
      path: `${BASE_PATH}countries/:countryId`,
      element: <CountryDetail />,
      errorElement: <PageNotFound />
    },
    {
      path: '*', // Catch-all route for unmatched paths
      element: <PageNotFound />,
    }
  ],  {
    future: {
      v7_startTransition: true,
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_partialHydration: true,
    },

    
  }), [BASE_PATH, data, setData, originalData, loading, error])

  
  useEffect(()=> {
    const currentLocaleStorageTheme = localStorage.getItem('theme');
    if (!currentLocaleStorageTheme) localStorage.setItem('theme', 'light')
  }, [])


  useEffect(()=> {
      fetchCountries()
  }, [])


  return (
    <>
      <Header />
      < RouterProvider router={router} />
    </>
  )
}

export default App

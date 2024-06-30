import React, { createContext, useState } from 'react';

export const GeneralContext = createContext();

 const GeneralProvider = ({children}) => {

    const [openDrawer,setOpenDrawer] = useState(false);


    const handleDrawer = () => {
        setOpenDrawer(!openDrawer);
    }


  return (
    <GeneralContext.Provider value={{openDrawer,handleDrawer}}>{children}</GeneralContext.Provider>
  )
}

export default GeneralProvider
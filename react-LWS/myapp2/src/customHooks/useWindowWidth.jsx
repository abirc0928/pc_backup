import {useState, useEffect} from 'react'
const useWindowWidth = (screenSize) =>{
    const [onSmallScreen, setOnSmallScreen] = useState(false)
    const checkScreenSize = () =>{
        setOnSmallScreen(window.innerWidth < screenSize)
    }

    useEffect(()=>{
        const checkScreenSize = () =>{
            setOnSmallScreen(window.innerWidth < screenSize)
        }
        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)
        return () => window.removeEventListener('resize', checkScreenSize)
    },[screenSize])
   
    return onSmallScreen;
}

export default useWindowWidth
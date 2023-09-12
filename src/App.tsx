import { useEffect, useState } from 'react';
import Navbar from "@/components/navbar/Navbar";
import { SelectedPage } from './types';

function App() {
 const [selectedPage, setSelectedPage]
  = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div className="app bg-gray-20">
        <Navbar
          isTopOfPage={ isTopOfPage }
          selectedPage={ selectedPage }
          setSelectedPage={ setSelectedPage }
        />
        <div className="h-[3000px]"></div> // just for test navbar-fixed
      </div>
  )
}

export default App

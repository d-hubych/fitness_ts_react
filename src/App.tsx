import { useState } from 'react';
import Navbar from "@/scenes/navbar/Navbar";
import { SelectedPage } from './types';

function App() {
 const [selectedPage, setSelctedPage]
  = useState<SelectedPage>(SelectedPage.Home);

  return (
      <div className="app bg-gray-20">
        <Navbar
          selectedPage={ selectedPage }
          setSelctedPage={ setSelctedPage }
        />
      </div>
  )
}

export default App

import React, { useState } from "react";
import Cloud from "./cloud";
import DrawerMenu from "./drawerMenu";
import GrassAndRoad from "./grassRoadSky";
import Navbar from "./navbar";
import RotatedSun from "./rotatedSun";
import RubleButton from "./rubleButton";
import Threes from "./threes";


export const AppContext = React.createContext({})

function App() {
  const [suns, setSuns] = useState(0)
  return (
    <AppContext.Provider value={{
      suns,
      setSuns
    }}>
      <div className="App">
        <Navbar />
        <GrassAndRoad />
        <Threes />
        <RotatedSun />
        <RubleButton />
        <DrawerMenu />
        <Cloud />
      </div>
    </AppContext.Provider>

  );
}

export default App;

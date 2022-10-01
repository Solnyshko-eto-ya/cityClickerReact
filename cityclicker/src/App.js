import React, { useState, useEffect, useMemo } from "react";
import Cloud from "./cloud";
import DrawerMenu from "./drawerMenu";
import GrassAndRoad from "./grassRoadSky";
import Navbar from "./navbar";
import RotatedSun from "./rotatedSun";
import RubleButton from "./rubleButton";
import Threes from "./threes";
import build1 from "./png/build1.png";
import build2 from "./png/build2.png";
import build3 from "./png/build3.png";
import build4 from "./png/build4.png";
import build5 from "./png/build5.png";
import build6 from "./png/build6.png";
import { message } from "antd";
import BuildHouses from "./buildHouses";


const HOUSES = [{
  image: build1,
  name: 'Общага',
  income: 10,
  amount: 0,
  price: 100
},
{
  image: build2,
  name: 'Многоквартирный дом',
  income: 100,
  amount: 0,
  price: 1000
},
{
  image: build3,
  name: 'Особняк',
  income: 1000,
  amount: 0,
  price: 10000
},
{
  image: build4,
  name: 'Зеленый дом',
  income: 10000,
  amount: 0,
  price: 100000
},
{
  image: build5,
  name: 'Частный дом',
  income: 100000,
  amount: 0,
  price: 1000000
},
{
  image: build6,
  name: 'Дача Путина',
  income: 1000000,
  amount: 0,
  price: 10000000
}
]

export const AppContext = React.createContext({})

function App() {
  const [houses, setHouses] = useState(HOUSES)
  const [suns, setSuns] = useState(10)

  const income = useMemo(() => {
    return houses.reduce((acc, house) => acc + house.income * house.amount, 0)
  }, [houses])

  useEffect(() => {
    const interval = setInterval(() => {
      setSuns(prev => prev + income)
    }, 1000)
    return () => clearInterval(interval)
  }, [income])

  function buyHouse(houseName) {
    const targetHouse = houses.find(({ name }) => name === houseName)
    if (suns >= targetHouse.price) {
      const newHouses = houses.map((house) => {
        if (house.name === targetHouse.name) {
          return { ...house, amount: house.amount + 1 }
        } else {
          return house
        }
      })
      setHouses(newHouses)
      setSuns((prev) => prev - targetHouse.price)
    } else {
      message.warning('Недостаточно солнышек')
    }
  }

  return (
    <AppContext.Provider value={{
      suns,
      setSuns,
      houses,
      buyHouse,
      income,
    }}>
      <div className="App">
        <Navbar />
        <GrassAndRoad />
        <Threes />
        <RotatedSun />
        <RubleButton />
        <DrawerMenu />
        <Cloud />
        <BuildHouses />
      </div>
    </AppContext.Provider>

  );
}

export default App;

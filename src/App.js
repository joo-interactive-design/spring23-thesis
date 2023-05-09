import LandingPage from "./LandingPage/LandingPage"
import IntroPage from "./IntroPage/IntroPage";
import CuisinePage from "./CuisinePage/CuisinePage";
import IngredientPage from "./IngredientPage/IngredientPage";
import ConnectPage from "./ConnectPage/ConnectPage";
import RegionPage from "./RegionPage/RegionPage";
import MonthPage from "./MonthPage/MonthPage";
import EndingPage from "./EndingPage/EndingPage";



function App() {
  return <div className="font-poppings bg-main">
    <LandingPage />
    <IntroPage />
    <CuisinePage />
    <IngredientPage />
    <ConnectPage />
    <RegionPage />
    <MonthPage />
    <EndingPage />
  </div>;
}

export default App;

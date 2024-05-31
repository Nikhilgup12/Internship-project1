import {Route,Switch} from "react-router-dom"
import LandingPage from "./components/LandingPage"
import CosmeticDentist from "./components/CosmeticDentist"
import CrownBridge from "./components/CrownBridge"
import GeneralDentist from "./components/GeneralDentist" 
import DentalImplants from "./components/DentalImplants"
import SurgicalDentist from "./components/SurgicalDentist"
import DentalProblems from "./components/DentalProblems"
import ContactForm from "./components/ContactForm"
import './App.css';

const App =()=>{
  return (
    <>
     <Switch>
        <Route exact path="/contact" component={ContactForm} /> 
        <Route exact path="/landing" component={LandingPage} /> 
        <Route exact path="/cosmetic" component={CosmeticDentist} /> 
        <Route exact path="/crown" component={CrownBridge} /> 
        <Route exact path="/general" component={GeneralDentist} /> 
        <Route exact path="/dentalimp" component={DentalImplants} /> 
        <Route exact path="/surgical" component={SurgicalDentist} /> 
        <Route exact path="/dentalprob" component={DentalProblems} /> 
     </Switch>
    </>
  )
}

export default App;

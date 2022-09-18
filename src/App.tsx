import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import TicketSection from "./components/TicketSection/TicketSection";
import GameRules from "./components/GameRules/GameRules";

function App() {
  return (
    <>
      <ToastContainer />
      <Navigation />
      <Main />
      <TicketSection />
      <GameRules />
    </>
  );
}

export default App;

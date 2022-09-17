import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import TicketSection from "./components/TicketSection/TicketSection";
import LuckyNumber from "./components/LuckyNumber/LuckyNumber";
import GameRules from "./components/GameRules/GameRules";

function App() {
  return (
    <>
      <Navigation />
      <Main />
      <GameRules />
      <TicketSection />
      <LuckyNumber item={0} />
    </>
  );
}

export default App;

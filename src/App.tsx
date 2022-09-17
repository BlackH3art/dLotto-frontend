import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import TicketSection from "./components/TicketSection/TicketSection";
import LuckyNumber from "./components/LuckyNumber/LuckyNumber";

function App() {
  return (
    <>
      <Navigation />
      <Main />
      <TicketSection />
      <LuckyNumber item={0} />
    </>
  );
}

export default App;

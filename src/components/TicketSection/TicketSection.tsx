import Ticket from "./Ticket";

const TicketSection = () => {
  return (
    <>
      <section className="bg-neutral-200 w-full flex justify-center">
        <div className="w-3/5 min-h-[50vh] border-2 bg-neutral-200 flex justify-center">
          <Ticket />
        </div>
      </section>
    </>
  );
};

export default TicketSection;

import Ticket from "./Ticket";


const TicketSection = () => {

  return (
    <>
      <section className="w-full flex justify-center">

        <div className="w-3/5 min-h-[50vh] border-2 border-blue-500 flex justify-center">

          <Ticket />

        </div>

      </section>
    </>
  )
}

export default TicketSection;
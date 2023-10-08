/* eslint-disable react/prop-types */

const EventDetails = ({ event }) => {

    const { event_title, event_level, event_img,event_time,event_details } = event || {}
    return (
        <div>
            <div className="relative grid h-[40rem] w-full  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div >
                    <img className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none" src={event_img} alt="" />
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 py-14 px-6 md:px-12">
                    <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                        {event_title}
                    </h2>
                    <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
                        {event_level}
                    </h5>
                    <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
                        {event_time}
                    </h5>
                    <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
                        {event_details}
                    </h5>
                    <button className="btn mt-2 font-bold  bg-yellow-400">Book Your slot</button>

                </div>
            </div>
            
        </div>
    );
};

export default EventDetails;

// bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')]
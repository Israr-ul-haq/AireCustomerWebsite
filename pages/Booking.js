import WebsiteLayout from "../components/layouts/WebsiteLayout";

const Booking = () => {
    return ( 
        <div>
            <h1>Booking</h1>
        </div>
     );
}

export default  Booking ;

Booking.getLayout = function getLayout(page) {
    return <WebsiteLayout>{page}</WebsiteLayout>;
  };
  
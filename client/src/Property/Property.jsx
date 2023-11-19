import React, { useContext, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import {getAllBookingsByUser } from "../utils/api";
import useProperty from "../../hooks/useProperty";
import { PuffLoader } from "react-spinners";
import { AiFillHeart, AiTwotoneCar } from "react-icons/ai";
import { MdLocationOn, MdMeetingRoom } from "react-icons/md";
import { FaBed, FaParking, FaShower } from "react-icons/fa";
import "./Property.css";
import Map from "../components/Map/Map";
import useAuthCheck from "../../hooks/useAuthCheck";
import { useAuth0 } from "@auth0/auth0-react";
// import BookingModel from "../components/BookingModal/BookingModal";
import BookingModal from "../components/BookingModal/BookingModal";
import { toast } from "react-toastify";
import UserDetailContext from "../components/UserContext/UserDetailContext";
import { Button } from "@mantine/core";
const Property = () => {
  // const {userDetails:{token}} = useContext(UserDetailContext)
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  console.log(id)
  const { data, isLoading, isError, refetch } = useProperty(id);
  const [modalOpened, setModelOpened] = useState(false);
  const validateLogin = useAuthCheck();
  const { user } = useAuth0();
  const [isClicked, setIsClicked] = useState(false);
  // const [bookings, setBookings] = useState([]);
  
  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log("hello")
  };

  const {
    userDetails: { token, bookings},
    setuserDetails,
  } = useContext(UserDetailContext);

  const {mutate} =useMutation({
    mutationFn:()=>getAllBookingsByUser(user?.email), // Implement this function
    onSuccess:(response)=>setDetails(response),
    onError:(response)=>toast.error("Error fetching bookings:", response),
    });
    useEffect(()=>{
      mutate()
  
    },[])
    const setDetails = (response) => {
      setuserDetails({
      bookings: response.data.bookedVisits,
    }); 

  }

  if (isError) {
    return <div className="flexCenter paddings">Error while fetching data</div>;
  }
  if (isLoading) {
    return (
      <div className="flexCenter paddings " style={{ height: "60vh" }}>
        <PuffLoader size={100} color="#000" loading={true} />
      </div>
    );
  }
  return (
    <div className="paddings innerWidth flexColStart property-container">
      <div className="like">
      <AiFillHeart
      size={24}
      color={isClicked ? 'black' : 'white'}
      onClick={()=>handleClick()}
      style={{ cursor: 'pointer' }}
    />
      </div>
      {/* image */}
      <img src={data?.image} alt="" />
      {/* property details */}

      <div className="flexCenter property-details">
        {/* left */}
        <div className="flexColStart left">
          {/* head */}
          <div className="flexStart head">
            <span className="primaryText">{data?.title}</span>
            <span className="orangeText" style={{ font: "1.5rem" }}>
              ${data?.price}
            </span>
          </div>

          <div className=" facilities flexStart">
            <div className="flexStart facility">
              <FaShower size={20} color="black" />
              <span>{data?.facilities.bathrooms} Bathrooms</span>
            </div>
            <div className="flexStart facility">
              <MdMeetingRoom size={20} color="black" />
              <span>{data?.facilities.bedrooms} Bedrooms</span>
            </div>
            <div className="flexStart facility">
              <AiTwotoneCar size={20} color="black" />
              <span>{data?.facilities.parking} Parking</span>
            </div>
          </div>
          <span className="secondaryText" style={{ textAlign: "justify" }}>
            {data?.description}
          </span>

          <div className="flexStart " style={{ gap: "1rem" }}>
            <MdLocationOn size={20} />
            <span className="secondaryText">
              {data?.address},{data?.city},{data?.country}
            </span>
            <span>
              {/* {res} */}
            </span>
          </div>

         {/* booking button */}
         {bookings?.map((booking) => booking?.id.split(",").slice(-1)[0]).includes(id) ? (
              <>
                <Button
                  variant="outline"
                  w={"100%"}
                  color="red"
                  // onClick={() => cancelBooking()}
                  // disabled={cancelling}
                >
                  <span>Cancel booking</span>
                </Button>
                <span>
                  Your visit already booked for date{" "}
                  {bookings?.filter((booking) => booking?.id.split(",").slice(-1)[0] === id)[0].date}
                </span>
              </>
            ) : (
              <button
                className="button"
                onClick={() => {
                  validateLogin() && setModelOpened(true);
                }}
              >
                Book your visit
              </button>
            )}

            <BookingModal
              opened={modalOpened}
              setOpened={setModelOpened}
              propertyId={id}
              email={user?.email}
            />
          </div>


        {/* right */}
        <div className="map">
          <Map
            address={data?.address}
            city={data?.city}
            country={data?.country}
          />
        </div>
      </div>
    </div>
  );
};

export default Property;

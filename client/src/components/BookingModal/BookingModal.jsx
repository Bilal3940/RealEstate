import React, { useContext, useState } from "react";
import { Modal, TextInput, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import UserDetailContext from "../UserContext/UserDetailContext.js";
import { useMutation } from "react-query";
import { bookVisit } from "../../utils/api.js";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import { FaCommentsDollar } from "react-icons/fa";

const BookingModal = ({ opened, setOpened, email, propertyId }) => {
  console.log(propertyId)
  const [selectedDate, setSelectedDate] = useState(null);

  const {
    userDetails: { token  },
    setuserDetails,
  } = useContext(UserDetailContext);
  const handleSuccess = () => {
    toast.success("Visit Booked Successfully", { position: "bottom-right" });
      setuserDetails((prev) => ({
        ...prev,
        bookings: [
          ...prev.bookings,
          {
            id: propertyId,
            date: dayjs(selectedDate).format("DD/MM/YY")
          }
        ]
      }));
      console.log(setuserDetails);
  };
  const { mutate, isLoading } = useMutation({
    mutationFn: () => bookVisit(selectedDate, propertyId, email,token),
    onSuccess: () => handleSuccess(),
    onError: (response) => toast.error("aleady booked"),
    onSettled: () => setOpened(false),
  });
  // Close the modal and reset form fields

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Book Property"
      centered
    >
      <div className="flexColCenter">
        <DatePicker
          label="Select Date of Visit"
          value={selectedDate}
          onChange={setSelectedDate}
          minDate={new Date()}
        />

        <Button disabled={!selectedDate} onClick={() => mutate()} color="blue">
          Book Property
        </Button>
      </div>
    </Modal>
  );
};

export default BookingModal;

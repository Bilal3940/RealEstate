import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const getallProperties = async () => {
  try {
    const response = await api.get("/properties/allproperties", {
      timeout: 10 * 1000,
    });
    if (response.status === 4000 || response.status === 5000) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("something went wrong");
    throw error;
  }
};

export const fetchProperty = async (id) => {
  try {
    const response = await api.get(`/properties/${id}`, {
      timeout: 10 * 1000,
    });
    if (response.status === 4000 || response.status === 5000) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("something went wrong");
    throw error;
  }
};

//function to create new user in database

export const CreateUser = async (email, token) => {
  try {
    const res = await api.post(
      `/user/register`,
      { email },{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};
export const bookVisit = async (date, propertyId,email, token)=>{
  try {
    const res = await api.post(
      `/user/booking/",${propertyId}`,
     { 
      email,
      id:propertyId,
      date:dayjs(date).format('DD/MM/YY')
    },{
      headers:{
        "Authorization":`Bearer ${token}`,
      }
    }
    )
    
  } catch (error) {
    toast.error(error.message );
    throw error
    
  }
}
export const favorites = async(id, email,token)=>{
  try {
    const res = await api.post(
      `/user/addtofavorites/${id}`,
      {
        email,
        id:id,
      },
      {
        headers:{
          'Authorization':`Bearer ${token}`,
        }
      }
    )
    
  } catch (error) {
    toast.error(error.message);
    throw error
  }
}
export const getAllBookingsByUser = async (email) => {
  try {
    const bookings = await api.post(`/user/allbookings`, {
      email: email,
    });

    return bookings;

  } catch (error) {
    toast.error(error.message);
    throw error;
  }
};

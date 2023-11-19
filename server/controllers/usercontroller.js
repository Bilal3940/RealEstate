import asyncHandler from 'express-async-handler'
import {prisma} from '../config/prismaconfig.js';
import exp from 'constants';
//function to create a user
export const createUser =asyncHandler(async(req, res)=>{
    console.log("creating the user")
    let {email} = req.body
    const userExists = await prisma.user.findUnique({where:{email}})
    if(!userExists){
        const user = await prisma.user.create({data:req.body})
        res.send({
            message:"User registered successfully",
            user: user,
    })

    }
    else res.status(201).send({message:"user already exists"})

}) 
//function to book a property
export const bookingProperty = asyncHandler(async(req,res)=>{
    const {email,date} = req.body;
    const {id} = req.params
    try {
        const alreadyBooked = await prisma.user.findUnique({where:{email}, select:{bookedVisits:true}})
        if(alreadyBooked.bookedVisits.some((visit)=>visit.id===id)){
            res.status(400).json({message:"already booked"})
        }
        else{
            await prisma.user.update({
                where:{email},
                data:{
                bookedVisits:{push:{id,date}}
                }
            })
            res.send("property booked successfully")
        }
    } catch (error) {
        throw new Error(error.message)
    }

})
//function to get all the bookings by a user
export const allBookings = asyncHandler(async (req, res) => {
    console.log("fetching bookings")
    const { email } = req.body;
    try {
      const user = await prisma.user.findUnique({
        where: { email },
        select: { bookedVisits: true },
      });
  
      res.send(user);
    } catch (error) {
      throw new Error(error.message);
    }
  });
//function to cancel a bookings
export const cancelBookings = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { email } = req.body;
    try {
      let user = await prisma.user.findUnique({
        where: { email },
        select: { bookedVisits: true },
      });
      const index = user.bookedVisits.findIndex((visit) => visit.id === id);
      if (index === -1) { // Fix: Use triple equals (===) for comparison
        res.status(400).json({ message: "booking not found" });
      } else {
        user.bookedVisits.splice(index, 1);
        await prisma.user.update({
          where: { email },
          data: {
            bookedVisits: user.bookedVisits
          },
        });
        res.send("bookings cancelled successfully");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  });

  //function to add a property in favorites of user
  export const addToFavorites= asyncHandler(async (req,res)=> {
    const {email} = req.body;
    const {pid} = req.params;
    console.log('adding',{propertyId : pid})
    try {
        const user = await prisma.user.findUnique({where:{email}})
        if(user.favPropertiesID.includes(pid))
        {
            const updateUser = await prisma.user.update({
                where:{email},
                data:{
                    favPropertiesID:{
                        set:user.favPropertiesID.filter((id)=>id!==pid)
                    }
                }
            })
            res.send({message:"removed from favorites", user:updateUser})
        }
        else{
            const updateUser = await prisma.user.update({
                where:{email},
                data:{
                    favPropertiesID:{
                        push:pid
                    }
                }

            })
            res.send({message:"added to favorites", user:updateUser})
        }

    }
    catch(error){
        throw new Error(error.message)
    }
})

//function to get all the favorite properties of a user

export const getFavorites = asyncHandler(async (req, res) => {
    const {email} = req.body;
    try {
        const user = await prisma.user.findUnique({where:{email}})
        res.send({favoritesproperites:user.favPropertiesID})
    }
    catch(error){
        throw new Error(error.message)
    }
})


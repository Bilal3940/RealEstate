import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaconfig.js";
export const registerProperties = asyncHandler(async (req, res) => {
  console.log("creating the property");
  const {
    title,
    description,
    price,
    address,
    city,
    country,
    image,
    facilities,
    UserEmail,
  } = req.body.data;
  try {
    const property = await prisma.properties.create({
      data: {
        title,
        description,
        price,
        address,
        city,
        country,
        image,
        facilities,
        owner: { connect: { email: UserEmail } },
      },
    });
    res.send({ message: "property created successfully", property });
  } catch (error) {
    if (error.code === "p2002") {
      throw new Error("Property with the address already exists");
    }
    throw new Error(error.message);
  }
});

export const GetAllProperties = asyncHandler(async(req,res)=>{
  console.log("I am innnnn")
    try {
        const properties = await prisma.properties.findMany({
            orderBy:{
                createdAt:"desc",
            },
        });
        res.send(properties)

    } catch (error) {
        res.send(error.message)
        console.log(error.message)
    }
})

export const getProperty = asyncHandler(async(req, res)=>{
  const {id} = req.params
    try {
      const property = await prisma.properties.findUnique({where:{id}})
      res.send(property)
      
    } catch (error) {
    throw new Error(error.message)
    }
})

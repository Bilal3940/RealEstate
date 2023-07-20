import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { SectionTitle } from "../components/SectionTitle";
import qs from "qs";

export const LeaderBoard = () => {
  const [leaderBoarddata, setData] = useState(null);
  const apiurl = "http://localhost:5173";

  // Query For GraphQL
  const newReleaseQuery = qs.stringify(
    {
      populate: {
        leaderboard: {
          populate: ["image.data.attributes"],
        },
      },
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          headers: {
            'X-RapidAPI-Key': '7f7d8fff60msh4da5e9a19d90978p11128fjsn5230c7177874', // Replace 'YOUR_API_KEY' with your actual API key
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
          },
        };
        const res = await fetch(
          "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en",
          options
        );
        const data = await res.json();
        console.log(data);
        setData(data.titles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (leaderBoarddata === null) {
    return <div>Loading...</div>;
  }
  return (
    <section className="w-screen my-10 tablet:my-20 flex justify-center flex-col items-center gradient-1 bg-DarkBg1">
      <div className="desktopLarge:w-[1280px]  z-40 desktop:w-10/12 w-11/12  flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* <SectionTitle title={"Leaderboard"} fontSizes={["text-3xl", "tablet:text-6xl"]} /> */}
          <h3>hello</h3>
        </motion.div>
        <div className="flex justify-center items-center my-10 tablet:my-20 relative tablet:leadboard-strip">
          <div className="hidden tablet:flex">
            {leaderBoarddata.map(({ availability, jawSummary, summary }, index) => (
              <div className="flex flex-col items-center relative" key={index}>
                <div className={`w-full ${index === 1 ? "leadboard-scale" : "leadboard-item"}`} >
                  {/* src=*/}
                  {/* alt={"hello"} */}
                  {apiurl + availability.availabilityDate} 
                  
                  </div>
                <div
                  className={`w-full flex justify-center absolute bottom-[10%]  ${
                    index === 1 ? "leadboard-scale" : "leadboard-item"
                  }`}
                >
                  <div className="bg-[#d9e0ec33] bg-opacity-80 p-4 w-10/12 rounded">
                    <h5 className="font-body text-xl font-bold">
                      {jawSummary.genres.id}, <span>{summary.id}</span>
                    </h5>
                    <p className="text-xl font-body uppercase">Winner</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

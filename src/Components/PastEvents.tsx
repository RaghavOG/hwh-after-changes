import { Event2018, Event2019, Event2020 } from "@/public";
import Image from "next/image";
import { ContainerScroll } from "./container-scroll-animation";

export default function PastEvents (){
    return (
        <>
            <ContainerScroll
  titleComponent={
    <h1 className="text-4xl mb-12 md:text-6xl font-bold text-[#DD7CB2]">
      After 3 Successful Events
    </h1>
  }
>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 p-4">
    {/* Event Card 2018 */}
    <div className="bg-[#222222] p-4 rounded-lg shadow-lg backdrop-blur-lg bg-opacity-40">
      <Image
        src={Event2018} // replace with actual image path
        alt="Event 2018"
        width={300}
        height={200}
        className="rounded-lg"
      />
      <h3 className="text-2xl font-semibold text-[#DD7CB2] mt-4">
        HackWithHer 2018
      </h3>
      <p className="text-gray-400 mt-2">
        The first-ever HackWithHer event! A groundbreaking start with over 100 participants, filled with amazing ideas and projects.
      </p>
    </div>

    {/* Event Card 2019 */}
    <div className="bg-[#222222] p-4 rounded-lg shadow-lg backdrop-blur-lg bg-opacity-40">
      <Image
        src={Event2019} // replace with actual image path
        alt="Event 2019"
        width={300}
        height={200}
        className="rounded-lg"
      />
      <h3 className="text-2xl font-semibold text-[#3FBFBD] mt-4">
        HackWithHer 2019
      </h3>
      <p className="text-gray-400 mt-2">
        The event grew in size with new challenges and more sponsors, attracting over 200 talented participants from across the country.
      </p>
    </div>

    {/* Event Card 2021 */}
    <div className="bg-[#222222] p-4 rounded-lg shadow-lg backdrop-blur-lg bg-opacity-40">
      <Image
        src={Event2020} // replace with actual image path
        alt="Event 2021"
        width={300}
        height={200}
        className="rounded-lg"
      />
      <h3 className="text-2xl font-semibold text-[#DD7CB2] mt-4">
        HackWithHer 2021
      </h3>
      <p className="text-gray-400 mt-2">
        A spectacular edition with a focus on innovation in AI and Web3, drawing over 300 participants and industry experts as judges.
      </p>
    </div>
  </div>
</ContainerScroll>

        </>
    )
    }
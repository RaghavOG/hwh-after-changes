import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion"
import { Highlight } from "./ui/hero-highlight"

export default function Faqs() {
  return (
    <div className="bg-transparent backdrop-blur-lg text-white p-4 sm:p-6 md:p-8 rounded-lg max-w-4xl mx-auto my-6 sm:my-8 md:my-12 shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-6 text-center"><Highlight className="text-4xl sm:text-4xl md:text-4xl lg:text-4xl">Frequently Asked Questions</Highlight></h2>
      <Accordion type="single" collapsible className="space-y-2 sm:space-y-4">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg sm:text-xl font-medium hover:text-[#DD7CB2] transition-colors duration-200">
            Who can register for the hackathon?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base">
            Only the team leader is required to register. Once the team leader registers, they can invite the other members to join.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg sm:text-xl font-medium hover:text-[#DD7CB2] transition-colors duration-200">
            What are the team size requirements?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base">
            Teams can consist of up to 4 members. Any fewer or more will not be eligible for participation.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg sm:text-xl font-medium hover:text-[#DD7CB2] transition-colors duration-200">
            When is the hackathon taking place?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base">
            The hackathon will take place on 7th and 8th March. Ensure your team is ready with your project ideas!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg sm:text-xl font-medium hover:text-[#DD7CB2] transition-colors duration-200">
            Is there any extra benefit for all-girls teams?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base">
            Yes! There is a special benefit for teams that are entirely composed of female participants. They will receive additional perks and advantages during the event.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg sm:text-xl font-medium hover:text-[#DD7CB2] transition-colors duration-200">
            How do we register for the hackathon?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base">
            The team leader can register on our official website. Once registered, the team leader will receive an invite link to add the rest of the team members.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-lg sm:text-xl font-medium hover:text-[#DD7CB2] transition-colors duration-200">
            What is the judging criteria for the hackathon?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base">
            The judging will be based on creativity, technicality, the usability of the project, and the impact it can create. Make sure your project stands out!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-lg sm:text-xl font-medium hover:text-[#DD7CB2] transition-colors duration-200">
            Is there any prize for the winners?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base">
            Yes! The winning team will receive exciting prizes, recognition, and the opportunity to showcase their project to potential investors and tech companies.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className="text-lg sm:text-xl font-medium hover:text-[#DD7CB2] transition-colors duration-200">
            Can we participate virtually?
          </AccordionTrigger>
          <AccordionContent className="text-sm sm:text-base">
            Yes, the hackathon will be held virtually, allowing participants to join from anywhere in the world. All you need is a stable internet connection and the drive to create!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
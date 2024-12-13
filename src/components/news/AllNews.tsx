import { NewsGrid } from "./NewsGrid";
import { HeroResusable } from "../reusable/HeroReusable";
import BreadCrumb from "../reusable/BreadCrumb";
import SectionWrapper from "../reusable/SectionWrapper";

interface NewsItem {
  title: string;
  date: string;
  image: string;
  slug: string;
}

export const newsItemsData: NewsItem[] = [
  {
    title: "Offshore crane safety systems",
    date: "16 Dec 2016",
    image: "/services/About US.jpg",
    slug: "offshore-crane-safety-systems",
    D3Data: "Pre-use checks on a diesel hydraulic crane fitted with a pneumatic control system failed to identify or question why the boom hoist upper limit system was not functioning in the manner detailed in the crane operation manual. This malfunction was the result of an omission to fit a blanking plug in a pneumatic valve in the control system. A fault developed in the boom hydraulic pump actuator which allowed the boom to continue hoisting after the control lever was returned to neutral. This fault in the pneumatic control system allowed the boom to be hoisted beyond both the upper hoist operational limit and the upper hoist ultimate limit.",
    D2Image: "/services/Preparedness.jpg",
    D2Data: "Further details about the crane safety systems and their impact on industry operations.",
    D3Title: "The UK Health and Safety Executive (HSE) has published the following safety alert covering two recent crane incidents in which the crane boom upper hoist limit systems failed to prevent the crane booms from being hoisted up too far and against the boom backstops.",
    D1Data: "Offshore safety systems are crucial for minimizing risks associated with crane operations.",
    D4Image1: "/services/Prevention.jpg",
    D4Image2: "/services/Recovery.jpg",
    D4Data: "The continued hoisting resulted in the booms fully compressing the boom backstops, causing high loading on the boom upper main chords with the eventual catastrophic failure of the booms. Measures should be in place to verify the correct operation and the correct settings of all safety systems and limits on offshore cranes."
  },
  {
    title: "BSEE: Heat-related Illnesses occurring offshore",
    date: "16 Oct 2023",
    image: "/services/Preparedness.jpg",
    slug: "bsee-heat-related-illnesses-occurring-offshore",
    D3Data:"Heat exhaustion can be defined as “the body’s response to an excessive loss of water and salt, usually through excessive sweating.” Heat exhaustion is most likely to affect people with high blood pressure and those working in a hot environment. IMCA members in their operations can experience high temperatures on their worksites and these temperatures and humidity can cause a person to have a higher potential of heat stress. Heat stress can result in heat stroke, heat exhaustion, heat cramps, or heat rashes. Heat can also increase the risk of injuries in workers as it may result in sweaty palms, fogged-up safety glasses, and dizziness. IMCA has published an Information Note on working in hot weather conditions, which can be found here",
    D2Image: "/services/Preparedness.jpg",
    D2Data: "Further details about the crane safety systems and their impact on industry operations.",
    D3Title: "The UK Health and Safety Executive (HSE) has published the following safety alert covering two recent crane incidents in which the crane boom upper hoist limit systems failed to prevent the crane booms from being hoisted up too far and against the boom backstops.",
    D1Data: "The United States Bureau of Safety and Environmental Enforcement (BSEE) has published Safety Alert 467 relating to heat related illnesses occurring offshore.",
    D4Image1: "/services/Recovery.jpg",
    D4Image2: "/services/Response.jpg",
    D4Data: "The continued hoisting resulted in the booms fully compressing the boom backstops, causing high loading on the boom upper main chords with the eventual catastrophic failure of the booms. Measures should be in place to verify the correct operation and the correct settings of all safety systems and limits on offshore cranes."
  },
  {
    title: "Offshore tank container rigging failure",
    date: "1 Nov 2011",
    image: "/services/Prevention.jpg",
    slug: "offshore-tank-container-rigging-failure",
    D3Data:"Following the first incident, the chain link was sent to a laboratory to establish the cause of the failure. It was, at the time, concluded that the most likely scenario that caused the fast sudden fracture was a forging defect in the master link. Following the second incident some seven months later, the similarities between the two incidents were apparent and it was established that both rigging sets were purchased from a single batch. With reference to similar incidents in the industry, hydrogen induced cracking or manufacturing process errors could not be ruled out. As this failure mechanism could not be determined by non-destructive examination methods, it was decided to replace all rigging sets from this batch (32 off) with new rigging sets.",
    D2Image: "/services/Preparedness.jpg",
    D2Data: "In both cases a tank container was rearranged on deck and damage was observed prior to actually lifting the container. There was no other damage than to the link itself.",
    D3Title: "The UK Health and Safety Executive (HSE) has published the following safety alert covering two recent crane incidents in which the crane boom upper hoist limit systems failed to prevent the crane booms from being hoisted up too far and against the boom backstops.",
    D1Data: "A Member has reported two incidents in which the rigging of an offshore tank container failed as a result of a cold fracture.",
    D4Image1: "/services/Prevention.jpg",
    D4Image2: "/services/Recovery.jpg",
    D4Data: "The continued hoisting resulted in the booms fully compressing the boom backstops, causing high loading on the boom upper main chords with the eventual catastrophic failure of the booms. Measures should be in place to verify the correct operation and the correct settings of all safety systems and limits on offshore cranes."
  },
  {
    title: "UK HSE: Offshore crane boom hoist failures",
    date: "10 Feb 2022",
    image: "/services/Recovery.jpg",
    slug: "uk-hse-offshore-crane-boom-hoist-failures",
    D3Data: "Pre-use checks on a diesel hydraulic crane fitted with a pneumatic control system failed to identify or question why the boom hoist upper limit system was not functioning in the manner detailed in the crane operation manual. This malfunction was the result of an omission to fit a blanking plug in a pneumatic valve in the control system. A fault developed in the boom hydraulic pump actuator which allowed the boom to continue hoisting after the control lever was returned to neutral. This fault in the pneumatic control system allowed the boom to be hoisted beyond both the upper hoist operational limit and the upper hoist ultimate limit.",
    D2Image: "/services/Preparedness.jpg",
    D2Data: "Further details about the crane safety systems and their impact on industry operations.",
    D3Title: "The UK Health and Safety Executive (HSE) has published the following safety alert covering two recent crane incidents in which the crane boom upper hoist limit systems failed to prevent the crane booms from being hoisted up too far and against the boom backstops.",
    D1Data: "Offshore safety systems are crucial for minimizing risks associated with crane operations.",
    D4Image1: "/services/Prevention.jpg",
    D4Image2: "/services/Recovery.jpg",
    D4Data: "The continued hoisting resulted in the booms fully compressing the boom backstops, causing high loading on the boom upper main chords with the eventual catastrophic failure of the booms. Measures should be in place to verify the correct operation and the correct settings of all safety systems and limits on offshore cranes."
  },
  {
    title: "High potential near-miss: Damage to small boat during offshore survey operations",
    date: "27 Jun 2016",
    image: "/services/Response.jpg",
    slug: "high-potential-near-miss-damage-to-small-boat-during-offshore-survey-operations",
    D3Data: "Pre-use checks on a diesel hydraulic crane fitted with a pneumatic control system failed to identify or question why the boom hoist upper limit system was not functioning in the manner detailed in the crane operation manual. This malfunction was the result of an omission to fit a blanking plug in a pneumatic valve in the control system. A fault developed in the boom hydraulic pump actuator which allowed the boom to continue hoisting after the control lever was returned to neutral. This fault in the pneumatic control system allowed the boom to be hoisted beyond both the upper hoist operational limit and the upper hoist ultimate limit.",
    D2Image: "/services/Preparedness.jpg",
    D2Data: "Further details about the crane safety systems and their impact on industry operations.",
    D3Title: "The UK Health and Safety Executive (HSE) has published the following safety alert covering two recent crane incidents in which the crane boom upper hoist limit systems failed to prevent the crane booms from being hoisted up too far and against the boom backstops.",
    D1Data: "Offshore safety systems are crucial for minimizing risks associated with crane operations.",
    D4Image1: "/services/Prevention.jpg",
    D4Image2: "/services/Recovery.jpg",
    D4Data: "The continued hoisting resulted in the booms fully compressing the boom backstops, causing high loading on the boom upper main chords with the eventual catastrophic failure of the booms. Measures should be in place to verify the correct operation and the correct settings of all safety systems and limits on offshore cranes."
  },
  {
    title: "UK HSE: Offshore crane boom hoist failures",
    date: "10 Febr 2022",
    image: "/services/About US.jpg",
    slug: "uk-hse-offshore-crane-boom-hoist-failures",
    D3Data: "Pre-use checks on a diesel hydraulic crane fitted with a pneumatic control system failed to identify or question why the boom hoist upper limit system was not functioning in the manner detailed in the crane operation manual. This malfunction was the result of an omission to fit a blanking plug in a pneumatic valve in the control system. A fault developed in the boom hydraulic pump actuator which allowed the boom to continue hoisting after the control lever was returned to neutral. This fault in the pneumatic control system allowed the boom to be hoisted beyond both the upper hoist operational limit and the upper hoist ultimate limit.",
    D2Image: "/services/Preparedness.jpg",
    D2Data: "Further details about the crane safety systems and their impact on industry operations.",
    D3Title: "The UK Health and Safety Executive (HSE) has published the following safety alert covering two recent crane incidents in which the crane boom upper hoist limit systems failed to prevent the crane booms from being hoisted up too far and against the boom backstops.",
    D1Data: "Offshore safety systems are crucial for minimizing risks associated with crane operations.",
    D4Image1: "/services/Prevention.jpg",
    D4Image2: "/services/Recovery.jpg",
    D4Data: "The continued hoisting resulted in the booms fully compressing the boom backstops, causing high loading on the boom upper main chords with the eventual catastrophic failure of the booms. Measures should be in place to verify the correct operation and the correct settings of all safety systems and limits on offshore cranes."
  },
];

export const AllNewsPage = () => {


  const navTrain = [
    { link: "/", label: "Home", id: "a1" },
    { link: "/", label: "News", id: "a2" },
    { link: "/News", label: "View All", id: "a3" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroResusable
        title="What's New?"
        image="/news/intro.png"
        description="Stay up-to-date with Everything about EmergeX related"
        textColor="white"
        className="absolute inset-0 bg-gradient-to-r from-white/0 to-black/90"
      />

      {/* Breadcrumb */}
      <SectionWrapper>
        <BreadCrumb navTrainData={navTrain} />
        <NewsGrid news={newsItemsData} />
      </SectionWrapper>
    </main>
  );
};

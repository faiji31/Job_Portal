import Banner from "@/components/Banner";
import FeatureJob from "@/components/FeatureJob";
import Pricing from "@/components/Pricing";
import Role from "@/components/Role";
import StatsSection from "@/components/StatasSection";


export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
     <Banner></Banner>
     <StatsSection></StatsSection>
     <FeatureJob></FeatureJob>
     <Pricing></Pricing>
     <Role></Role>
    </div>
  );
}

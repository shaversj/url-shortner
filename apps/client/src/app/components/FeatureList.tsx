import BrandRecognition from "./icons/BrandRecognition";
import DetailedRecords from "./icons/DetailedRecords";
import FullyCustomizable from "./icons/FullyCustomizable";
import Feature from "./Feature";

export default function FeatureList(){
  const features = [
    {
      title: "Brand Recognition",
      description: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
      icon: <BrandRecognition />
    },
    {
      title: "Detailed Records",
      description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      icon: <DetailedRecords />
    },
    {
      title: "Fully Customizable",
      description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      icon: <FullyCustomizable />
    }
  ]

  return (
    <div className={"flex flex-col gap-y-[5.75rem] lg:flex-row gap-x-[1.875rem] h-[24.938rem] pt-[6.25rem]"}>
      {features.map((feature, index) => {
        return (
          <Feature key={index} title={feature.title} description={feature.description} icon={feature.icon}/>
        )
      })}
    </div>
  )
}

type FeatureProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  paddingOffset?: string;
}

export default function Feature({title, description, icon}: FeatureProps) {
  return (
    <div className={"rounded-md bg-white relative px-8 pb-[2.563rem] w-[21.875rem] h-[16.688rem] [&:nth-child(2)]:mt-[2.75rem] last:mt-[5.5rem]"}>
      <div className={"h-[5.5rem] w-[5.5rem] absolute -translate-y-1/2 rounded-full bg-darkPurple grid place-items-center"}>
        {icon}
      </div>

      <h2 className={"text-[1.375rem] leading-[2.063rem] font-bold text-darkGray pt-[4.813rem]"}>{title}</h2>
      <p className={"font-medium text-[0.938rem] leading-[1.625rem] pt-3"}>{description}</p>
    </div>
  )
}

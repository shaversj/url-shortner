type StatisticsSectionProps = {
  children: React.ReactNode;
  urls: any;
}

export default function StatisticsSection({children, urls}: StatisticsSectionProps) {
  return (
    <section className={`bg-lightBlue h-[1450px] pb-[5rem] lg:h-full pt-[10rem] px-6 lg:px-[10.313rem] lg:pb-[7.5rem]  ${urls.length > 0 ? "lg:pt-[120px]" : "lg:pt-[12.75rem]"}`}>

      {children}
    </section>
  )
}


import { UrlObject } from '../types/types';

type StatisticsSectionProps = {
  children: React.ReactNode;
  urls: UrlObject[];
};

export default function StatisticsSection({ children, urls }: StatisticsSectionProps) {
  return (
    <section className={`bg-lightBlue h-[1490px] px-6 pb-[5rem] pt-[10rem] lg:h-full lg:px-[10.313rem] lg:pb-[10.5rem] ${urls.length > 0 ? 'lg:pt-[120px]' : 'lg:pt-[12.75rem]'}`}>{children}</section>
  );
}

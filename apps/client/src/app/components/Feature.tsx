type FeatureProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  paddingOffset?: string;
};

export default function Feature({ title, description, icon }: FeatureProps) {
  return (
    <article className={'relative h-[16.688rem] w-[20.438rem] rounded-md bg-white px-8 pb-[2.563rem] lg:w-full lg:last:mt-[5.5rem] lg:[&:nth-child(2)]:mt-[2.75rem]'}>
      <div className={'bg-darkPurple absolute grid h-[5.5rem] w-[5.5rem] -translate-y-1/2 translate-x-full place-items-center rounded-full lg:translate-x-0'}>{icon}</div>

      <h2 className={'text-darkGray pt-[4.813rem] text-center text-[1.375rem] font-bold leading-[2.063rem] lg:text-left'}>{title}</h2>
      <p className={'text-lightGray pt-3 text-center text-[0.938rem] font-medium leading-[1.625rem] lg:text-left'}>{description}</p>
    </article>
  );
}

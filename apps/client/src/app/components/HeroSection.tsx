import IllustrationWorking from './icons/IllustrationWorking';
import MobileIllustrationWorking from './icons/MobileIllustrationWorking';

export default function HeroSection() {
  return (
    <section className={'grid grid-cols-[auto] pt-[1.438rem] lg:w-[90rem] lg:grid-cols-[auto,auto] lg:items-center lg:gap-x-[6.375rem] lg:pt-[4.875rem]'}>
      <div className={'flex flex-col items-center pt-[2.313rem] lg:flex-none lg:items-start lg:pt-0'}>
        <h1 className={'text-center text-[2.625rem] font-bold leading-[3rem] tracking-[-0.066rem] lg:text-left lg:text-[5rem] lg:leading-[5.625rem] lg:tracking-[-0.125rem]'}>
          More than just shorter links
        </h1>
        <p
          className={
            'text-lightGray pt-[0.938rem] text-center text-[1.125rem] font-medium leading-[1.875rem] tracking-[0.008rem] lg:pt-0 lg:text-left lg:text-[1.375rem] lg:leading-[2.375rem] lg:tracking-[0.009rem]'
          }
        >
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <button className={'bg-aqua mt-[2.375rem] h-[3.5rem] w-[12.313rem] rounded-full text-[1.25rem] font-bold leading-[1.875rem] text-white'}>Get Started</button>
      </div>

      <div className={'row-start-1 overflow-visible lg:row-start-auto'}>
        <IllustrationWorking className={'hidden lg:block'} />
        <MobileIllustrationWorking className={'w-full sm:min-w-[375px] lg:hidden'} />
      </div>
    </section>
  );
}

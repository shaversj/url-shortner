import IllustrationWorking from "./icons/IllustrationWorking";
import MobileIllustrationWorking from "./icons/MobileIllustrationWorking";

export default function HeroSection(){
  return (
    <section className={"grid grid-cols-[auto] pt-[1.438rem] lg:grid-cols-[auto,auto] lg:gap-x-[6.375rem] lg:items-center lg:pt-[4.875rem] lg:w-[90rem]"}>
      <div className={"pt-[2.313rem] lg:pt-0 flex flex-col items-center lg:flex-none lg:items-start"}>
        <h1 className={"text-[2.625rem] text-center leading-[3rem] tracking-[-0.066rem] lg:text-left lg:text-[5rem] lg:leading-[5.625rem] lg:tracking-[-0.125rem] font-bold"}>More than just shorter links</h1>
        <p className={"text-[1.125rem] leading-[1.875rem] tracking-[0.008rem] pt-[0.938rem] text-center lg:pt-0 lg:text-left lg:text-[1.375rem] font-medium text-lightGray lg:tracking-[0.009rem] lg:leading-[2.375rem]"}>Build your brand's
          recognition and get detailed insights on how your links are performing.</p>
        <button
          className={"bg-aqua w-[12.313rem] h-[3.5rem] rounded-full text-[1.25rem] text-white leading-[1.875rem] font-bold mt-[2.375rem]"}>
          Get Started
        </button>
      </div>

      <div className={"overflow-visible row-start-1 lg:row-start-auto"}>
        <IllustrationWorking className={"hidden lg:block"}/>
        <MobileIllustrationWorking className={"lg:hidden"}/>

      </div>
    </section>
  )
}

import IllustrationWorking from "./icons/IllustrationWorking";

export default function HeroSection(){
  return (
    <section className={"flex gap-x-[6.375rem] items-center pt-[4.875rem] w-[90rem]"}>
      <div>
        <h1 className={"text-[5rem] leading-[5.625rem] tracking-[-0.125rem] font-bold"}>More than just shorter links</h1>
        <p className={"text-[1.375rem] font-medium text-lightGray tracking-[0.009rem] leading-[2.375rem]"}>Build your brand's
          recognition and get detailed insights on how your links are performing.</p>
        <button
          className={"bg-aqua w-[12.313rem] h-[3.5rem] rounded-full text-[1.25rem] text-white leading-[1.875rem] font-bold mt-[2.375rem]"}>
          Get Started
        </button>
      </div>

      <div className={"overflow-visible"}>
        <IllustrationWorking/>
      </div>
    </section>
  )
}

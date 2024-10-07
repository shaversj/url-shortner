export default function BoostSection(){
  return (
    <section
      className={"bg-[url('/bg-boost-mobile.svg')] lg:bg-[url('/bg-boost-desktop.svg')] bg-darkPurple bg-no-repeat flex flex-col items-center gap-y-4 lg:gap-y-8 py-[5.625rem] lg:py-[57px]"}>
      <h3 className={"text-[1.75rem] lg:text-[2.5rem] font-bold leading-[3rem] text-center tracking-[-0.063rem] text-white"}>Boost your links
        today</h3>

      <button className={"bg-aqua w-[12.313rem] h-[3.5rem] rounded-full text-[1.25rem] text-white leading-[1.875rem] font-bold"}>
        Get Started
      </button>
    </section>
  )
}

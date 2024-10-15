export default function BoostSection() {
  return (
    <section className={"bg-darkPurple flex flex-col items-center gap-y-4 bg-[url('/bg-boost-mobile.svg')] bg-no-repeat py-[5.625rem] lg:gap-y-8 lg:bg-[url('/bg-boost-desktop.svg')] lg:py-[57px]"}>
      <h3 className={'text-center text-[1.75rem] font-bold leading-[3rem] tracking-[-0.063rem] text-white lg:text-[2.5rem]'}>Boost your links today</h3>

      <button className={'bg-aqua h-[3.5rem] w-[12.313rem] rounded-full text-[1.25rem] font-bold leading-[1.875rem] text-white hover:bg-[#9AE3E3]'}>Get Started</button>
    </section>
  );
}

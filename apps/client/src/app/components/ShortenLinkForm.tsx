export default function ShortenLinkForm(){
  return (
    <form
      className={"relative flex-col lg:flex-row px-6 py-6 gap-y-4 lg:gap-y-0 translate-y-1/2 bg-[url('/bg-shorten-mobile.svg')] lg:bg-[url('/bg-shorten-desktop.svg')] bg-right-top bg-darkPurple bg-no-repeat flex gap-x-6 lg:py-[3.25rem] lg:px-[4rem] rounded-lg"}>
      <input className={"rounded-lg h-16 pl-8 text-[1.25rem] leading-9 tracking-[0.009rem] font-medium grow"}
             type="text"
             placeholder="Shorten a link here..."/>
      <button
        className={"rounded-lg w-full bg-aqua h-16 lg:w-[10.5rem] text-[1.25rem] text-white leading-[1.875rem] font-bold"}>Shorten
        It!
      </button>
    </form>
  )
}

export default function ShortenLinkForm(){
  return (
    <form
      className={"relative translate-y-1/2 bg-[url('/bg-shorten-desktop.svg')] bg-darkPurple bg-no-repeat flex gap-x-6 py-[3.25rem] px-[4rem] rounded-lg"}>
      <input className={"rounded-lg h-16 pl-8 text-[1.25rem] leading-9 tracking-[0.009rem] font-medium grow"}
             type="text"
             placeholder="Shorten a link here..."/>
      <button
        className={"rounded-lg bg-aqua h-16 w-[10.5rem] text-[1.25rem] text-white leading-[1.875rem] font-bold"}>Shorten
        It!
      </button>
    </form>
  )
}

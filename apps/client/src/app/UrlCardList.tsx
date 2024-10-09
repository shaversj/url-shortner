export default function UrlCardList({urls}: {urls: any}) {
  return (
    <div className={"space-y-4"}>
      {urls && urls.map((url: any, index: number) => (
        <div key={index} className={"px-4 lg:px-8 py-4 bg-white flex-col flex md:flex-row rounded-md"}>
          <p className={"text-darkGray md:text-[20px] leading-[36px] tracking-[0.12px] md:tracking-[0.15px] font-medium"}>{url.originalURL}</p>
          <div className={"min-w-fit h-[1px] bg-[#e7e6e9] -mx-8 my-[6px] md:hidden"}></div>
          <div className={"md:ml-auto flex flex-col gap-x-6 md:flex-row md:items-center"}>
            <a className={"text-aqua md:text-[20px] leading-[36px] tracking-[0.12px] md:tracking-[0.15px] font-medium"}>https://rel.ink/{url.shortURL}</a>
            <button className={"bg-aqua mt-2 w-full md:w-[103px] h-[40px] md:text-[15px] font-bold text-white rounded-lg md:mt-0"}>Copy</button>
          </div>
        </div>
      ))}
    </div>
  );
}

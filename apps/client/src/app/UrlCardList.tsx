export default function UrlCardList({urls}: {urls: any}) {
  return (
    <div className={"space-y-4"}>
      {urls && urls.map((url: any, index: number) => (
        <div key={index} className={"px-8 py-4 bg-white flex rounded-md"}>
          <p className={"text-darkGray text-[20px] leading-[36px] tracking-[0.15px] font-medium"}>{url.originalURL}</p>
          <div className={"ml-auto flex gap-x-6 items-center"}>
            <a className={"text-aqua text-[20px] leading-[36px] tracking-[0.15px] font-medium"}>https://rel.ink/{url.shortURL}</a>
            <button className={"bg-aqua w-[103px] h-[40px] text-[15px] font-bold text-white rounded-lg"}>Copy</button>
          </div>
        </div>
      ))}
    </div>
  );
}

import { useState } from 'react';

export default function UrlCard({ url }: { url: { originalURL: string; shortURL: string } }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(`https://rel.ink/${url.shortURL}`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div className={'flex flex-col rounded-md bg-white px-4 py-4 md:flex-row lg:px-8'}>
      <p className={'text-darkGray font-medium leading-[36px] tracking-[0.12px] md:text-[20px] md:tracking-[0.15px]'}>{url.originalURL}</p>
      <div className={'-mx-8 my-[6px] h-[1px] min-w-fit bg-[#e7e6e9] md:hidden'}></div>
      <div className={'flex flex-col gap-x-6 md:ml-auto md:flex-row md:items-center'}>
        <a className={'text-aqua font-medium leading-[36px] tracking-[0.12px] md:text-[20px] md:tracking-[0.15px]'}>https://rel.ink/{url.shortURL}</a>
        <button
          onClick={handleCopyToClipboard}
          className={`bg-aqua mt-2 h-[40px] w-full rounded-lg font-bold text-white md:mt-0 md:w-[103px] md:text-[15px] ${isCopied ? 'bg-darkGray' : 'bg-aqua hover:bg-[#9AE3E3]'}`}
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

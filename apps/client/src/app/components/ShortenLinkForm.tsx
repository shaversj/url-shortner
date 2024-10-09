import {FieldErrors, SubmitHandler, useForm} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import {useState} from "react";

type FormValues = {
  url: string;
};

const FormSchema = z.object({
  url: z.string().url(),
});

export default function ShortenLinkForm(){
  const { register, handleSubmit, formState: { errors },} = useForm<FormValues>({resolver: zodResolver(FormSchema),});
  const [shortenedUrl, setShortenedUrl] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormValues> = async (data, e: any) => {
    try {
      const response = await axios.post('http://localhost:3333/shorten', {
        originalUrl: data.url,
      });
      setShortenedUrl(response.data.shortUrl);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  }

  const onError = (errors: FieldErrors<FormValues>, e: any) => console.log("FORM ERRORS: ", errors, e);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)}
            className={"relative flex-col lg:flex-row px-6 py-6 gap-y-4 lg:gap-y-0 translate-y-1/2 bg-[url('/bg-shorten-mobile.svg')] lg:bg-[url('/bg-shorten-desktop.svg')] bg-right-top bg-darkPurple bg-no-repeat flex gap-x-6 lg:py-[3.25rem] lg:px-[4rem] rounded-lg"}>
        <input className={"rounded-lg h-16 pl-8 text-[1.25rem] leading-9 tracking-[0.009rem] font-medium grow"}
               {...register("url")}
               type="text"
               placeholder="Shorten a link here..."/>
        <button
          type={"submit"}
          className={"rounded-lg w-full bg-aqua h-16 lg:w-[10.5rem] text-[1.25rem] text-white leading-[1.875rem] font-bold"}>Shorten
          It!
        </button>
        <div>
          {shortenedUrl && <p>{shortenedUrl}</p>}
        </div>
      </form>
    </>

  )
}

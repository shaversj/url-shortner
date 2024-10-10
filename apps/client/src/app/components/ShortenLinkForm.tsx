import {FieldErrors, SubmitHandler, useForm} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

type FormValues = {
  url: string;
};

const FormSchema = z.object({
  url: z.string().url({message: "Please enter a valid URL"}),
});

export default function ShortenLinkForm({addUrl}: {addUrl: (url: any) => void}) {
  const {register, handleSubmit, formState: {errors},} = useForm<FormValues>({resolver: zodResolver(FormSchema),});

  const onSubmit: SubmitHandler<FormValues> = async (data, e: any) => {
    console.log("FORM DATA: ", data, e);
    try {
      const response = await axios.post('http://localhost:3333/shorten', {
        originalUrl: data.url,
      });
      console.log('Shortened URL:', response.data);
      addUrl(response.data);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  }

  const onError = (errors: FieldErrors<FormValues>, e: any) => console.log("FORM ERRORS: ", errors, e);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)}
            className={"relative flex-col md:flex-row px-6 py-6 gap-y-4 md:gap-y-0 translate-y-1/2 bg-[url('/bg-shorten-mobile.svg')] md:bg-[url('/bg-shorten-desktop.svg')] bg-right-top bg-darkPurple bg-no-repeat flex gap-x-6 md:py-[3.25rem] md:px-[4rem] rounded-lg"}>
        <input
          className={"rounded-lg h-16 pl-8 text-[1.25rem] leading-9 tracking-[0.009rem] font-medium grow aria-[invalid=true]:border-[0.188rem] aria-[invalid=true]:border-red aria-[invalid=true]:placeholder:text-red aria-[invalid=true]:placeholder:opacity-50 outline-none"}
          {...register("url")}
          type="text"
          placeholder="Shorten a link here..."
          aria-invalid={errors.url ? "true" : "false"}
        />

        {errors.url && <span
          className={"text-xs md:text-[1rem] tracking-[0.005rem] absolute translate-y-[4.25rem] md:translate-y-20 font-medium leading-[1.125rem] md:tracking-[0.007rem] text-red"}>{errors.url.message}</span>}

        <button
          type={"submit"}
          className={`rounded-lg w-full bg-aqua h-16 md:w-[10.5rem] text-[1.25rem] text-white leading-[1.875rem] font-bold ${errors.url ? "mt-[1.125rem] md:mt-0" : ""}`}>Shorten
          It!
        </button>

      </form>

    </>

  )
}

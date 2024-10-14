import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

type FormValues = {
  url: string;
};

const FormSchema = z.object({
  url: z.string().url({ message: 'Please enter a valid URL' }),
});

export default function ShortenLinkForm({ addUrl }: { addUrl: (url: any) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(FormSchema) });

  const onSubmit: SubmitHandler<FormValues> = async (data, e: any) => {
    console.log('FORM DATA: ', data, e);
    try {
      const response = await axios.post('https://fascinating-moxie-add23d.netlify.app/.netlify/functions/api/shorten', {
        originalUrl: data.url,
      });
      console.log('Shortened URL:', response.data);
      addUrl(response.data);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  const onError = (errors: FieldErrors<FormValues>, e: any) => console.log('FORM ERRORS: ', errors, e);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className={
          "bg-darkPurple relative flex translate-y-1/2 flex-col gap-x-6 gap-y-4 rounded-lg bg-[url('/bg-shorten-mobile.svg')] bg-right-top bg-no-repeat px-6 py-6 md:flex-row md:gap-y-0 md:bg-[url('/bg-shorten-desktop.svg')] md:px-[4rem] md:py-[3.25rem]"
        }
      >
        <input
          className={
            'aria-[invalid=true]:border-red aria-[invalid=true]:placeholder:text-red h-16 grow rounded-lg pl-8 text-[1.25rem] font-medium leading-9 tracking-[0.009rem] outline-none aria-[invalid=true]:border-[0.188rem] aria-[invalid=true]:placeholder:opacity-50'
          }
          {...register('url')}
          type="text"
          placeholder="Shorten a link here..."
          aria-invalid={errors.url ? 'true' : 'false'}
        />

        {errors.url && (
          <span className={'text-red absolute translate-y-[4.25rem] text-xs font-medium leading-[1.125rem] tracking-[0.005rem] md:translate-y-20 md:text-[1rem] md:tracking-[0.007rem]'}>
            {errors.url.message}
          </span>
        )}

        <button type={'submit'} className={`bg-aqua h-16 w-full rounded-lg text-[1.25rem] font-bold leading-[1.875rem] text-white md:w-[10.5rem] ${errors.url ? 'mt-[1.125rem] md:mt-0' : ''}`}>
          Shorten It!
        </button>
      </form>
    </>
  );
}

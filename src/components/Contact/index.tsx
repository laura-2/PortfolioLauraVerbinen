import { SubmitHandler, useForm } from "react-hook-form";
import sendIcon from "../../assets/enviado.png"
import { WriteValid } from "../../validations";
import { IWriteForm } from "../../interfaces/IWriteForm";
import {createClient} from '@supabase/supabase-js'
import {useState } from "react";

interface ContactProps {
  image: string;
  alt?: string;
  title: string;
}
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhucGF2ZXJyYmtncXdoeGdkcHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY2MTgwMDQsImV4cCI6MjAxMjE5NDAwNH0.R6IrfMiNDObNzLyB5paFqrIo1DQkgdMJFdeWv55DjEE';
const SUPABASE_URL = 'https://xnpaverrbkgqwhxgdprm.supabase.co';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export default function Contact({ image, alt="Image girl running", title }: ContactProps) {
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IWriteForm>({
    resolver: WriteValid
  });
  const onSubmit: SubmitHandler<IWriteForm> = async (data) => {
    try {
      await supabase.from('contact').insert([data]);
      setMessageText('Message sent successfully!');
      setShowMessage(true);
      reset();

    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
    }
  };

  
  return (
    <section className="flex items-center mx-20 my-10 gap-32" id="page-a">
      <div className="flex w-3/5">
        <img alt={alt} src={image} />
      </div>
      <div className="block items-center gap-5 w-4/5">
        <h1 className="uppercase font-bold text-7xl">{title}</h1>
        <form className="flex my-5 flex-col" onSubmit={handleSubmit(onSubmit)}>
          <label className="text-white text-xl" htmlFor="name">Name</label>
          <input placeholder="First name" className="input-contact w-1/2" type="text"
          {...register("name")}/>
          {errors?.name?.message && (
          <p className="text-white">{errors?.name?.message}</p>
          )}
          <label className="text-white text-xl" htmlFor="email">Email</label>
          <input placeholder="example@email.com" className="input-contact w-1/2" type="email"
          {...register("email")} />
          {errors?.email?.message && (
          <p className="text-white">{errors?.email?.message}</p>
          )}
          <label className="text-white text-xl" htmlFor="message">Message</label>
          <textarea placeholder="Write your message" className="area-contact w-3/4 h-72" typeof="text"
          {...register("message")}/>
          {errors?.message?.message && (
          <p className="text-white">{errors?.message?.message}</p>
          )}
          <button className="button-contact w-1/5 flex justify-center items-center gap-3">Send<img src={sendIcon} alt="Send message"/></button>
        </form>
        {showMessage && (
           <div className="text-white">
           <p>{messageText}</p>
         </div>
)}
      </div>

    </section>
  );
}

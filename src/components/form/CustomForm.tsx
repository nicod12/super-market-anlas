"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod"
import InputForm from "../input/InputForm";

const schema = z.object({
  name: z.string().trim().min(1, "El nombre es obligatorio"),
  surname: z.string().trim().min(1, "El apellido es obligatorio"),
  email: z.string().trim().email("Correo invalido").min(1, "El correo es obligatorio"),
  phone: z.string()
    .trim()
    .min(7, "El número de te    léfono debe tener al menos 7 caracteres")
    .max(14, "El número de t    eléfono no puede tener más de 14 caracteres")
    .regex(/^[\d+]{7,14}$/, "El número de teléfono solo puede contener dígitos y opcionalmente un '+' al principio"),
  comments: z.string().trim().min(1, "El mensaje es obligatorio")
});

type FormValues = z.infer<typeof schema>;

const CustomForm = () => {
  const { control, register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    alert("Formulario Enviado");
  }

  const handleReset = () => {
    reset({
      name: '',
      surname: '',
      email: '',
      phone: '',
      comments: ''
    });
  }

  return (
    <section className="container relative">
      <section className="relative z-10 py-4 lg:py-20 md:right-40 lg:right-64 xl:right-[25rem] ">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm lg:max-w-xl mx-auto py-3 px-5 my-10 lg:px-3 border border-gray-500 rounded-xl bg-[#1393bf] bg-opacity-90  dark:bg-opacity-90">
          <h2 className="text-white mb-5">Formulario de Contacto</h2>
          <InputForm name="name" control={control} label="Nombre:" type="text" error={errors.name} required={false} />
          <InputForm name="surname" control={control} label="Apellido:" type="text" error={errors.surname} required={true} />
          <InputForm name="email" control={control} label="Correo Electrónico:" type="email" error={errors.email} required={true} />
          <InputForm name="phone" control={control} label="Teléfono:" type="text" error={errors.phone} required={true} />
          <div className="mb-5">
            <textarea id="comments"  {...register("comments")} className="h-24 w-full rounded-lg p-2.5 " />
            {errors?.comments?.message && (
              <span className="bg-white py-0.5 px-1 rounded-lg block">
                <h4 className="text-red-700 text-sm font-bold">
                  {errors.comments.message}
                </h4>
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleReset}
              className="text-white bg-[#52c2f2] hover:bg-[#1393bf] focus:ring-4 focus:outline-nonefont-medium rounded-lg text-sm px-5 py-2.5 text-center ">
              Reset
            </button>
            <button
              type="submit"
              className="text-white bg-[#52c2f2] hover:bg-[#1393bf] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Enviar
            </button>
          </div>
        </form>
      </section>
    </section>);
}

export default CustomForm;

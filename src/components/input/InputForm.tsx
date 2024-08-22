import { Control, Controller, FieldError } from "react-hook-form";

interface Props {
  name: string;
  control: Control<any>
  label: string;
  type?: string;
  error?: FieldError
}

const InputForm = ({ name, control, label, type, error }: Props) => {
  return (
    <div className="mb-5">
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) =>
          <input id={name} type={type} {...field} className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${error ? "border border-red-500 mt-1" : ""}`} />
        }
      />
      {
        error && <p className="text-red-700 font-bold text-[12px]">{error.message}</p>
      }
    </div>
  )
}

export default InputForm;

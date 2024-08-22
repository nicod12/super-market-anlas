import { Control, Controller, FieldError } from "react-hook-form";

interface Props {
  name: string;
  control: Control<any>
  label: string;
  type?: string;
  error?: FieldError,
  required?: boolean;
}

const InputForm = ({ name, control, label, type, error, required }: Props) => {
  return (
    <div className="mb-5">
      <label htmlFor={name} className="block mb-2 text-sm lg:text-md , font-medium text-gray-900 dark:text-white">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) =>
          <input id={name} re type={type} required={required} {...field} className={`shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm lg:text-md rounded-lg block w-full p-2.5 ${error ? "border border-red-500 mt-1" : ""}`} />
        }
      />
      {
        error && (
          <span className="bg-white mt-1.5 py-0.5 px-1 rounded-lg block">
            <h4 className="text-red-700 text-sm lg:text-md font-bold ml-1">
              {error.message}
            </h4>
          </span>
        )
      }
    </div>
  )
}

export default InputForm;

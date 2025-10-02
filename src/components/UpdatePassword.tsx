import Button from "./Button";
import Input from "./Input";
import { RiLockPasswordLine } from "react-icons/ri";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const UpdatePassword = () => {
  const schemaValidation = yup.object().shape({
    currentPassword: yup.string().required("Enter your current password."),
    newPassword: yup.string().required("Enter your new password."),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword")], "Passwords do not match")
      .required("Please confirm your password.")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schemaValidation),
  });

  const submitHandler = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <div className="w-full lg:w-3/4 mx-auto shadow-sm bg-white rounded-lg p-6">
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="mb-4">
          <div className="relative flex flex-col items-start col-span-10">
            <RiLockPasswordLine
              className={`absolute left-3 ${
                errors.currentPassword && "text-red-400"
              } mt-4 text-gray-500`}
              size={21}
            />
            <Input
              type="password"
              placeholder="Current Password"
              {...register("currentPassword")}
              className={`w-full p-4 mb-1 pl-10 pr-10 border ${
                errors.currentPassword && "border-red-500"
              } border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            />
            {errors.currentPassword && (
              <p className="text-red-500 mb-2 text-sm">
                {errors.currentPassword.message}
              </p>
            )}
          </div>
          <div className="relative flex flex-col items-start col-span-10">
            <RiLockPasswordLine
              className={`absolute left-3 ${
                errors.newPassword && "text-red-400"
              } mt-4 text-gray-500`}
              size={21}
            />
            <Input
              type="password"
              placeholder="New Password"
              {...register("newPassword")}
              className={`w-full p-4 mb-1 pl-10 pr-10 border ${
                errors.newPassword && "border-red-500"
              } border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            />
            {errors.newPassword && (
              <p className="text-red-500 mb-2 text-sm">
                {errors.newPassword.message}
              </p>
            )}
          </div>
          <div className="relative flex flex-col items-start col-span-10">
            <RiLockPasswordLine
              className={`absolute left-3 ${
                errors.confirmPassword && "text-red-400"
              } mt-4 text-gray-500`}
              size={21}
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              className={`w-full p-4 mb-1 pl-10 pr-10 border ${
                errors.confirmPassword && "border-red-500"
              } border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 mb-2 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>
        {/* Save Button */}
        <div className="mt-6 flex justify-end">
          <Button
            name="Save Changes"
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdatePassword;

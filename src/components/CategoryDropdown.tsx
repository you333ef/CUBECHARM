import { forwardRef } from "react";
import { categories } from "../utils/categories";

interface DropdownProps {
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ onChange, ...rest }, ref) => {
    return (
      <div className="col-span-10 w-full">
        <select
          className="inline-flex justify-between items-center w-full rounded-md border border-gray-300 shadow-sm px-6 py-4 bg-gray-50 text-base text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onChange={onChange}
          ref={ref}
          {...rest}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Dropdown;

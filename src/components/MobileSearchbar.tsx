
import Input from "./Input";
import Image from "./Image";
import { logo } from "../assets/images";

const MobileSearchbar = () => {
  return (
    <div className="flex-grow mx-4">
      <div className="relative">
        <Image
          src={logo}
          alt="logo"
          width={63}
          className="absolute left-[-15px] p-1 top-[-4px] text-gray-400"
          loading="lazy"
        />
        <Input
          type="text"
          name="search"
          placeholder="Where you going?"
          className="w-full py-2 pl-8 pr-2 rounded-lg bg-gray-100 text-gray-700 text-sm focus:outline-none"
        />
      </div>
    </div>
  );
};

export default MobileSearchbar;

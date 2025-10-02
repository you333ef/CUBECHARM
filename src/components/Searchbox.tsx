import Button from "./Button";
import Input from "./Input";


const Searchbox = () => {
  return (
    <div className="w-full">
    <div className="container mx-auto flex justify-center">
      <div className="relative w-full max-w-3xl">
        <Input
          type="text"
          placeholder="Where you going?"
          name="search"
          className="w-full py-3 pl-6 pr-28 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button
          name="Find"
          className="absolute right-0 top-0 bottom-0 bg-blue-500 text-white px-8 py-2 rounded-full m-1 hover:bg-blue-600 transition duration-300 ease-in-out"
        />
      </div>
    </div>
  </div>
  );
};

export default Searchbox;

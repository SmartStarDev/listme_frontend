import React, { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import clsx from "clsx";

export type SelectOption = {
  value: string | number;
  name: string;
};

type Props = {
  className?: string;
  options?: SelectOption[];
  onChangeSelection?: (value: SelectOption) => void;
  selected?: SelectOption | null;
  placeholder?: string;
};

const Select: React.FC<Props> = ({
  className,
  options,
  onChangeSelection,
  selected,
  placeholder,
}) => {
  return (
    <Listbox value={selected} onChange={onChangeSelection}>
      <div className={clsx("relative mt-1", className)}>
        <Listbox.Button className="relative h-10 bg-white rounded-md px-4 py-1.5 w-full border border-ink-450 border-b-[3px]">
          <p
            className={clsx(
              "block truncate text-left text-sm text-ink-800",
              !selected?.name && "text-gray-300"
            )}
          >
            {selected?.name ?? placeholder ?? ""}
          </p>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <FiChevronDown
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 w-full max-h-[220px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options?.map((option, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 px-4 ${
                    active ? "bg-ink-200 text-amber-900" : "text-gray-900"
                  }`
                }
                value={option}
              >
                {({ selected }) => (
                  <span
                    className={clsx(
                      "block truncate",
                      selected ? "font-medium" : "font-normal"
                    )}
                  >
                    {option.name}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Select;

import { Fragment } from "react";
import { ChevronDown } from "lucide-react";
import { Menu, Transition } from "@headlessui/react";

import { menuItems } from "../../constants/manuItems";
import FeatureDropdown from "../features/FeatureDropdown";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const Dropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-palette-dropdown px-3 py-2 text-lg font-semibold text-palette-dropdown shadow-lg ring-1 ring-inset ring-gray-300 hover:bg-palette-primary hover:text-palette-primary transition-colors">
          Works
          <ChevronDown
            className="-mr-1 h-6 w-6 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {/* Features */}
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active
                      ? "bg-gray-100 text-gray-900 relative"
                      : "text-gray-700",
                    "block px-4 py-2 text-lg"
                  )}
                >
                  <FeatureDropdown />
                </span>
              )}
            </Menu.Item>
          </div>

          {/* MenuItems */}
          {menuItems.map((menuItem) => (
            <div className="py-1" key={menuItem.id}>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href={menuItem.slug}
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900 relative"
                        : "text-gray-700",
                      "block px-4 py-2 text-lg"
                    )}
                  >
                    {menuItem.title}
                  </a>
                )}
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;

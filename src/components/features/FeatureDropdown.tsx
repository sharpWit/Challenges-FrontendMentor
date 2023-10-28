import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const FeatureDropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 py-2 px-3 text-lg font-semibold">
          Features
          <ChevronRight
            className="ml-1 h-6 w-6 text-gray-400"
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
        <Menu.Items className="absolute top-1/2 left-full z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/Features/qrcode"
                  className={classNames(
                    active
                      ? "bg-gray-100 text-gray-900 relative"
                      : "text-gray-700",
                    "block px-4 py-2 text-lg"
                  )}
                >
                  QR-Code
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/Features/resultsAndSummary"
                  className={classNames(
                    active
                      ? "bg-gray-100 text-gray-900 relative"
                      : "text-gray-700",
                    "block px-4 py-2 text-lg"
                  )}
                >
                  Results-&-Summary
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default FeatureDropdown;

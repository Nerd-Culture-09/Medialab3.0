import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Button } from "../ui/moving-border";
import Link from "next/link";

export default function Cards() {
  return (
    <section className="py-14 ml-3">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="bg-white dark:bg-slate-950 border border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl p-8 text-gray-600 dark:text-gray-300 gap-x-12 items-start justify-between lg:flex md:px-8">
          <div className="sm:hidden lg:block lg:max-w-xl">
            <img
              src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="rounded-lg"
              alt=""
            />
          </div>
          <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
            <div className="max-w-2xl">
              <h3 className="text-gray-900 dark:text-gray-200 text-3xl font-semibold sm:text-4xl">
                What are you waiting for?
              </h3>
              <p className="mt-3 max-w-xl">
                Checkout what Sebabatso has for you!
              </p>
            </div>
            <div className="flex items-center justify-center py-28">
              <Link href="/opportunities">
                <Button
                  borderRadius="1.75rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-gray-300 dark:border-slate-800"
                >
                  Click Me!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

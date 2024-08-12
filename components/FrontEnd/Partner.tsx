"use client";

import Image from "next/image";



export default function Partner() {
  return (
    <div className="py-24">
  <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="max-w-xl mx-auto text-center">
          <h3 className="text-gray-800 dark:text-white text-3xl font-semibold sm:text-4xl">
              Trusted By:
          </h3>
      </div>
      <div className="mt-12 flex justify-center">
          <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">

              {/* LOGO 1 */}
            <li>
              <Image src="/UNDP.png" alt="UNDP"  width={190} height={190}/>
            </li>
              {/* LOGO 2 */}
            <li>
              <Image src="/LG.png" alt="UNDP"  width={150} height={150}/>
            </li>

              {/* LOGO 3 */}
            <li>
              <Image src="/SE.png" alt="UNDP"  width={150} height={150}/>
            </li>

              {/* LOGO 4 */}
            <li>
              <Image src="/UN.png" alt="UNDP"  width={190} height={190}/>
            </li>
          </ul>
      </div>
  </div>
</div>
  )
}

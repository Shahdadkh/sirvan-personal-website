"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const subMenu = [
    { name: "صفحه اصلی", url: "/Home" },
    { name: "آلبوم‌ها", url: "/Albums" },
    { name: "بیوگرافی", url: "/Biography" },
    { name: "گالری", url: "/Gallery" },
    { name: "تماس با ما", url: "/ContactUs" },
  ];

  return (
    <>
      <div className="homeBackground h-screen overflow-hidden">
        <div>
          <div className="flex flex-col h-screen justify-center items-center">
            <div className="text-white font-bold text-[120px]">
              سیروان خسروی
            </div>
            <div className="text-white font-normal mt-5 w-9/12 text-2xl mx-auto text-center">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-12 overflow-hidden backgroundColor1 absolute bottom-0">
        <div className="flex justify-around mt-2 flex-row-reverse">
          {subMenu
            .filter((name) => !name.url.includes(pathname))
            .map((menu, i) => (
              <Link href={menu.url} key={i} className="text-white">
                {`[ ${menu.name} ]`}
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
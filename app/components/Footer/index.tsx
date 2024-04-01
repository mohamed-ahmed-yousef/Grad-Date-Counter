export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 px-10">
      <marquee>
        <div className="flex flex-row items-center justify-center md:justify-between gap-x-4">
          <p className="md:text-xs lg:text-sm hidden sm:block ">
            العلم يرفع بيتا لا عماد له، والجهل يهدم بيت العز والشرف
          </p>
          <p className="text-sm md:text-base">
            كليه النهدسة - قسم الحاسبات والمنظومات - 2024
          </p>
          <p className="md:text-xs lg:text-sm hidden sm:block text-sm">
            لا تحسبن العلم ينفع وحده ما لم يتوج ربه بخلاق
          </p>
        </div>
      </marquee>
    </footer>
  );
}

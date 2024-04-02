export default function Footer() {
  return (
    <footer className="font-handjet font-bold w-full overflow-hidden relative bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400">
      <div className="marquee">
        <div className="flex flex-row items-center justify-center gap-x-16">
          <p className="md:text-xs lg:text-sm hidden sm:block ">
            العلم يرفع بيتا لا عماد له، والجهل يهدم بيت العز والشرف
          </p>
          <p className="text-sm md:text-base">
            كليه الهندسة - قسم الحاسبات والمنظومات - 2024
          </p>
          <p className="md:text-xs lg:text-sm hidden sm:block text-sm">
            لا تحسبن العلم ينفع وحده ما لم يتوج ربه بخلاق
          </p>
        </div>
      </div>
      <style>
        {`
        .marquee {
          position: relative;
          animation: slide 30s linear infinite;
        }
  
        @keyframes slide {
          from {
            right: 100%;
          }
          to {
            right: -100%;
          }
        }
        `}
      </style>
    </footer>
  );
}

export default function Timer({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) {
  return (
    <div className=" h-screen">
      <div className="relative h-full w-full bg-black flex items-center justify-center">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="text-secondary flex gap-x-4">
          <div>{days} days</div>
          <div>{hours} hours</div>
          <div>{minutes} minutes</div>
          <div>{seconds} seconds</div>
        </div>
      </div>
    </div>
  );
}

export default function Stats({ stats = [] }) {
  return (
    <section className="pt-2 pb-0 px-6 relative z-30 -mt-[300px] sm:-mt-[250px] small-phones:-mt-[220px] md:-mt-[170px] lg:-mt-[175px] lg:mb-[52px] xl:-mt-[175px] rounded-xl xl:leading-[120%] ultra-xl:max-w-[1900px]">
      <div className="text-white grid grid-cols-3 sm:grid-cols-4 small-phones:gap-2 gap-6 pt-6 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="border-l border-white/60 pl-4 small-phones:pl-2">
            <h3 className="text-[12px] md:text-lg lg:text-2xl xl:text-3xl 2xl:text-2xl ultra-large:text-2xl small-phones:text-base font-bold">
              {stat.value}
            </h3>
            <p className="text-sm small-phones:text-sm md:text-sm lg:text-1xl xl:text-[18px] 2xl:text-xl xl:pt-4 xl:[line-height:35px] ultra-large:text-1xl">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

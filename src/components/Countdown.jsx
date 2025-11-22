import React, { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

const Countdown = ({ targetDate = "2026-07-25T00:00:00" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: "Jours", value: timeLeft.days },
    { label: "Heures", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
  ];

  return (
    <div className="flex flex-col items-center gap-3 xs:gap-4 xs2:gap-5 sm:gap-6 mt-6 xs:mt-8 xs2:mt-10 sm:mt-12">
      <div className="flex items-center gap-2 xs:gap-3 mb-2 xs:mb-3">
        <Calendar className="w-4 h-4 xs:w-5 xs:h-5 xs2:w-6 xs2:h-6 text-amber-300" />
        <p className="text-sm xs:text-base xs2:text-lg sm:text-xl text-amber-200 font-light">
          Le Grand Jour
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 xs:gap-4 xs2:gap-5 sm:gap-6">
        {timeUnits.map((unit, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-xl xs:rounded-2xl p-3 xs:p-4 xs2:p-5 sm:p-6 min-w-[60px] xs:min-w-[70px] xs2:min-w-[80px] sm:min-w-[90px] border border-amber-300/30 shadow-lg"
          >
            <div className="text-2xl xs:text-3xl xs2:text-4xl sm:text-5xl md:text-6xl font-serif text-amber-200 font-bold mb-1 xs:mb-2">
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="text-xs xs:text-sm xs2:text-base text-amber-300/80 font-light uppercase tracking-wider">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;

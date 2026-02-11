"use client";

import Image from "next/image";

type AcademicCardProps = {
  degree: string;
  university: string;
  duration: string;
  gpa: string;
  courses: string[];
  logo: string;
  image: string;
  borderColor: string;
};

export default function AcademicCard({
  degree,
  university,
  duration,
  gpa,
  courses,
  logo,
  image,
  borderColor,
}: AcademicCardProps) {
  return (
    <div
      className={`relative rounded-2xl border ${borderColor} bg-gradient-to-br from-[#0b1b33] via-[#0d2342] to-[#0f2d56] backdrop-blur-sm overflow-hidden shadow-[0_0_55px_rgba(99,179,237,0.55)]`}
    >
      {/* Campus Image */}
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={`${university} campus`}
          fill
          priority
          className="
            object-cover
            object-[center_80%]
            brightness-130
            contrast-125
            saturate-125
          "
        />
        {/* readability overlay */}
        <div className="absolute inset-0 bg-black/18" />
      </div>

      {/* Content */}
      <div className="relative p-6">
        <div className="flex items-start gap-4">
          {/* Logo LEFT */}
          <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-black/60 border border-blue-300/60 shadow-[0_0_14px_rgba(99,179,237,0.35)]">
            <Image
              src={logo}
              alt={`${university} logo`}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold text-blue-50 drop-shadow-[0_6px_18px_rgba(99,179,237,0.45)]">
              {degree}
            </h3>
            <p className="text-lg text-blue-100">{university}</p>
            <p className="text-sm text-blue-200 mt-1">{duration}</p>
            <p className="mt-2 text-blue-50 font-medium">GPA: {gpa}</p>
          </div>
        </div>

        {/* Courses */}
        <div className="mt-4">
          <p className="text-blue-100 font-semibold mb-2">
            Relevant Courses:
          </p>
          <ul className="list-disc list-outside pl-5 text-blue-50 text-sm space-y-1.5 marker:text-blue-200">
            {courses.map((course, i) => (
              <li key={i}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

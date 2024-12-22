"use client";

import {
  Home,
  Calendar,
  CircleCheck,
  Mail,
  Utensils,
  User,
  BookOpen,
  GraduationCap,
  Settings,
} from "lucide-react";

interface CardProps {
  name: string;
  content: string[];
}

export default function ItemPatchnote({ name, content }: CardProps) {
  return (
    <div className="">
      <div className="flex items-center justify-between gap-2">
        <p className="text-blue-800 text-lg font-medium">{name}</p>
        {name === "Accueil" ? (
          <Home strokeWidth={1.75} className="h-5 w-5 text-blue-800" />
        ) : name === "Emploi du temps" ? (
          <Calendar strokeWidth={1.75} className="h-5 w-5 text-blue-800" />
        ) : name === "Devoirs" ? (
          <CircleCheck strokeWidth={1.75} className="h-5 w-5 text-blue-800" />
        ) : name === "Mails" ? (
          <Mail strokeWidth={1.75} className="h-5 w-5 text-blue-800" />
        ) : name === "Restauration" ? (
          <Utensils strokeWidth={1.75} className="h-5 w-5 text-blue-800" />
        ) : name === "Profil" ? (
          <User strokeWidth={1.75} className="h-5 w-5 text-blue-800" />
        ) : name === "Scolarité" ? (
          <BookOpen strokeWidth={1.75} className="h-5 w-5 text-blue-800" />
        ) : name === "Patchnotes" ? (
          <GraduationCap strokeWidth={1.75} className="h-5 w-5 text-blue-800" />
        ) : name === "Paramètres" ? (
          <Settings strokeWidth={1.75} className="h-5 w-5 text-blue-800" />
        ) : (
          <></>
        )}
      </div>
      <ul className="list-disc list-inside ml-4">
        {content.map((item: string, index: number) => (
          <li key={index} className="text-blue-800 text-lg font-normal">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

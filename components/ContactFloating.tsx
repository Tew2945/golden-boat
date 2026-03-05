"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, X } from "lucide-react";
import { FaWhatsapp, FaLine, FaWeixin } from "react-icons/fa";

export default function ContactFloating() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Contact Options */}
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300
        ${
          open
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-3 pointer-events-none"
        }`}
      >
        {/* WhatsApp */}
        <Link
          href="https://wa.me/YOUR_NUMBER"
          target="_blank"
          style={{ transitionDelay: "50ms" }}
          className="flex items-center gap-2
          bg-green-500 text-white text-sm
          px-4 py-2 rounded-full shadow-lg
          hover:scale-105 transition"
        >
          <FaWhatsapp size={18} />
          WhatsApp
        </Link>

        {/* LINE */}
        <Link
          href="https://line.me/YOUR_LINE"
          target="_blank"
          style={{ transitionDelay: "100ms" }}
          className="flex items-center gap-2
          bg-green-600 text-white text-sm
          px-4 py-2 rounded-full shadow-lg
          hover:scale-105 transition"
        >
          <FaLine size={18} />
          Line
        </Link>

        {/* WeChat */}
        <Link
          href="#"
          style={{ transitionDelay: "150ms" }}
          className="flex items-center gap-2
          bg-emerald-700 text-white text-sm
          px-4 py-2 rounded-full shadow-lg
          hover:scale-105 transition"
        >
          <FaWeixin size={18} />
          WeChat
        </Link>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full
        bg-[var(--heritage-gold)]
        text-white
        shadow-xl
        flex items-center justify-center
        hover:scale-110
        transition"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

    </div>
  );
}
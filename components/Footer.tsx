"use client";

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 overflow-hidden">

      {/* background */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-10 max-w-6xl mx-auto text-center text-gray-300">

        {/* Brand */}
        <h3 className="text-2xl font-serif text-white tracking-wide mb-6">
          Golden Boat Soy Sauce
        </h3>

        {/* Company Info */}
        <p className="text-sm leading-relaxed mb-6">
          <span className="font-semibold text-white">
            MFG: NGUAN CHIANG FOOD INDUSTRY CO., LTD.
          </span>
          <br />
          135 Moo 4 Suksawat 68 Rd., Phrapradaeng,
          <br />
          Samutprakarn 10130, Thailand
        </p>

        {/* Contact */}
        <p className="text-sm leading-relaxed mb-6">
          TEL: +66 2 463 0117 EXT. 2050
          <br />
          FAX: +66 2 819 0912
        </p>

        {/* Email + Website */}
        <div className="text-sm space-y-2">
          <p>
            Email:{" "}
            <a
              href="mailto:export@nguanchiang.co.th"
              className="text-[var(--heritage-gold)] hover:underline"
            >
              export@nguanchiang.co.th
            </a>
          </p>

          <p>
            Website:{" "}
            <a
              href="https://www.goldenboatsoysauce.com"
              target="_blank"
              className="text-[var(--heritage-gold)] hover:underline"
            >
              www.goldenboatsoysauce.com
            </a>
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-10" />

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Golden Boat Soy Sauce. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
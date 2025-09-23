"use client";

export default function LocationMap() {
  return (
     <div className="w-full flex justify-center mt-10">
      <div className="w-full h-170 aspect-video">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9430.683104880767!2d80.00245956775048!3d6.3793078167883435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae22b40a695aab1%3A0x3548123d4f4a8367!2sThe%20Coffee%20Shop%20by%20AIDA%20Group!5e0!3m2!1ssi!2slk!4v1758621221783!5m2!1ssi!2slk"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

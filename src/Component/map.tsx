"use client";

export default function LocationMap() {
  return (
     <div className="w-full flex justify-center mt-10">
      <div className="w-full h-170 aspect-video">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.5600259762382!2d80.01006259999998!3d6.378500780278338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae22b40a695aab1%3A0x3548123d4f4a8367!2sThe%20Coffee%20Shop%20by%20AIDA%20Group!5e0!3m2!1sen!2slk!4v1760952298674!5m2!1sen!2slk"
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

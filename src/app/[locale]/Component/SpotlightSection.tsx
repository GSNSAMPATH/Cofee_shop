// 'use client';
// import { useRef, useEffect, useState } from 'react';
// import styles from './Carousel.module.css';

// interface Member {
//   name: string;
//   role: string;
//   video: string;
// }

// const team: Member[] = [
//   {
//     name: 'Raymond McKenzie',
//     role: 'CEO',
//     video: 'https://res.cloudinary.com/diatamf9x/video/upload/v1760435429/Reel_9_AIDA_Sep2025_V1_ucmhli.mp4',
//   },
//   {
//     name: 'Elizabeth Turner',
//     role: 'Marketing Director',
//     video: 'https://res.cloudinary.com/diatamf9x/video/upload/v1760435429/Reel_9_AIDA_Sep2025_V1_ucmhli.mp4',
//   },
//   {
//     name: 'Suzanne Yorke',
//     role: 'Creative Director',
//     video: 'https://res.cloudinary.com/diatamf9x/video/upload/v1760435429/Reel_9_AIDA_Sep2025_V1_ucmhli.mp4',
//   },
//   {
//     name: 'Simon Hadley',
//     role: 'Social Media & Networking',
//     video: 'https://res.cloudinary.com/diatamf9x/video/upload/v1760435429/Reel_9_AIDA_Sep2025_V1_ucmhli.mp4',
//   },
//   {
//     name: 'Harriet Johnson',
//     role: 'Front-End Developer',
//     video: 'https://res.cloudinary.com/diatamf9x/video/upload/v1760435429/Reel_9_AIDA_Sep2025_V1_ucmhli.mp4',
//   },
// ];

// export default function Carousel() {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [active, setActive] = useState<number>(0);

//   const scrollTo = (dir: number) => {
//     if (!ref.current) return;
//     const container = ref.current;
//     const width = container.clientWidth;
//     container.scrollBy({ left: dir * width * 0.8, behavior: 'smooth' });
//   };

//   useEffect(() => {
//     const container = ref.current;
//     if (!container) return;

//     const handleScroll = () => {
//       if (!ref.current) return;
//       const children = Array.from(ref.current.children) as HTMLElement[];
//       let centerIndex = 0;
//       let minDist = Infinity;
//       const mid = ref.current.scrollLeft + ref.current.clientWidth / 2;

//       children.forEach((child, index) => {
//         const boxCenter = child.offsetLeft
//         const dist = Math.abs(mid - boxCenter);
//         if (dist < minDist) {
//           minDist = dist;
//           centerIndex = index;
//         }
//       });

//       setActive(centerIndex);
//     };

//     container.addEventListener('scroll', handleScroll);
//     handleScroll();
//     return () => container.removeEventListener('scroll', handleScroll);
//   }, []);

//   // 🔥 Auto-play the active video and pause others
//   useEffect(() => {
//     if (!ref.current) return;
//     const videos = Array.from(ref.current.querySelectorAll('video')) as HTMLVideoElement[];
//     videos.forEach((v, i) => {
//       if (i === active) {
//         v.play().catch(() => {});
//       } else {
//         v.pause();
//       }
//     });
//   }, [active]);

//   return (
//     <div className="relative flex flex-col items-center px-4 md:px-30">
//       <h1 className="font-[Inria Sans] font-bold text-2xl md:text-3xl text-center mb-4">
//         Team Carousel (Video Version)
//       </h1>

//       <div className="relative flex items-center justify-center w-full ">
//         <button
//           className={`${styles.btn} ${styles.prev}`}
//           onClick={() => scrollTo(-1)}
//         >
//           ❮
//         </button>

//         <div ref={ref} className={styles.carousel}>
//           {team.map((member, i) => (
//             <div
//               key={i}
//               className={`${styles.card} ${i === active ? styles.active : ''}`}
//             >
//               <div className="relative w-full h-[500px] overflow-hidden rounded-[20px]">
//                 <video
//                   src={member.video}
//                   className="w-full h-full object-cover rounded-[20px]"
//                   muted
//                   loop
//                   playsInline
//                 />
//               </div>
//               <h2 className="mt-4 font-semibold text-lg">{member.name}</h2>
//               <p className="text-sm text-gray-500">{member.role}</p>
//             </div>
//           ))}
//         </div>

//         <button
//           className={`${styles.btn} ${styles.next}`}
//           onClick={() => scrollTo(1)}
//         >
//           ❯
//         </button>
//       </div>
//     </div>
//   );
// }

'use client';
import { useRef, useEffect, useState } from 'react';
import styles from './Carousel.module.css';
import { useTranslations } from 'next-intl';

interface Member {
  name: string;
  role: string;
  videoMp4: string;
  videoWebm: string;
}

const team: Member[] = [
  {
    name: 'Raymond McKenzie',
    role: 'CEO',
    videoMp4: 'https://res.cloudinary.com/diatamf9x/video/upload/f_mp4/v1760435429/Reel_9_AIDA_Sep2025_V1_ucmhli.mp4',
    videoWebm: 'https://res.cloudinary.com/diatamf9x/video/upload/f_webm/v1760435429/Reel_9_AIDA_Sep2025_V1_ucmhli.webm',
  },
  {
    name: 'Elizabeth Turner',
    role: 'Marketing Director',
    videoMp4: 'https://res.cloudinary.com/diatamf9x/video/upload/f_mp4/v1760435427/Reel_3_AIDA_Sep2025_V1_ltzmnn.mp4',
    videoWebm: 'https://res.cloudinary.com/diatamf9x/video/upload/f_webm/v1760435427/Reel_3_AIDA_Sep2025_V1_ltzmnn.webm',
  },
  {
    name: 'Suzanne Yorke',
    role: 'Creative Director',
    videoMp4: 'https://res.cloudinary.com/diatamf9x/video/upload/f_mp4/v1760435424/Reel_7_AIDA_Sep2025_V1_irpqut.mp4',
    videoWebm: 'https://res.cloudinary.com/diatamf9x/video/upload/f_webm/v1760435424/Reel_7_AIDA_Sep2025_V1_irpqut.webm',
  },
  {
    name: 'Simon Hadley',
    role: 'Social Media & Networking',
    videoMp4: 'https://res.cloudinary.com/diatamf9x/video/upload/f_mp4/v1760435308/Reel_4_AIDA_Sep2025_V1_nmazqn.mp4',
    videoWebm: 'https://res.cloudinary.com/diatamf9x/video/upload/f_webm/v1760435308/Reel_4_AIDA_Sep2025_V1_nmazqn.webm',
  },
  {
    name: 'Harriet Johnson',
    role: 'Front-End Developer',
    videoMp4: 'https://res.cloudinary.com/diatamf9x/video/upload/f_mp4/v1760435268/Reel_1_AIDA_Sep2025_V1_rzkhg9.mp4',
    videoWebm: 'https://res.cloudinary.com/diatamf9x/video/upload/f_webm/v1760435268/Reel_1_AIDA_Sep2025_V1_rzkhg9.webm',
  },
];


export default function Carousel() {
      const t = useTranslations("teamCarousel");
const ref = useRef<HTMLDivElement | null>(null);
const [active, setActive] = useState<number>(2); // default center video (3rd item)

const scrollTo = (dir: number) => {
  if (!ref.current) return;
  const container = ref.current;
  const width = container.clientWidth;
  container.scrollBy({ left: dir * width * 0.8, behavior: 'smooth' });
};

useEffect(() => {
  const container = ref.current;
  if (!container) return;

  // 🔹 Center the default active video when component mounts
  const cards = Array.from(container.querySelectorAll(`.${styles.card}`)) as HTMLElement[];
  const initialCard = cards[active];
  if (initialCard) {
    const offset =
      initialCard.offsetLeft +
      initialCard.offsetWidth / 2 -
      container.clientWidth / 2;
    container.scrollTo({ left: offset, behavior: 'instant' as ScrollBehavior });
  }

  const handleScroll = () => {
    const children = Array.from(container.querySelectorAll(`.${styles.card}`)) as HTMLElement[];
    let centerIndex = 0;
    let minDist = Infinity;
    const mid = container.scrollLeft + container.clientWidth / 2;

    children.forEach((child, index) => {
      const boxCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(mid - boxCenter);
      if (dist < minDist) {
        minDist = dist;
        centerIndex = index;
      }
    });

    setActive(centerIndex);
  };

  container.addEventListener('scroll', handleScroll);
  handleScroll();

  return () => container.removeEventListener('scroll', handleScroll);
}, []);


// 🎥 Play only the active video
  useEffect(() => {
    if (!ref.current) return;
    const videos = Array.from(ref.current.querySelectorAll("video")) as HTMLVideoElement[];

    videos.forEach((video) => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setTimeout(() => {
            video.play().catch(() => {});
          }, 500);
        });
      }
    });
  }, []);


  return (
    <div 
    className="relative flex flex-col items-center justify-center w-full  py-10"
                style={{
        background: "linear-gradient(90deg, #4B2E2B 3.75%, rgba(0, 0, 0, 0.25) 70%)",
      }}>
      <h1 className="inria-heading2 font-bold text-white text-2xl md:text-3xl text-center mb-14">
        {t("Team Carousel (Video)")}
      </h1>

      <div className="relative flex items-center justify-center w-full max-w-7xl lg:max-w-7xl mx-auto mt-20">
        {/* <button className={`${styles.btn} ${styles.prev} hidden md:block`} onClick={() => scrollTo(-1)}>
          ❮
        </button> */}

        <div ref={ref} className={styles.carousel}>
          <div className={styles.spacer} />
          {team.map((member, i) => {
            // Determine scale and opacity based on distance from center
            const dist = Math.abs(i - active);
            let scale = 1;
            let opacity = 1;
            if (dist === 1) {
              scale = 0.85; // immediate sides
              opacity = 0.8;
            } else if (dist === 2) {
              scale = 0.7; // outermost sides
              opacity = 0.6;
            } else if (dist > 2) {
              scale = 0.6;
              opacity = 0.4;
            }

            return (
              <div
                key={i}
                className={styles.card}
                style={{
                  transform: `scale(${scale})`,
                  opacity,
                  zIndex: 10 - dist,
                }}
              >
                <div className="relative w-full h-[500px] overflow-hidden rounded-[20px]">
                  <video
                    muted
                    playsInline
                    loop
                    preload="metadata"
                    poster="/MKN05652.jpg"
                    className="w-full h-full object-cover"
                  >
                    <source src={member.videoMp4} type="video/mp4" />
                    {member.videoWebm && <source src={member.videoWebm} type="video/webm" />}
                  </video>
                </div>
              </div>
            );
          })}
          <div className={styles.spacer} />
        </div>

        {/* <button className={`${styles.btn} ${styles.next} hidden md:block`} onClick={() => scrollTo(1)}>
          ❯
        </button> */}
          {/* Line indicators */}
          <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex gap-2 max-w-[100px] md:max-w-[400px] ">
            {team.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1  rounded-full transition-all ${
                  i === active ? "w-3 md:w-7 bg-white" : "w-1 md:w-3 bg-gray-400"
                }`}
              />
            ))}
          </div>
      </div>
    </div>
  );
}

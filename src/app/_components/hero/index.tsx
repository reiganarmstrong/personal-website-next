import * as motion from "motion/react-client";
import Image from "next/image";
import { getDefaultAnimationProps } from "@/lib/utils/animation-utils";
import headshot from "../../../assets/headshot.jpeg";

export default () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="join join-vertical max-w-md">
          <motion.div
            {...getDefaultAnimationProps({
              delay: 0,
              initialY: -60,
              duration: 0.4,
            })}
            className="flex items-start justify-center text-center"
          >
            <Image
              src={headshot}
              width={150}
              height={150}
              alt="Picture of the author"
              className="mb-10 rounded-full border-4 bg-base-content"
            />
          </motion.div>
          <motion.h1
            {...getDefaultAnimationProps({ delay: 0.1 })}
            className="font-bold text-5xl"
          >
            Hello there
          </motion.h1>
          <motion.p
            {...getDefaultAnimationProps({ delay: 0.2 })}
            className="py-6"
          >
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

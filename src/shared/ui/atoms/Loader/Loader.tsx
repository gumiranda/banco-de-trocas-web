import { chakra, Box } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const MotionSvg = chakra(motion.svg);
const MotionCircle = chakra(motion.circle);
const MotionPath = chakra(motion.path);

export const Loader = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      cx: ["95", "35"],
      fillOpacity: [0, 1, 1],
      transition: { duration: 1, repeat: Infinity, times: [0, 0.2, 1] },
    });
  }, [controls]);

  const rotateControls = useAnimation();

  useEffect(() => {
    rotateControls.start({
      rotate: [0, 45, 0],
      transition: { duration: 1, repeat: Infinity, times: [0, 0.5, 1] },
    });
  }, [rotateControls]);

  return (
    <MotionSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      display="block"
    >
      <title>Loading...</title>
      <MotionCircle cx="60" cy="50" r="4" fill="#06092b" animate={controls} />
      <MotionCircle cx="60" cy="50" r="4" fill="#06092b" animate={controls} />
      <MotionCircle cx="60" cy="50" r="4" fill="#06092b" animate={controls} />
      <MotionPath d="M50 50V20a30 30 0 000 60z" fill="#f231a5" />
      <MotionPath d="M50 50H20a30 30 0 0060 0z" fill="#f231a5" animate={rotateControls} />
      <MotionPath d="M50 50H20a30 30 0 0160 0z" fill="#f231a5" animate={rotateControls} />
    </MotionSvg>
  );
};

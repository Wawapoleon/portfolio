import { useMotionValue, useTransform, motion } from "framer-motion";

import React from "react";

const MiniBubble = (props) => {
  const { fromCol, viaCol } = props;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY }}
      drag
      dragElastic={0.1}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileTap={{ cursor: "grabbing" }}
      className={`h-[12vw] w-[12vw] cursor-default relative rounded-full bg-gradient-to-br from-${fromCol} via-${viaCol} blur-2xl`}
    ></motion.div>
  );
};

export default MiniBubble;

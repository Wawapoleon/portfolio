import { useMotionValue, useTransform, motion } from "framer-motion";

import React from "react";

const DraggableBubble = () => {
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
      className="h-[30vw] w-[30vw] cursor-grab relative rounded-full bg-gradient-to-r from-[#f6d365] to-[#fda085] blur-2xl"
    >
      <div className="h-[30vw] w-[30vw] cursor-grab relative rounded-full bg-gradient-to-r from-[#ecd2e9] to-[#e154bb] blur-2xl translate-x-32 translate-y-14 opacity-40"></div>
    </motion.div>
  );
};

export default DraggableBubble;

import { motion } from "framer-motion";

const Divider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "100%" }}
      transition={{ duration: 0.8 }}
      style={{
        height: "2px",
        width: "100%",
        background: "linear-gradient(to right, #6366F1, #E879F9)",
        margin: "0",
      }}
    />
  );
};

export default Divider;

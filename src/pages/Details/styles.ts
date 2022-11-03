import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.1 } },
})``;

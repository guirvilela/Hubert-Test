import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.1 } },
})`
  height: 100%;
  @media (min-width: 1200px) {
    max-width: 1200px;
    margin: auto;
  }

  @media (max-width: calc(1201px)) {
    padding: 0px 24px;
  }
`;

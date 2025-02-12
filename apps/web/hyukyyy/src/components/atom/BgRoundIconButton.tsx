import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function BgRoundIconButton({ children }: Props) {
  return (
    <motion.div
      className='flex h-12 w-12 items-center justify-center rounded-full'
      whileHover={{
        backgroundColor: 'rgba(170, 170, 170, 0.5)',
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
    >
      {children}
    </motion.div>
  );
}

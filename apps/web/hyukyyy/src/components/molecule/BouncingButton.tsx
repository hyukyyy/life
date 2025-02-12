import {motion} from 'motion/react';
import {ReactNode} from 'react';

export default function BouncingButton({
                                           children,
                                           className,
                                           onClick
                                       }: {
    children: ReactNode | string;
    className?: string | undefined;
    onClick?: () => void;
}) {
    return (
        <motion.button
            className={
                className ? className : ''
            }
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
            onClick={() => onClick && onClick()}
        >
            {children}
        </motion.button>
    );
}

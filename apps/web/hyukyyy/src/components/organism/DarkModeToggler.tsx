import useTailwindDarkMode from "@/hooks/useTailwindDarkMode.ts";
import TogglePositionBox from "@/components/organism/TogglePositionBox.tsx";

export default function DarkModeToggler() {
    const {isDarkMode, toggle} = useTailwindDarkMode();

    return <div
        className={`cursor-pointer border-[1.5px] rounded-lg w-[153px] border-black dark:border-white bg-slate-200 dark:bg-gray-500`}
        onClick={toggle}>
        <TogglePositionBox flag={isDarkMode}>
            <span className={`font-bold`}>
                {isDarkMode ? 'dark' : 'light'}
            </span>
        </TogglePositionBox>
    </div>;
}
import TogglePositionBox from "@/components/organism/TogglePositionBox.tsx";
import useLayoutStore from "@/store/LayoutStore.ts";

export default function DarkModeToggler() {
    const {isDarkMode, toggleIsDarkMode} = useLayoutStore();

    return <div
        className={`cursor-pointer border-[1.5px] rounded-lg w-[153px] border-black dark:border-white bg-slate-200 dark:bg-gray-500`}
        onClick={toggleIsDarkMode}>
        <TogglePositionBox flag={isDarkMode}>
            <span className={`font-bold`}>
                {isDarkMode ? 'dark' : 'light'}
            </span>
        </TogglePositionBox>
    </div>;
}
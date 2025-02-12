import {useEffect, useState} from "react";

const useTailwindDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggle = () => setIsDarkMode(!isDarkMode);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // 다크 모드 상태를 로컬 스토리지에 저장하여 페이지 새로고침 후에도 상태 유지
        if (document.documentElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }


        // 페이지 로드 시 로컬 스토리지에서 이전 테마 상태 가져오기
        if (localStorage.getItem('theme') === 'dark') {
            document.documentElement.classList.add('dark');
        }

    }, [isDarkMode]);

    return {isDarkMode, setIsDarkMode, toggle};
}

export default useTailwindDarkMode;
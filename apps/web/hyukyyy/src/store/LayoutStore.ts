import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {createSetter} from '@/store/storeUtil.ts';

interface state {
    sideMenuOpen: boolean;
    isDarkMode: boolean;
    careerTabOpen: boolean;
    projectTabOpen: boolean;
}

interface action {
    setSideMenuOpen: (value: boolean) => void;
    toggleSideMenuOpen: () => void;
    toggleIsDarkMode: () => void;
    toggleProjectTabOpen: () => void;
    toggleCareerTabOpen: () => void;
}

export type Store = state & action;

const useLayoutStore = create<Store>()(
    devtools((set) => ({
        sideMenuOpen: false,
        setSideMenuOpen: createSetter(set, 'sideMenuOpen'),
        isDarkMode: false,
        projectTabOpen: false,
        careerTabOpen: false,
        toggleSideMenuOpen: () =>
            set(
                (state) => ({
                    sideMenuOpen: !state.sideMenuOpen,
                }),
                false,
                `toggleSideMenuOpen`
            ),
        toggleIsDarkMode: () =>
            set(
                (state) => ({
                    isDarkMode: !state.isDarkMode,
                }),
                false,
                `isDarkMode`
            ),
        toggleProjectTabOpen: () =>
            set(
                (state) => ({
                    projectTabOpen: !state.projectTabOpen,
                }),
                false,
                `projectTabOpen`
            ),
        toggleCareerTabOpen: () =>
            set(
                (state) => ({
                    careerTabOpen: !state.careerTabOpen,
                }),
                false,
                `careerTabOpen`
            ),
    }))
);

export default useLayoutStore;

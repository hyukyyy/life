export default function SkillsetTab() {
    return <section className={`flex items-center justify-center mx-2`}>
        <div className={`rounded-lg shadow-sm px-10 py-10`}>
            <ul>
                <li className={`flex items-center gap-4 my-4`}>
                    <span className={`font-bold underline underline-offset-4 text-lg w-[80px]`}>
                        language
                    </span>
                    <div className={`flex flex-row gap-2 overflow-x-auto`}>
                        <img
                            src={`https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E`}
                            alt={`javascript`}
                        />
                        <img
                            src={`https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white`}
                            alt={`typescript`}
                        />
                        <img
                            src={`https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white`}
                            alt={`typescript`}
                        />
                    </div>
                </li>
                <li className={`flex items-center gap-4 my-4`}>
                    <span className={`font-bold underline underline-offset-4 text-lg w-[80px]`}>
                        library
                    </span>
                    <div className={`flex flex-row gap-2 overflow-x-auto`}>
                        <img
                            src={`https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB`}
                            alt={`react`}
                        />
                        <img
                            src={`https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB`}
                            alt={`react-native`}
                        />
                        <img
                            src={`https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white`}
                            alt={`react-query`}
                        />
                        <img
                            src={`https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white`}
                            alt={`redux`}
                        />

                        <img
                            src={`https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white`}
                            alt={`tailwindcss`}
                        />
                        <img
                            src={`https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white`}
                            alt={`styled-component`}
                        />
                        <img
                            src={`https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white`}
                            alt={`react-query`}
                        />
                        <img
                            src={`https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white`}
                            alt={`three.js`}
                        />
                    </div>
                </li>
                <li className={`flex items-center gap-4 my-4`}>
                    <span className={`font-bold underline underline-offset-4 text-lg w-[80px]`}>
                        framework
                    </span>
                    <div className={`flex flex-row gap-2 overflow-x-auto`}>
                        <img
                            src={`https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white`}
                            alt={`nextjs`}
                        />
                        <img
                            src={`https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white`}
                            alt={`nestjs`}
                        />
                        <img
                            src={`https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white`}
                            alt={`spring`}
                        />
                    </div>
                </li>
                <li className={`flex items-center gap-4 my-4`}>
                    <span className={`font-bold underline underline-offset-4 text-lg w-[80px]`}>
                        tool
                    </span>
                    <div className={`flex flex-row gap-2 overflow-x-auto`}>
                        <img
                            src={`https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white`}
                            alt={`vite`}
                        />
                        <img
                            src={`https://img.shields.io/badge/pnpm-%234a4a4a.svg?style=for-the-badge&logo=pnpm&logoColor=f69220`}
                            alt={`pnpm`}
                        />
                        <img
                            src={`https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white`}
                            alt={`github`}
                        />
                        <img
                            src={`https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white`}
                            alt={`aws`}
                        />

                        <img
                            src={`https://img.shields.io/badge/webstorm-143?style=for-the-badge&logo=webstorm&logoColor=white&color=black`}
                            alt={`webstorm`}
                        />
                    </div>
                </li>
            </ul>
        </div>
    </section>
}
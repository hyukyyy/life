import {MyInfo} from "@/contants/myInfo.ts";

interface Props {
    info: MyInfo;
}

export default function MeCard({ info }: Props) {
    return <div className={`flex flex-row items-center justify-start gap-4 w-1/3`}>
        <img className={`w-[30px] h-auto aspect-square`} src={info.icon} alt={`${info.fieldName}-icon`} />
        <div className={`flex flex-col justify-center items-start`}>
            <span className={`font-bold`}>{info.fieldName}</span>
            <span>{info.fieldValue}</span>
        </div>
    </div>
}
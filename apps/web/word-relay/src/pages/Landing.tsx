import {getQuery} from "@/api/nationalInstitute.ts";
import {useEffect} from "react";

export default function Landing() {
    useEffect(() => {
        const ex = async () => {
            const data = await getQuery({q: '안녕'});
            console.log(data)
        }

        ex().finally();
    }, [])


    return <div></div>
}
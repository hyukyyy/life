export interface MyInfo {
    icon?: string;
    fieldName: string;
    fieldValue: string;
}


export const myInfo: MyInfo[] = [
    {
        icon: '/user.png',
        fieldName: 'name',
        fieldValue: '윤동혁'
    },
    {
        icon: '/marker.png',
        fieldName: 'location',
        fieldValue: '서울특별시 송파구'
    },
    {
        icon: '/telephone.png',
        fieldName: 'phone',
        fieldValue: '010-8538-8433'
    },
    {
        icon: '/email.png',
        fieldName: 'email',
        fieldValue: 'ftkem2003@gmail.com'
    },
]
import Filter from "./filter";


export default class CustomerFilter implements Filter {
    id?:number;
    nameLike?:string;
    email?:string
    isActive?:number;
    orderBy?:string;
    orderByDirection?: 'ASC' | 'DESC'
    currentPage?:number;
    pageSize?:number;
}
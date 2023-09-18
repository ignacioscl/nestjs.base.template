export default interface Filter {
    id?: number;
    isActive?:number;
    orderBy?:string;
    orderByDirection?: 'ASC' | 'DESC'
    currentPage?:number;
    pageSize?:number;


}
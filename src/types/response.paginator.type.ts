interface ResponsePaginator<T> {
    data: T;
    totalRecords: number;
    actualPage:number;
}

export default ResponsePaginator;


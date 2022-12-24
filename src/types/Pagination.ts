
export default interface Pagination {
    current_page: number,
    data:Array<any>,
    phone:string,
    first_page_url:string,
    from:number,
    last_page:number,
    last_page_url:string,
    links:Array<any>,
    next_page_url:string|null,
    path:string,
    per_page:number
    prev_page_url:string|null,
    to:number,
    total:number
  }
  
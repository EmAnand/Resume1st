export interface blog{
    CreatedByUid:string|null,
    CreatedByName:string|null,
    creationDate:Date|null,
    approvalDate:Date|null,
    isApproved:boolean|null,
    subject:string|null,
    blog:string|null,
    view:number,
    likes:number
}
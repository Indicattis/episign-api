export interface DocumentDTO {
    id: number
    filename: string
    data: Buffer
    status: boolean
    emp_id: number
    createdAt?: Date
}
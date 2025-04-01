export interface Employee {
    id: string
    name: string
    employeeId: string
    avatar: string
    type: string
    country: string
    flag: string
    usage: {
        current: number
        total: number
        color: string
    }
    status: 'Draft' | 'New Hire'
}
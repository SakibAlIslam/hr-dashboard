export interface Employee {
    id: number
    name: string
    employmentId: string
    avatar: string
    type: string
    country: {
        name: string
        flag: string
    }
    licenseUsed: number
    licenseTotal: number
    licenseColor: string
    status: 'Draft' | 'New Hire'
}
import type { Employee } from '@/types/employee'

export const employees: Employee[] = [
  {
    id: 1,
    name: 'Luhutan Imin',
    avatar: 'https://i.pravatar.cc/40?img=1',
    type: 'Employee',
    employmentId: 'L8RQSC',
    country: {
      name: 'Australia',
      flag: 'au'
    },
    licenseUsed: 1,
    licenseTotal: 5,
    licenseColor: '#EC008C',
    status: 'Draft'
  },
  {
    id: 2,
    name: 'Robert Fox',
    avatar: 'https://i.pravatar.cc/40?img=2',
    type: 'Global Payroll',
    employmentId: 'N9KMON',
    country: {
      name: 'India',
      flag: 'in'
    },
    licenseUsed: 4,
    licenseTotal: 5,
    licenseColor: '#6A0DAD',
    status: 'New Hire'
  },
  {
    id: 3,
    name: 'Eleanor Pena',
    avatar: 'https://i.pravatar.cc/40?img=3',
    type: 'Contractors',
    employmentId: 'K8LOVN',
    country: {
      name: 'Iceland',
      flag: 'is'
    },
    licenseUsed: 4,
    licenseTotal: 5,
    licenseColor: '#00BFFF',
    status: 'New Hire'
  },
  {
    id: 4,
    name: 'Leslie Alexander',
    avatar: 'https://i.pravatar.cc/40?img=4',
    type: 'Employee',
    employmentId: 'K8LOVN',
    country: {
      name: 'Lebanon',
      flag: 'lb'
    },
    licenseUsed: 3,
    licenseTotal: 5,
    licenseColor: '#FFA500',
    status: 'Draft'
  },
  {
    id: 5,
    name: 'Devon Lane',
    avatar: 'https://i.pravatar.cc/40?img=5',
    type: 'Employee',
    employmentId: 'DH5FXE',
    country: {
      name: 'United Kingdom',
      flag: 'gb'
    },
    licenseUsed: 4,
    licenseTotal: 5,
    licenseColor: '#00BFFF',
    status: 'New Hire'
  },
  {
    id: 6,
    name: 'Jenny Wilson',
    avatar: 'https://i.pravatar.cc/40?img=6',
    type: 'Contractors',
    employmentId: 'AKXS6T',
    country: {
      name: 'Croatia',
      flag: 'hr'
    },
    licenseUsed: 3,
    licenseTotal: 5,
    licenseColor: '#FFA500',
    status: 'Draft'
  }
]

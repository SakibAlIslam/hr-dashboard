import type { Employee } from "@/types/employee";

export const employees: Employee[] = [
  {
    id: '1',
    name: 'Luhutan Imin',
    employeeId: 'L8RQSC',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    type: 'Employee',
    country: 'Australia',
    flag: '🇦🇺',
    usage: { current: 1, total: 5, color: '#f472b6' },
    status: 'Draft'
  },
  {
    id: '2',
    name: 'Robert Fox',
    employeeId: 'N9KMON',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    type: 'Global Payroll',
    country: 'India',
    flag: '🇮🇳',
    usage: { current: 4, total: 5, color: '#8b5cf6' },
    status: 'New Hire'
  },
  {
    id: '3',
    name: 'Eleanor Pena',
    employeeId: 'K8LOVN',
    avatar: 'https://randomuser.me/api/portraits/women/21.jpg',
    type: 'Contractors',
    country: 'Iceland',
    flag: '🇮🇸',
    usage: { current: 4, total: 5, color: '#3b82f6' },
    status: 'New Hire'
  },
  {
    id: '4',
    name: 'Leslie Alexander',
    employeeId: 'K8LOVN',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
    type: 'Employee',
    country: 'Lebanon',
    flag: '🇱🇧',
    usage: { current: 3, total: 5, color: '#f97316' },
    status: 'Draft'
  },
  {
    id: '5',
    name: 'Devon Lane',
    employeeId: 'DH5FXE',
    avatar: 'https://randomuser.me/api/portraits/men/53.jpg',
    type: 'Employee',
    country: 'United Kingdom',
    flag: '🇬🇧',
    usage: { current: 4, total: 5, color: '#3b82f6' },
    status: 'New Hire'
  },
  {
    id: '6',
    name: 'Jenny Wilson',
    employeeId: 'AKXS6T',
    avatar: 'https://randomuser.me/api/portraits/women/90.jpg',
    type: 'Contractors',
    country: 'Croatia',
    flag: '🇭🇷',
    usage: { current: 3, total: 5, color: '#f97316' },
    status: 'Draft'
  }
]

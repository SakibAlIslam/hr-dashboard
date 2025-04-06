# 💼 HR Dashboard

A modern, responsive HR Dashboard built with **Vue 3**, **TypeScript**, **Pinia**, and **Tailwind CSS v4**. Designed for managing employee data efficiently with filters, tabs, progress bars, flags, and more!

## ✨ Features

- ✅ Dashboard overview with stats
- ✅ Employee table with:
  - Checkbox row selection
  - Progress bar for license usage
  - Copy to clipboard (Employment ID)
  - Country flag with image
  - Status badge
- ✅ Filter by tab (All, New Hire, Draft)
- ✅ Filter by type dropdown (Employee, Payroll, Contractors)
- ✅ Fully responsive (Mobile & Desktop)
- ✅ Dark / Light theme toggle
- ✅ SVG Icon system with `vite-plugin-svg-icons`
- ✅ State management with **Pinia**

## 🔧 Tech Stack

- **Vue 3**
- **TypeScript**
- **Vite**
- **Pinia**
- **Tailwind CSS v4**
- **vite-plugin-svg-icons**

## 📁 Project Structure

```bash
src/
│
├── assets/icons/         # SVG icons
├── components/
│   ├── table/            # Table-specific components
│   ├── ui/               # Reusable UI components (Button, Card, Checkbox, etc.)
│
├── constants/            # Static data (e.g. employees, menu)
├── layouts/              # Layout components
├── pages/                # Page components (e.g. Dashboard)
├── router/               # Vue Router configuration
├── stores/               # Pinia stores
├── types/                # Global TypeScript interfaces
├── App.vue               # Root component
├── main.ts               # Entry file

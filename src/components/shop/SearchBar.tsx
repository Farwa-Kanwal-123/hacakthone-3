"use client"

import { CiSearch } from "react-icons/ci"

interface SearchBarProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <div className="flex w-[248px] h-[46px] mt-[72px] text-center">
      <input
        type="text"
        placeholder="Search Product"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full bg-[#ebe2d5] pl-4 text-gray-400"
      />
      <CiSearch size={20} className="bg-[#FF9F0D] p-3 text-[#FFFFFF] w-[46px] h-[46px] -translate-x-10" />
    </div>
  )
}


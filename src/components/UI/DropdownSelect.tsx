import { ChevronDownIcon } from "lucide-react"
import { cn } from "../../utils/utils"
import { useDropdown } from "../../hooks/useDropdown"

interface Option {
  label: string
  value: string
}

interface DropdownSelectProps {
  options: Option[]
  value?: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export const DropdownSelect = ({
  options,
  value,
  onChange,
  placeholder = "Selectiona un item...",
  className,
}: DropdownSelectProps) => {
  const { ref, open, setOpen } = useDropdown<HTMLDivElement>()

  const selected = options.find((opt) => opt.value === value)

  return (
    <div ref={ref} className={cn("relative inline-block text-left text-foreground", className)}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center justify-between w-full gap-2 rounded-md border border-orange-500 px-3 py-1.5 text-sm shadow-sm hover:bg-gray-50 cursor-pointer"
      >
        {selected?.label || placeholder}
        <ChevronDownIcon className="size-4" />
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg ring-1 ring-orange-500/20 focus:outline-none max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option.value)
                setOpen(false)
              }}
              className={cn(
                "w-full text-left px-3 py-2 text-sm cursor-pointer",
                "hover:bg-orange-500/10 hover:text-orange-500 text-gray-700",
                selected?.value === option.value && "bg-orange-500/10 text-orange-500"
              )}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

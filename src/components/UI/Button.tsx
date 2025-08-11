import { cn } from "../../utils/utils"

const buttonVariants = {
  default: "bg-orange-500 text-white hover:bg-orange-600",
  outline: "border border-orange-500 text-orange-500 hover:bg-orange-50",
  gradient: "bg-gradient-to-r from-orange-400 to-pink-500 text-white hover:brightness-110",
  slideFill: "relative px-2 py-1 rounded-md border border-orange-500 text-orange-500 overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition",
  splitSlide: "relative px-2 py-1 rounded-md border border-orange-500 text-orange-500 overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition"
}

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: React.ReactNode
  variant?: keyof typeof buttonVariants
}

export const Button = ({ className, children, variant = "default", ...rest }: Props) => {

  if (variant === "slideFill") {
    return (
      <button
        className={cn(
          buttonVariants.slideFill,
        )}
        {...rest}
      >
        {/* Fondo diagonal animado */}
        <span
          className="w-[140%] absolute inset-0 bg-orange-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"
          style={{
            clipPath: 'polygon(0 0, 70% 0, 100% 100%, 0% 100%)',
          }}
        />

        <span className={cn("relative z-10 group-hover:text-white transition-colors duration-300", className)}>
          {children}
        </span>
      </button>
    )
  }

  if (variant === "splitSlide") {
    return (
      <button
        className={cn(
          buttonVariants.splitSlide,
        )}
        {...rest}
      >
        {/* Fondo diagonal izquierda animado */}
        <span
          className="w-[60%] h-full absolute top-0 left-0 bg-orange-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-0"
          style={{
            clipPath: 'polygon(0 0, 70% 0, 100% 100%, 0% 100%)',
          }}
        />
        {/* Fondo diagonal izquierda animado */}
        <span
          className="w-[60%] h-full absolute top-0 right-0 bg-orange-500 translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-0"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 30% 100%)',
          }}
        />

        <span className={cn("relative z-10 group-hover:text-white transition-colors duration-700", className)}>
          {children}
        </span>
      </button>
    )
  }

  return (
    <button
      className={cn("px-2 py-1 rounded-md transition shadow-sm hover:shadow-md cursor-pointer", buttonVariants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  )
}
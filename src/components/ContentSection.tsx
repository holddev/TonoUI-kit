import { cn } from "../utils/utils"

interface Props {
  title: string,
  description?: string
  icon?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

export const ContentSection = ({ title, description, icon, className, children }: Props) => {
  return (
    <section className={cn("space-y-2 pt-12", className)}>
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold flex items-center gap-2 text-foreground">{icon}{title}</h3>
      {description && (<p className="text-muted">{description}</p>)}
      {children}
    </section >
  )
}
import { CopyIcon } from "lucide-react";
import { Button } from "../UI/Button";
import { copyToClipboard } from "../../utils/utils";

export const ShowcaseButtons = () => {

  const buttons = [
    { variant: "default", label: "Default Button" },
    { variant: "gradient", label: "Gradient Button" },
    { variant: "outline", label: "Outline Button" },
    { variant: "slideFill", label: "Slide Fill Button" },
    { variant: "splitSlide", label: "Split Slide Button" }
  ] as const;

  const handleOnCopy = async (text: string) => {
    if (await copyToClipboard(text)) {
      console.log("copiado")
    } else {
      console.log("no copiado")
    }
  }

  return (
    <>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {buttons.map(({ label, variant }) => {
          const code = `
            <Button variant="${variant}">
              ${label}
            </Button>
          `
          return (
            <li key={variant} className="flex flex-col items-center gap-2 p-4 border rounded-md shadow-sm bg-white dark:bg-zinc-900">
              <Button variant={variant}>{label}</Button>
              <span className="text-xs text-zinc-500">variant="{variant}"</span>
              <pre className="relative text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded w-full overflow-x-auto">
                <code>
                  {code}
                </code>
                <button onClick={() => handleOnCopy(code)} className="absolute right-2 bottom-2 cursor-pointer">
                  <CopyIcon className="size-4 sm:size-5" />
                </button>
              </pre>
            </li>
          )
        })}
      </ul>

    </>
  )
}
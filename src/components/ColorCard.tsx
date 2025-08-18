import { CopyCheckIcon, CopyIcon } from "lucide-react"
import { copyToClipboard, getTextColor, invertTextColor } from "../utils/utils"
import { useState } from "react"

interface Props {
  hex: string
  rgba: string
  hsl: string
  name: string
}
export const ColorCard = ({ hex, hsl, rgba, name }: Props) => {

  const [copied, setCopied] = useState(false)

  const handleOnCopy = async () => {
    if (await copyToClipboard(hex)) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      console.log("copiado")
    } else {
      console.log("no copiado")
    }
  }

  return (
    <li
      className="relative h-[230px] w-[170px] shadow-md rounded-lg overflow-hidden group"
      style={{ backgroundColor: hex }}
    >
      <button
        onClick={handleOnCopy}
        className="w-full h-full absolute inset-0 cursor-pointer flex flex-col items-center justify-end"
      >
        <div className="w-full pb-4 px-2 md:px-3 flex flex-col items-center justify-end gap-4">
          <div
            className="shadow-sm bg-black/80 text-white/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition"
            style={{ color: invertTextColor(getTextColor(hex)), backgroundColor: getTextColor(hex) }}
          >
            {
              copied
                ? (<CopyCheckIcon className="size-5" />)
                : (<CopyIcon className="size-5" />)
            }

          </div>
          <div className="text-sm w-full flex flex-col gap-1 text-start opacity-0 group-hover:opacity-100 translate-y-3/5 group-hover:translate-y-0 transition"
            style={{ color: getTextColor(hex) }}
          >
            <span className="text-base font-semibold">{hex}</span>
            <span>{rgba}</span>
            <span>{hsl}</span>
          </div>
        </div>
        <span className="w-full bg-primary text-white/80 text-sm p-1">
          {name}
        </span>
      </button>
    </li>
  )
}
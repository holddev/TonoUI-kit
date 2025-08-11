import { BarChart3Icon, BellRing, ChartColumnBigIcon, FolderIcon, HardDriveIcon, HomeIcon, ListTodoIcon, LockIcon, MailIcon, MonitorIcon, SettingsIcon } from "lucide-react"
import type { Palette } from "../../types/types"
import { cn } from "../../utils/utils"

interface Props {
  colors: Palette
}

export const Dashboard = ({ colors }: Props) => {
  const menuItems = [
    { icon: HomeIcon },
    { icon: MonitorIcon, active: true },
    { icon: FolderIcon },
    { icon: ChartColumnBigIcon },
    { icon: LockIcon },
    { icon: MailIcon }
  ]

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const dates = [
    { day: 12, active: true },
    { day: 13 },
    { day: 14, active: true },
    { day: 15 },
    { day: 16 },
    { day: 17 },
    { day: 18 }
  ];

  return (
    <div
      style={{ backgroundColor: colors.background, color: colors.foreground }}
      className="rounded-lg p-6 max-w-full max-h-full flex gap-3 sm:gap-6 font-sans"
    >
      {/* Sidebar */}
      <nav
        style={{ backgroundColor: colors.primary }}
        className="flex flex-col items-center rounded-lg py-4 pl-2 gap-6"
      >
        <div
          className="rounded-full p-1 mb-6 mr-2 font-semibold text-white"
          style={{ backgroundColor: colors.accent }}
        >
          CM
        </div>
        {menuItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <button
              key={i}
              className="w-full text-white text-xl p-2 rounded-tl-lg rounded-bl-lg  hover:bg-opacity-30 transition cursor-pointer"
              style={{
                backgroundColor: item.active ? colors.background : colors.primary,
                color: item.active ? colors.primary : "white"
              }}
            >
              <Icon className="size-4" />
            </button>
          )
        })}
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex gap-3 sm:gap-6 flex-col">

        {/* Header */}
        <header
          style={{ backgroundColor: colors.accent }}
          className="rounded-lg flex items-center justify-between p-6 text-white"
        >
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Hello, Barbara!</h1>
            <p className="opacity-80 text-sm">Welcome back to CMac My Mac</p>
          </div>
          <div className="flex items-center gap-4">
            <SettingsIcon className="size-4" />
            <BellRing className="size-4" />
            <img
              src="https://i.pravatar.cc/40?img=12"
              alt="avatar"
              className="rounded-full w-10 h-10"
            />
          </div>
        </header>

        <section className="flex-1 flex flex-col lg:flex-row gap-3 sm:gap-6">
          {/* Columna izquierda: Información principal */}
          <div className="flex-1 flex flex-col gap-3 sm:gap-6 min-w-[300px]">
            {/* Calendar */}
            <section
              style={{ backgroundColor: colors.muted }}
              className="rounded-lg p-4"
            >
              <h2 className="font-semibold mb-3">December 2-8</h2>
              {/* Encabezado + Fechas */}
              <ul className="flex gap-2 sm:gap-4 justify-around">
                {Array.from({ length: weekDays.length }).map((_, index) => (
                  <li
                    key={index}
                    className={cn(
                      "flex flex-col gap-4 justify-center text-center text-sm px-1.5 py-2 rounded-md shadow-md",
                      dates[index].active && "text-white font-bold"
                    )}
                    style={{
                      backgroundColor: dates[index].active ? colors.primary : "",
                    }}
                  >
                    {/* Nombre del día */}
                    <div>{weekDays[index]}</div>
                    {/* Fecha */}
                    <div>{dates[index].day}</div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Weekly Reports */}
            <div
              style={{
                backgroundColor: colors.background,
                color: colors.foreground,
                boxShadow: `0 0 10px ${colors.muted}`,
              }}
              className="rounded-lg p-4"
            >
              <h3 className="font-semibold mb-4">Weekly Reports</h3>
              <div className="grid grid-cols-4 gap-4 text-center text-sm">
                {[
                  { label: "System", value: "15 Gb" },
                  { label: "Music", value: "1.25 Gb" },
                  { label: "Push", value: "16.35 Gb" },
                  { label: "Photo", value: "12.10 Gb" },
                ].map(({ label, value }) => (
                  <div key={label} className="space-y-1">
                    <div
                      className="mx-auto w-8 h-8 rounded"
                      style={{ backgroundColor: colors.secondary }}
                    />
                    <div className="font-bold">{value}</div>
                    <div className="opacity-70 text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Updating Monitoring */}
            <div
              style={{
                backgroundColor: colors.background,
                color: colors.foreground,
                boxShadow: `0 0 10px ${colors.muted}`,
              }}
              className="rounded-lg p-4"
            >
              <h3 className="font-semibold mb-4">Updating Monitoring</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>System Files</span>
                    <span>25%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded h-2">
                    <div
                      style={{ width: "25%", backgroundColor: colors.primary }}
                      className="h-2 rounded"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Applications</span>
                    <span>50%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded h-2">
                    <div
                      style={{ width: "50%", backgroundColor: colors.accent }}
                      className="h-2 rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: Other Functions */}
          <div className="flex flex-row lg:flex-col flex-wrap  gap-3 sm:gap-6">
            {/* Quick Actions */}
            <div
              style={{
                backgroundColor: colors.muted,
                color: colors.foreground,
              }}
              className="rounded-lg p-4 w-full sm:w-80"
            >
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <BarChart3Icon className="size-4" /> Quick Actions
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Backup Now", icon: HardDriveIcon },
                  { label: "Check Updates", icon: ChartColumnBigIcon },
                  { label: "Clear Cache", icon: FolderIcon },
                ].map(({ label, icon: Icon }, i) => (
                  <button
                    key={i}
                    style={{ backgroundColor: colors.primary }}
                    className="w-full text-white text-left p-2 rounded text-sm flex items-center gap-2 hover:opacity-90 transition"
                  >
                    <Icon className="size-4" />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* To-Do List */}
            <div
              style={{
                backgroundColor: colors.muted,
                color: colors.foreground,
              }}
              className="rounded-lg p-4 w-full sm:w-80"
            >
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <ListTodoIcon className="size-4" /> To-Do Today
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="size-4" />
                  <span>Update system</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="size-4" />
                  <span>Review reports</span>
                </li>
                <li className="flex items-center gap-2">
                  <input type="checkbox" className="size-4" />
                  <span>Backup data</span>
                </li>
              </ul>
            </div>

            {/* System Info */}
            <div
              style={{
                backgroundColor: colors.muted,
                color: colors.foreground,
              }}
              className="rounded-lg p-4 w-full sm:w-80"
            >
              <h3 className="font-semibold mb-4">System Info</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>OS:</span>
                  <span>macOS 14</span>
                </div>
                <div className="flex justify-between">
                  <span>Uptime:</span>
                  <span>2d 6h</span>
                </div>
                <div className="flex justify-between">
                  <span>Memory:</span>
                  <span>12 GB / 16 GB</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
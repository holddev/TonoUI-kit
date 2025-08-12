import { ShoppingCartIcon, StarIcon, HeartIcon, SearchIcon, TagIcon, BellRingIcon, GiftIcon, LightbulbIcon, ShirtIcon, PlusCircleIcon, ClipboardListIcon, LogOutIcon, FunnelIcon } from "lucide-react";
import type { Palette } from "../../types/types";

interface Props {
  colors: Palette;
}

export const Ecommerce = ({ colors }: Props) => {

  const menuItems = [
    { label: "Explore New", icon: <TagIcon className="w-5 h-5" />, active: true },
    { label: "Clothing and Shoes", icon: <ShirtIcon className="w-5 h-5" /> },
    { label: "Gifts and Living", icon: <GiftIcon className="w-5 h-5" /> },
    { label: "Inspiration", icon: <LightbulbIcon className="w-5 h-5" /> },
  ];

  const quickActions = [
    { label: "Request for product", icon: <PlusCircleIcon className="w-5 h-5" /> },
    { label: "Add member", icon: <ClipboardListIcon className="w-5 h-5" /> },
  ];

  const lastOrders = [
    { label: "DXC Nike...view order", icon: <ShoppingCartIcon className="w-5 h-5" /> },
    { label: "Outerwear...view order", icon: <TagIcon className="w-5 h-5" /> },
  ];

  return (
    <div
      style={{ backgroundColor: colors.background, color: colors.foreground }}
      className="rounded-lg p-4 sm:p-6 max-w-full  font-sans"
    >
      {/* Header */}
      <header
        style={{ backgroundColor: colors.muted }}
        className="flex items-center justify-between mb-6 px-4 py-3 rounded"
      >
        <h1 className="text-2xl font-bold select-none cursor-default">BuyJacket's</h1>

        <div className="flex items-center gap-5">
          <button
            style={{ color: colors.foreground }}
            className="relative p-1"
            aria-label="View cart"
          >
            <ShoppingCartIcon className="size-5" />
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              3
            </span>
          </button>
          <button
            style={{ color: colors.foreground }}
            className="relative p-1"
            aria-label="View cart"
          >
            <BellRingIcon className="size-5" />
            <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              4
            </span>
          </button>

          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="User avatar"
            className="rounded-full w-10 h-10 border-2 border-primary"
          />
        </div>
      </header>



      {/* Sidebar */}
      <aside className="absolute w-64 bg-white shadow-md p-4 mb-6 hidden lg:block">
        {/* Main navigation */}
        <nav>
          <ul className="space-y-1">
            {menuItems.map(({ label, icon, active }) => (
              <li key={label}>
                <button
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition 
                    ${!active && "text-gray-700 hover:bg-gray-100"}
                  `}
                  style={{ backgroundColor: active ? colors.primary : "", color: active ? "white" : "" }}
                >
                  {icon}
                  <span>{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quick Actions */}
        <div>
          <p className="text-sm font-semibold mb-2 text-gray-600">Quick actions</p>
          <ul className="space-y-1">
            {quickActions.map(({ label, icon }) => (
              <li key={label}>
                <button
                  className=" flex items-center gap-3 px-3 py-2 w-full rounded text-gray-700 hover:bg-gray-100 transition cursor-pointer"
                >
                  {icon}
                  <span>{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Last Orders */}
        <div>
          <p className="text-sm font-semibold mb-2 text-gray-600">Last orders</p>
          <ul className="space-y-1">
            {lastOrders.map(({ label, icon }) => (
              <li key={label}>
                <button
                  className=" flex items-center gap-3 px-3 py-2 w-full rounded text-gray-700 hover:bg-gray-100 transition cursor-pointer"
                >
                  {icon}
                  <span>{label}</span>
                </button>
              </li>
            ))}
          </ul>
          <span className="text-sm text-blue-500 hover:underline">
            See all
          </span>
        </div>

        {/* Logout */}
        <button
          className="mt-4 w-full flex items-center justify-center gap-2 px-3 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition"
          type="button"
        >
          <LogOutIcon className="w-5 h-5" />
          Log out
        </button>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-72">
        {/* Top Bar */}
        <div
          className="flex items-center justify-between mb-6 rounded-md px-4 py-2 shadow-sm"
          style={{ backgroundColor: colors.muted }}
        >
          {/* Navegación de categorías */}
          <nav className="flex items-center gap-6 text-sm font-semibold text-gray-700">
            {["All", "Men", "Women"].map((cat, i) => (
              <button
                key={cat}
                className={`relative
          px-3 py-1 rounded-md transition
          ${i === 2
                    ? "bg-primary text-white"
                    : "hover:bg-primary hover:text-white"
                  }
        `}

              >
                {cat}
                {i == 2 && (
                  <div
                    className="absolute -bottom-0.5 bg-white h-1 w-[60%] rounded-full"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Botones de acción */}
          <div className="flex items-center gap-4">
            <button
              style={{ backgroundColor: colors.primary }}
              className="flex items-center gap-2 px-4 py-2 rounded-md text-white font-semibold hover:brightness-90 transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary"
              aria-label="Filters"
            >
              <FunnelIcon className="size-4" />
              Filters
            </button>
            <button
              aria-label="Search"
              className="p-2 rounded-md hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary"
            >
              <SearchIcon className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>


        {/* Bento Grid */}
        <section className=" grid grid-cols-1 row-span-4 md:grid-cols-4 gap-4">
          {/* Promoción grande (col-span-2 en md) */}
          <div
            className="h-[150px] relative rounded-lg overflow-hidden col-span-2 row-span-1 md:col-span-2"
          >
            {/* Imagen de fondo */}
            <img
              src="/woman-2593366_1280.jpg"
              alt="Promotion"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Overlay con color secondary */}
            <div
              style={{ backgroundColor: colors.secondary }}
              className="absolute inset-0 opacity-50 z-10"
            ></div>

            {/* Contenido */}
            <div className="relative p-4 z-20">
              <h2 className="text-xl font-bold text-white">GET UP TO 50% OFF</h2>
              <p className="text-sm opacity-80 text-white">Get Discount</p>
            </div>
          </div>


          {/* Producto destacado (col-span-2 en md) */}
          <div
            className="relative rounded-lg overflow-hidden col-span-2 row-span-2 md:col-span-1"
            style={{
              backgroundColor: colors.background,
              boxShadow: `0 2px 8px ${colors.muted}`
            }}
          >
            {/* Imagen de fondo */}
            <img
              src="sandal.webp"
              alt="Shoes"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Overlay */}
            <div
              style={{ backgroundColor: colors.background }}
              className="absolute inset-0 opacity-40 z-10"
            ></div>

            {/* Contenido */}
            <div className="p-4 relative z-20">
              <h3 className="font-semibold text-white">WMX Rubber Zebra sandal</h3>
              <p className="text-sm opacity-80 text-white">Our Picks</p>
              <button
                style={{ backgroundColor: colors.primary }}
                className="text-white px-3 py-2 rounded mt-2"
              >
                $36
              </button>
            </div>
          </div>


          {/* Sección destacada (col-span-1 en md) */}
          <div
            className="relative rounded-lg p-4 col-span-2 sm:col-span-1 row-span-2 md:col-span-1 overflow-hidden"
          >
            {/* Imagen de fondo */}
            <img
              src="./OIP.webp"
              alt="Winter's Weekend"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* Overlay con color de la paleta */}
            <div
              style={{ backgroundColor: colors.accent }}
              className="absolute inset-0 opacity-30 z-10"
            ></div>

            <div className="relative z-20">

              {/* Contenido */}
              <h2 className="text-xl font-bold text-white">
                Winter's Weekend
              </h2>
              <p className="text-sm opacity-80 text-white">
                Keep it casual
              </p>
              <button
                style={{ backgroundColor: colors.primary }}
                className="text-white px-3 py-2 rounded mt-2"
              >
                $40
              </button>
            </div>
          </div>



          {/* Usuario favorito (col-span-1 en md) */}
          <div
            className="h-[150px] rounded-lg col-span-2 sm:col-span-1 row-span-1 md:col-span-2 flex flex-col items-center justify-center p-6 shadow-md"
            style={{ backgroundColor: colors.muted, boxShadow: `0 4px 12px ${colors.muted}` }}
          >
            {/* Ícono representando oferta o compra */}
            <TagIcon className="text-white opacity-80 size-10" />

            <h3 className="my-2 font-semibold text-white text-lg">Avail Offers</h3>

            <button
              style={{ backgroundColor: colors.primary }}
              className="text-primary px-6 py-1 rounded-full font-semibold text-white"
            >
              See All
            </button>
          </div>





          {/* Productos normales (col-span-1 en md) */}
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              style={{ backgroundColor: colors.background, boxShadow: `0 2px 8px ${colors.muted}` }}
              className="rounded-lg overflow-hidden col-span-2 sm:col-span-1 row-span-1 md:col-span-1"
            >
              <div className="relative">
                <img
                  src={`/product${i + 1}.jpg`}
                  alt="Product"
                  className="w-full h-48 object-cover"
                />
                <button
                  style={{ backgroundColor: colors.accent }}
                  className="absolute top-2 right-2 p-1 rounded-full text-white"
                >
                  <HeartIcon className="size-4" />
                </button>
              </div>
              <div className="py-2 px-3">
                <h3 className="font-semibold">Product Name</h3>
                <div className="flex items-center gap-1">
                  <StarIcon className="size-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm opacity-70">4.8</span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="font-bold">$49.99</span>
                  <button
                    style={{ backgroundColor: colors.primary }}
                    className="text-white text-xs px-3 py-1 rounded"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
};
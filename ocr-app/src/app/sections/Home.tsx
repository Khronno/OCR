"use client";
import React, { useState } from "react";

export default function Page() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    return (
        <div
            className="min-h-screen flex flex-col md:flex-row xl:flex-row"
            style={{
                background: "linear-gradient(to bottom right, #dde1e4, #536878)",
            }}
        >
            {/* Mobile */}
            <div className="flex items-center justify-between p-4 bg-[#536878] text-white md:hidden xl:hidden">
                <h1 className="text-lg md:text-xl font-bold">OCR</h1>
                <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                >
                    {/* Hamburger Icon */}
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#536878] text-white p-6 pl-2 transform transition-transform duration-200 ease-in-out 
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:relative xl:w-72 xl:static`}
            >
                <h1 className="text-xl md:text-2xl font-bold mb-6 text-center">OCR</h1>
                <nav className="space-y-4">
                    {["Home", "Clientes", "Facturas", "Ingresos", "Gastos", "Cerrar Sesión"].map(
                        (item) => (
                            <a
                                href="#"
                                className="block py-2 pl-2 rounded-md hover:bg-[#4b5e6c] transition-colors"
                                key={item}
                            >
                                {item}
                            </a>
                        )
                    )}
                </nav>
            </aside>

            {/* Overlay for Mobile Sidebar */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            <main className="flex-1 p-6 bg-white/40 xl:p-10 overflow-hidden">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 xl:mb-8">
                    <h2 className="text-xl md:text-2xl font-semibold xl:text-3xl text-[#323e48]">Home</h2>
                    <div className="flex items-center space-x-4">
                        <span className="text-[#323e48]">Usuario</span>

                        <div className="w-16 h-16 rounded-full bg-gray-300 flex justify-center ">
                            <svg className=" ml-1.5 my-auto" width="38" height="42" viewBox="0 0 329 496" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M201.5 106C201.5 144.899 167.289 176.5 125 176.5C82.7113 176.5 48.5 144.899 48.5 106C48.5 67.1013 82.7113 35.5 125 35.5C167.289 35.5 201.5 67.1013 201.5 106Z" fill="#536878" stroke="#536878" />
                                <path d="M170.339 195.978C152.739 202.412 133.502 205.051 114.355 203.622C95.2073 202.194 76.8396 196.752 60.8798 187.849C44.9221 178.947 31.9317 166.903 22.9394 152.892C13.9558 138.894 9.2134 123.333 9.00704 107.575C8.80069 91.8182 13.1339 76.1799 21.74 62.0278C30.3547 47.8616 43.0147 35.5817 58.7239 26.3834C74.4355 17.1836 92.6482 11.3915 111.751 9.59696C130.854 7.80247 150.159 10.0706 167.932 16.1692" stroke="#536878" stroke-width="18" stroke-linecap="round" />
                                <path d="M50 487V248C50 239.716 56.7157 233 65 233H204.97C211.04 233 216.513 236.659 218.832 242.27L267.5 360L320 487" stroke="#536878" stroke-width="18" stroke-linecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-6 xl:mb-8">
                    <div className="p-6 bg-[#eef0f2] rounded-lg hover:drop-shadow-lg duration-300 hover:-translate-y-1 ring-[#536878] ring-2 hover:ring-2 hover:ring-[#3a4954]">
                        <h3 className="text-lg md:text-xl font-semibold text-[#323e48]">Ingresos</h3>
                        <p className="text-2xl md:text-3xl font-bold text-[#536878] mt-2">67,343</p>
                        <span className="text-sm md:text-base text-gray-500"><span className="text-green-600">+8,7%</span> Aumento respecto al mes pasado</span>
                    </div>
                    <div className="p-6 bg-[#eef0f2] rounded-lg hover:drop-shadow-lg duration-300 hover:-translate-y-1 ring-[#536878] ring-2 hover:ring-2 hover:ring-[#3a4954]">
                        <h3 className="text-lg md:text-xl font-semibold text-[#323e48]">Gastos</h3>
                        <p className="text-2xl md:text-3xl font-bold text-[#536878] mt-2">2,343</p>
                        <span className="text-sm md:text-base text-gray-500"><span className="text-red-600">-1.8%</span> Menos respecto al mes pasado</span>
                    </div>
                    <div className="p-6 bg-[#eef0f2] rounded-lg hover:drop-shadow-lg duration-300 hover:-translate-y-1 ring-[#536878] ring-2 hover:ring-2 hover:ring-[#3a4954]">
                        <h3 className="text-lg md:text-xl font-semibold text-[#323e48]">Facturas</h3>
                        <p className="text-2xl md:text-3xl font-bold text-[#536878] mt-2">35,343</p>
                        <span className="text-sm md:text-base text-gray-500"><span className="text-green-600">+2.1%</span>  Aumento respecto al mes pasado</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    <div className="p-6 bg-[#eef0f2] rounded-lg hover:drop-shadow-lg duration-300 hover:-translate-y-1 ring-[#536878] ring-2 hover:ring-2 hover:ring-[#3a4954]">
                        <h3 className="text-lg md:text-xl font-semibold text-[#323e48] mb-4">Resumen</h3>
                        <ul className="space-y-2">
                            {[
                                "Movimiento +2345",
                                "Movimiento -1241",
                                "Movimiento +2341",
                                "Movimiento -1541",
                            ].map((item, index) => (
                                <li className="flex justify-between text-gray-700" key={index}>
                                    <span>
                                        {item.split(" ")[0]} {item.split(" ")[1]}
                                    </span>
                                    <span className={item.includes("+") ? "text-green-600" : "text-red-600"}>
                                        {item.split(" ")[2]}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-1">
                        <div className="p-6 bg-[#eef0f2] rounded-lg hover:drop-shadow-lg duration-300 hover:-translate-y-1 ring-[#536878] ring-2 hover:ring-2 hover:ring-[#3a4954] flex items-center justify-center">
                            <div className="text-center">
                                <h3 className="text-lg md:text-xl font-semibold text-[#323e48]">Ventas totales</h3>
                                <div className="mt-4 text-4xl md:text-5xl font-bold text-green-600">70%</div>
                            </div>
                        </div>

                        <div className="p-6 bg-[#eef0f2] rounded-lg hover:drop-shadow-lg duration-300 hover:-translate-y-1 ring-[#536878] ring-2 hover:ring-2 hover:ring-[#3a4954]">
                            <h3 className="text-lg md:text-xl font-semibold text-[#323e48] mb-4">Actividad</h3>
                            <ul className="space-y-3">
                                {["Actividad 1", "Actividad 2", "Actividad 3"].map((activity, index) => (
                                    <li className="flex items-center space-x-2" key={index}>
                                        <span
                                            className={`h-2 w-2 rounded-full ${index === 0
                                                ? "bg-green-500"
                                                : index === 1
                                                    ? "bg-yellow-500"
                                                    : "bg-red-500"
                                                }`}
                                        ></span>
                                        <span className="text-[#323e48]">{activity}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
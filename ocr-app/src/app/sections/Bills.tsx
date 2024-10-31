"use client";
import React, { useState } from "react";
import PageDropZone from "../components/PageDropZone";

export default function Page() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [uploadedText, setUploadedText] = useState("");
    const [loading, setLoading] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    const handleDrop = async (files: File[]) => {
        if (files.length > 0) {
            const file = files[0];
            setLoading(true);
            try {
                const formData = new FormData();
                formData.append("image", file);

                const response = await fetch("http://127.0.0.1:5000/upload", {
                    method: "POST",
                    body: formData,
                });

                const result = await response.json();
                if (response.ok) {
                    setUploadedText(result.text || "No text extracted.");
                } else {
                    setUploadedText(result.Error || "Error occurred during upload.");
                }
            } catch (error) {
                setUploadedText("Error connecting to the API.");
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <PageDropZone onDrop={handleDrop}>
            <div
                className="min-h-screen flex flex-col md:flex-row xl:flex-row"
                style={{
                    background: "linear-gradient(to bottom right, #dde1e4, #536878)",
                }}
            >
                <div className="flex items-center justify-between p-4 bg-[#536878] text-white md:hidden xl:hidden">
                    <h1 className="text-lg md:text-xl font-bold">OCR</h1>
                    <button
                        onClick={toggleSidebar}
                        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                    >
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

                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
                        onClick={toggleSidebar}
                    ></div>
                )}

                <main className="flex-1 p-6 bg-white/40 xl:p-10 overflow-hidden">
                    <header className="flex justify-between items-center mb-6">
                        <h1 className="text-xl md:text-2xl font-semibold xl:text-3xl text-[#323e48]">Facturas</h1>
                    </header>

                    <div className="flex space-x-4 border-b-2 border-[#dde1e4] mb-4 overflow-x-auto">
                        <button className="py-2 px-4 border-b-4 border-[#a9b4bc] text-[#536878]">Clientes</button>
                        <button className="py-2 px-4 text-[#4b5e6c]">Realizado</button>
                        <button className="py-2 px-4 text-[#4b5e6c]">Pendiente</button>
                        <button className="py-2 px-4 text-[#4b5e6c]">Cancelado</button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white/40 shadow-md rounded-md overflow-hidden">
                            {/* Table content */}
                        </table>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <p className="text-sm text-[#4b5e6c]">Page 1 of 10</p>
                        <div className="flex space-x-2">
                            <button className="px-2 py-1 border rounded">{"<"}</button>
                            <button className="px-2 py-1 border bg-[#536878] text-white rounded">1</button>
                            <button className="px-2 py-1 border rounded">2</button>
                            <button className="px-2 py-1 border rounded">...</button>
                            <button className="px-2 py-1 border rounded">{">"}</button>
                        </div>
                    </div>

                    {loading && <p className="text-center text-[#536878]">Procesando...</p>}
                    {uploadedText && (
                        <div className="mt-6 p-4 bg-[#eef0f2] rounded-md">
                            <p className="text-[#536878] font-semibold">Texto Comprimido:</p>
                            <p className="text-black font-[500]">{uploadedText}</p>
                        </div>
                    )}
                </main>
            </div>
        </PageDropZone>
    );
}

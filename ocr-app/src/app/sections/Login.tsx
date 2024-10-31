"use client"
import React from 'react';

export default function page() {
    return (
        <div className="flex justify-center items-start h-screen relative overflow-hidden bg-[#eef0f2]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#dde1e4] to-[#536878] opacity-40" />
            <div className="absolute inset-0 bg-pattern opacity-10" />

            <div className="relative bg-white p-8 rounded-lg shadow-lg w-80 z-10 pt-24">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#536878] w-full h-8 rounded-t-lg"></div>

                <div className="flex justify-center my-12">
                    <svg width="140" height="160" viewBox="0 0 329 496" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M201.5 106C201.5 144.899 167.289 176.5 125 176.5C82.7113 176.5 48.5 144.899 48.5 106C48.5 67.1013 82.7113 35.5 125 35.5C167.289 35.5 201.5 67.1013 201.5 106Z" fill="#536878" stroke="#536878" />
                        <path d="M170.339 195.978C152.739 202.412 133.502 205.051 114.355 203.622C95.2073 202.194 76.8396 196.752 60.8798 187.849C44.9221 178.947 31.9317 166.903 22.9394 152.892C13.9558 138.894 9.2134 123.333 9.00704 107.575C8.80069 91.8182 13.1339 76.1799 21.74 62.0278C30.3547 47.8616 43.0147 35.5817 58.7239 26.3834C74.4355 17.1836 92.6482 11.3915 111.751 9.59696C130.854 7.80247 150.159 10.0706 167.932 16.1692" stroke="#536878" stroke-width="18" stroke-linecap="round" />
                        <path d="M50 487V248C50 239.716 56.7157 233 65 233H204.97C211.04 233 216.513 236.659 218.832 242.27L267.5 360L320 487" stroke="#536878" stroke-width="18" stroke-linecap="round" />
                    </svg>
                </div>

                {/* Login */}
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Usuario"
                        className="w-full px-3 py-2 rounded-lg border border-[#a9b4bc] focus:outline-none focus:ring-2 focus:ring-[#536878]"
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className="w-full px-3 py-2 rounded-lg border border-[#a9b4bc] focus:outline-none focus:ring-2 focus:ring-[#536878]"
                    />
                    <button
                        type="submit"
                        className="mt-6 w-full bg-[#536878] text-white py-2 rounded-lg hover:bg-[#4b5e6c] transition duration-300"
                    >
                        Iniciar
                    </button>
                </form>
            </div>
        </div>
    )
}
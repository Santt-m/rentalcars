import React from "react";
import Image from "next/image";
export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid lg:grid-cols-2 h-full items-center justify-center">
            <div className="col-span-1 flex items-center justify-center">{children}</div>
            <div className="hidden lg:flex  lg:bg-slate-300 h-full justify-center items-center lg-flex-col">
                <Image
                    src="/public/logo.svg"
                    alt="logo"
                    width={200}
                    height={200}
                    className="object-contain"
                />
                <h1 className="text-3xl font-bold">Administrador</h1>
            </div>
        </div>
    );
}

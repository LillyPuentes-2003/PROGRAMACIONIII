"use client"
import React, { useState } from "react"
import CareList from "./CareListFixed"
import { useToast } from "./Toast"
import { usePets, removePet } from "../lib/hooks"
import { CardSkeleton } from "./Skeleton"

type Mascota = {
  id: number
  nombre: string
  especie: string
  raza: string
  fecha_nacimiento: string
  sexo: string
}

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"

export default function PetList() {
  const { pets, isLoading } = usePets()
  const [selected, setSelected] = useState<Mascota | null>(null)
  const { show } = useToast()

  const fmtDateOnly = (s: string) => {
    if (!s) return ""
    const tIdx = s.indexOf("T")
    return tIdx > 0 ? s.slice(0, tIdx) : s
  }

  return (
    <div className="p-4 bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-semibold mb-4 text-blue-700 flex items-center gap-2">
        🐶 Lista de Mascotas
      </h2>

      {isLoading ? (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      ) : (
        <ul className="space-y-3">
          {pets.map((p) => (
            <li
              key={p.id}
              className={`p-4 rounded-xl shadow-md transition-all duration-200 ${
                selected?.id === p.id
                  ? "bg-blue-100 border-blue-400 border"
                  : "bg-white hover:bg-blue-50 border border-gray-200"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-lg font-semibold text-gray-800">
                    {p.nombre}{" "}
                    <span className="text-sm text-gray-500">({p.especie})</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {p.raza} • {p.sexo} • {fmtDateOnly(p.fecha_nacimiento)}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      setSelected(selected?.id === p.id ? null : p)
                    }
                    className="px-3 py-1 rounded-lg text-sm font-medium bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
                  >
                    {selected?.id === p.id ? "Ocultar" : "Cuidados"}
                  </button>

                  <button
                    onClick={async () => {
                      try {
                        await removePet(p.id)
                        setSelected(null)
                        show("Mascota eliminada", "success")
                      } catch (e: any) {
                        show(e.message || "Error al eliminar", "error")
                      }
                    }}
                    className="px-3 py-1 rounded-lg text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 transition"
                  >
                    Eliminar
                  </button>
                </div>
              </div>

              {selected?.id === p.id && (
                <div className="mt-4 border-t pt-3 animate-fade-in">
                  <h3 className="text-base font-semibold mb-2 text-blue-700">
                    Cuidados de {selected.nombre}
                  </h3>
                  <CareList mascotaId={selected.id} />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

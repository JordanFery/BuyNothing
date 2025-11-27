import React from "react";

export default function Success() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white">
            <h1 className="text-4xl font-bold mb-4">
                Merci pour votre achat.
            </h1>

            <p className="text-lg text-neutral-600 max-w-md mb-6">
                Vous avez officiellement acheté… rien.
                Et vous avez reçu exactement ce pour quoi vous avez payé.
            </p>

            <a
                href="/"
                className="px-5 py-2 bg-black text-white rounded-lg hover:bg-neutral-800 transition"
            >
                Revenir à l'accueil
            </a>
        </main>
    );
}

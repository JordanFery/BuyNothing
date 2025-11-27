// "use client";

// import React, { useState } from "react";

// export default function App() {
//   const products = [
//     { id: "vide-platine", name: "Le Vide Édition Platine", price: 999 },
//     { id: "neant-sculpte", name: "Le Néant Sculpté à la main", price: 4999 },
//     { id: "rien-premium", name: "Rien Premium 2.0", price: 19999 },
//     { id: "nothingclub", name: "Abonnement mensuel NothingClub", price: 199, recurring: true },
//   ];

//   const [selected, setSelected] = useState(products[1]); // Le Néant par défaut

//   async function handleCheckout(productId) {
//     const res = await fetch("/api/checkout", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ product: productId }),
//     });

//     if (!res.ok) {
//       console.error("Erreur Stripe API :", res.status);
//       return;
//     }

//     const data = await res.json();
//     window.location.href = data.url;
//   }

//   const total = selected.price;

//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6 py-12">
//       <h1 className="text-5xl font-bold mb-6 tracking-wide">
//         BuyNothing™
//       </h1>

//       <p className="text-xl text-gray-600 max-w-xl mb-12">
//         Un site ultra-premium où vous achetez… strictement rien.<br />
//         “L’expérience ultime de possession immatérielle.”
//       </p>

//       {/* Sélecteur de produit */}
//       <div className="mb-12 space-y-4">
//         {products.map((p) => (
//           <button
//             key={p.id}
//             onClick={() => setSelected(p)}
//             className={`w-full max-w-md px-6 py-4 border-2 rounded-xl text-left transition
//               ${selected.id === p.id ? "border-black font-semibold" : "border-gray-200"}`}
//           >
//             <div className="flex justify-between">
//               <span>{p.name}</span>
//               <span className="font-mono">${p.price.toLocaleString()}</span>
//             </div>
//             {p.recurring && <div className="text-sm text-gray-500">Abonnement mensuel</div>}
//           </button>
//         ))}
//       </div>

//       {/* Faux panier */}
//       <div className="max-w-md w-full mb-8 p-6 bg-gray-50 border border-gray-200 rounded-xl text-left">
//         <p className="mb-2 font-semibold">Panier</p>
//         <p>Produit sélectionné : {selected.name}</p>
//         <p className="text-lg font-bold mt-4">Total : ${total.toLocaleString()}</p>
//         <p className="mt-2 text-gray-500 italic">Vous êtes sur le point d’acquérir rien. Félicitations.</p>
//       </div>

//       {/* Bouton principal */}
//       <button
//         onClick={() => handleCheckout(selected.id)}
//         className="px-10 py-4 bg-black text-white rounded-2xl text-xl font-semibold hover:bg-gray-900 transition"
//       >
//         Acheter le Néant
//       </button>
//     </main>
//   );
// }



"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Home() {
  const products = [
    { id: "price_1SXwD0GA9C0WpZq9WeBAlR20", name: "Le Vide Édition Platine", price: 999 },
    { id: "price_1SXwBYGA9C0WpZq9YemD5xt9", name: "Le Néant Sculpté à la Main", price: 4999 },
    { id: "price_1SXwfiGA9C0WpZq9WteQm2zJ", name: "Rien Premium 2.0", price: 19999 },
    { id: "price_1SXwEmGA9C0WpZq9DMFNnEzL", name: "Abonnement mensuel NothingClub", price: 199, recurring: true },
  ];

  const [selected, setSelected] = useState(products[1]); // Le Néant par défaut

  async function handleCheckout(product) {
    // const res = await fetch("/api/checkout", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ product: productId }),
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productId: product.id,
        recurring: product.recurring || false
      })
    });

    if (!res.ok) {
      console.error("Erreur Stripe API :", res.status);
      return;
    }

    const data = await res.json();
    window.location.href = data.url;
  }

  const total = selected.price;

  return (
    <main className="min-h-screen bg-neutral-50 flex flex-col items-center px-6 py-12 text-center">
      {/* Hero Section */}
      <div className="max-w-3xl mb-12">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide text-black">
          BuyNothing™
        </h1>
        <p className="text-xl text-neutral-700 mb-6">
          Pour les riches qui ont tout, offrez-vous l’expérience ultime du vide.<br />
          Ressentez le luxe de ne rien posséder et découvrez le néant sculpté à la main.
        </p>
        <p className="text-sm text-neutral-500 italic">
          Chaque achat est symbolique, unique et irréversible.
        </p>
      </div>

      {/* Sélecteur de produit */}
      <div className="mb-12 space-y-4 w-full max-w-md">
        {products.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelected(p)}
            className={`w-full px-6 py-4 border-2 rounded-xl text-left transition
              ${selected.id === p.id ? "border-black font-semibold bg-white shadow" : "border-gray-200 bg-gray-50"}`}
          >
            <div className="flex justify-between">
              <span>{p.name}</span>
              <span className="font-mono">{p.price.toLocaleString()}€</span>
            </div>
            {p.recurring && <div className="text-sm text-gray-500 mt-1">Abonnement mensuel</div>}
          </button>
        ))}
      </div>

      {/* Faux panier */}
      <div className="max-w-md w-full mb-8 p-6 bg-white border border-gray-200 rounded-2xl text-left shadow-sm">
        <p className="mb-2 font-semibold">Panier</p>
        <p>Produit sélectionné : {selected.name}</p>
        <p className="text-lg font-bold mt-4">Total : ${total.toLocaleString()}</p>
        <p className="mt-2 text-gray-500 italic">
          Vous êtes sur le point d’acquérir… rien. Félicitations.
        </p>
      </div>

      {/* Bouton principal */}
      <button
        onClick={() => handleCheckout(selected)}
        className="px-10 py-4 bg-black text-white rounded-2xl text-xl font-semibold hover:bg-gray-900 transition"
      >
        Acheter le Néant
      </button>

      {/* Illustration minimaliste / conceptuelle */}
      <div className="mt-16 w-full max-w-2xl h-64 border-2 border-dashed border-neutral-300 rounded-2xl flex items-center justify-center text-neutral-400 text-xl">
        [Le Vide Sculpté à la Main]
      </div>

      {/* Footer */}
      <footer className="mt-20 text-neutral-500 text-sm flex flex-col items-center space-y-2">
        &copy; 2025 BuyNothing™. L’expérience ultime du luxe invisible.
        <Link className="mt-2" href="/cgu">Conditions Générales d'Utilisation</Link>
      </footer>
    </main>
  );
}

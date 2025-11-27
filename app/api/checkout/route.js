// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// // const PRODUCTS = {
// //     "vide-platine": { name: "Le Vide Édition Platine", price: 99900 }, // en cents
// //     "neant-sculpte": { name: "Le Néant Sculpté à la main", price: 499900 },
// //     "rien-premium": { name: "Rien Premium 2.0", price: 1999900 },
// //     "nothingclub": { name: "Abonnement mensuel NothingClub", price: 19900, recurring: true },
// // };

// const PRODUCTS = {
//     "prod_TUw5lbmRtyJnrT": { name: "Le Vide Édition Platine", price: 99900 }, // en cents
//     "prod_TUw3TtCDDFXH5F": { name: "Le Néant Sculpté à la main", price: 499900 },
//     "prod_TUw5Gj29V49LTA": { name: "Rien Premium 2.0", price: 1999900 },
//     "prod_TUw72Oy8Gv3NWD": { name: "Abonnement mensuel NothingClub", price: 19900, recurring: true },
// };

// export async function POST(req) {
//     try {
//         const { product } = await req.json();

//         if (!PRODUCTS[product]) {
//             return new Response(
//                 JSON.stringify({ error: "Produit inconnu" }),
//                 { status: 400, headers: { "Content-Type": "application/json" } }
//             );
//         }

//         const selected = PRODUCTS[product];

//         const line_items = [
//             {
//                 price_data: {
//                     currency: "eur",
//                     product_data: { name: selected.name },
//                     unit_amount: selected.price,
//                     ...(selected.recurring
//                         ? { recurring: { interval: "month" } }
//                         : {}),
//                 },
//                 quantity: 1,
//             },
//         ];

//         const session = await stripe.checkout.sessions.create({
//             mode: selected.recurring ? "subscription" : "payment",
//             payment_method_types: ["card"],
//             line_items,
//             success_url: "http://localhost:3000/success",
//             cancel_url: "http://localhost:3000/",
//         });

//         return new Response(
//             JSON.stringify({ url: session.url }),
//             { status: 200, headers: { "Content-Type": "application/json" } }
//         );
//     } catch (error) {
//         console.error(error);
//         return new Response(
//             JSON.stringify({ error: "Stripe error" }),
//             { status: 500, headers: { "Content-Type": "application/json" } }
//         );
//     }
// }

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export async function POST(req) {
    try {
        const { productId, recurring } = await req.json(); // productId = Price ID Stripe

        const session = await stripe.checkout.sessions.create({
            //     line_items: [
            //         {
            //             price: productId, // ici on envoie directement le Price ID
            //             quantity: 1,
            //         },
            //     ],
            //     mode: productId === "prod_TUw72Oy8Gv3NWD" ? "subscription" : "payment",
            //     payment_method_types: ["card"],
            //     success_url: "http://localhost:3000/success",
            //     cancel_url: "http://localhost:3000/",
            // });
            line_items: [
                { price: productId, quantity: 1 },
            ],
            mode: recurring ? "subscription" : "payment",
            payment_method_types: ["card"],
            success_url: "https://buynothingclub.vercel.app/succes",
            cancel_url: "https://buynothingclub.vercel.app/",
        });


        return new Response(JSON.stringify({ url: session.url }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Stripe error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

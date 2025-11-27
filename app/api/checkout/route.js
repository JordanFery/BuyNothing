import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export async function POST(req) {
    try {
        const { productId, recurring } = await req.json(); // productId = Price ID Stripe

        const session = await stripe.checkout.sessions.create({
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

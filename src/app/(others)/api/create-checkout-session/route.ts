// import { NextResponse } from "next/server"
// import Stripe from "stripe"

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2025-01-27.acacia",
// })

// export async function POST(req: Request) {
//   const { items } = await req.json()

//   const lineItems = items.map((item: any) => ({
//     price_data: {
//       currency: "usd",
//       product_data: {
//         name: item.name,
//         images: [item.image],
//       },
//       unit_amount: Math.round(item.price * 100),
//     },
//     quantity: item.quantity,
//   }))

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     line_items: lineItems,
//     mode: "payment",
//     success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
//     cancel_url: `${process.env.NEXT_PUBLIC_URL}/shopping-cart`,
//   })

//   return NextResponse.json({ id: session.id })
// }









import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
})

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const { items, email } = await req.json()

      const transformedItems = items.map((item: any) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      }))

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: transformedItems,
        mode: "payment",
        success_url: `${req.headers.get("origin")}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.get("origin")}/shopping-cart`,
        metadata: {
          email,
        },
      })

      return NextResponse.json({ sessionId: session.id })
    } catch (err: any) {
      console.error("Error in create-checkout-session: ", err)
      return NextResponse.json({ error: { message: err.message } }, { status: 500 })
    }
  } else {
    return NextResponse.json({ error: { message: "Method not allowed" } }, { status: 405 })
  }
}



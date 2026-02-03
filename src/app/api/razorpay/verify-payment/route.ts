import crypto from "crypto"

export async function POST(req: Request) {
    const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature
    } = await req.json()

    const body = razorpay_order_id + "|" + razorpay_payment_id

    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
        .update(body)
        .digest("hex")

    if (expectedSignature !== razorpay_signature) {
        return new Response(JSON.stringify({ success: false , message: "Invalid Payment" }),

            {
                status: 400,
                headers: { "Content-Type": "application/json" }
            }

        );
    }

    return new Response(JSON.stringify({ success: true, message: "Payment verified" }),

        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }

    );

}

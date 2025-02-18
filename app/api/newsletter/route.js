import axios from "axios";
import { NextResponse } from "next/server";
import { z } from "zod";

const EmailSchema = z.string().email({ message: "Invalid email address" });

export async function POST(request) {
    try {
        const jsonData = await request.json();
        const emailValidation = EmailSchema.safeParse(jsonData.email);

        const BREVO_API_KEY = process.env.BREVO_API_KEY;
        const LIST_ID = parseInt(process.env.BREVO_LIST_ID || "", 10) || 0;

        if (!BREVO_API_KEY || !LIST_ID) {
            console.error("Brevo API Key or List ID not configured properly");
            return res
                .status(500)
                .json({ error: "Server configuration error" });
        }

        const url = "https://api.brevo.com/v3/contacts";
        const data = {
            email: emailValidation.data, // Use the validated email
            listIds: [LIST_ID],
            updateEnabled: true, // Update the contact if it already exists
        };

        const options = {
            headers: {
                "Content-Type": "application/json",
                "api-key": BREVO_API_KEY,
            },
        };

        const response = await axios.post(url, data, options);

        if (response.status === 201) {
            /* await newSubscriberHandler(req, res); */
            return NextResponse.json({
                message: "Inscription à la newsletter réussie !",
            });
        } else if (response.status === 204) {
            return NextResponse.json({
                message:
                    "Vous êtes déjà inscrit ! Nous vous remercions de votre enthousiasme.",
            });
        } else {
            console.error("Brevo API Error:", response.status, response.data);
            return NextResponse.json({
                error: "Une erreur est survenue durant l'inscription.",
            });
        }
    } catch (e) {
        console.error("Error subscribing to Brevo:", e);
        return NextResponse.json({
            error: "Une erreur est survenue durant l'inscription.",
        });
    }
}

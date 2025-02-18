import React, { useState } from "react";
import validator from "validator";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import axios from "axios";
import { Checkbox } from "./ui/checkbox";

const NewsletterForm = () => {
    const [email, setEmail] = useState("");
    const [terms, setTerms] = useState(true);
    const [status, setStatus] = useState("idle");
    const [message, setMessage] = useState("");

    const [isEmailValid, setIsEmailValid] = useState(true);

    const validateEmail = (email) => {
        if (validator.isEmail(email)) {
            setIsEmailValid(true);
        } else {
            setIsEmailValid(false);
        }
    };

    const handleBlur = (e) => {
        validateEmail(e.target.value);
        console.log("Input blurred");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!terms) return;
        setStatus("loading");
        try {
            const response = await axios.post("/api/newsletter", {
                email,
            });
            setStatus("success");
            setMessage(response.data.message);
            setEmail("");
        } catch (error) {
            setStatus("error");
            if (axios.isAxiosError(error)) {
                setMessage(error.response?.data.error || "An error occurred.");
            } else {
                setMessage("An error occurred. Please try again later.");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="flex flex-col w-full gap-6">
                <div className="flex flex-col gap-4">
                    <label className="text-lg">Courriel *</label>
                    <input
                        onBlur={handleBlur}
                        onChange={(e) => setEmail(e.target.value)}
                        className={cn(
                            "rounded-full border px-4 py-4 border-white bg-white/10 focus:bg-transparent text-lg",
                            isEmailValid ? "" : "border-[#ff90b3]"
                        )}
                        type="email"
                        placeholder=""
                    />
                    {!isEmailValid && (
                        <div className="text-[#ff90b3]">
                            Entrez une adresse courriel valide, ex:
                            example@outlok.com
                        </div>
                    )}
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <Checkbox
                            checked={terms}
                            id="terms"
                            onCheckedChange={(val) => setTerms(val)}
                            className="border-white h-6 w-6"
                        />{" "}
                        <label htmlFor="terms" className="text-lg">
                            Oui, inscrivez-moi à la newsletter.
                        </label>
                    </div>
                    <Button
                        type="submit"
                        variant="secondary"
                        className="rounded-full text-xl py-6 px-8 "
                    >
                        S'inscrire
                    </Button>
                </div>
            </div>
            {status === "success" && (
                <p className="success-message">{message}</p>
            )}
            {status === "error" && <p className="error-message">{message}</p>}
        </form>
    );
};

export default NewsletterForm;

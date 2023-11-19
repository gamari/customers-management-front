import { Inquiry } from "../types";

export async function createInquiry(inquiry: Inquiry) {
    const formData = new FormData();

    formData.append('company_name', inquiry.company_name);
    formData.append('phone_number', inquiry.phone_number);

    formData.append('pdf_file', inquiry.pdf_file || new File([], ''));

    try {
        const response = await fetch("http://localhost:8000/inquiry/", {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`エラー発生: ${response.status}`);
        }

        const data = await response.json();
        console.log("Response data:", data);
    } catch (error) {
        console.error("エラー発生:", error);
    }
}

export interface Inquiry {
    id: string;
    company_name: string;
    phone_number: string;
    desired_contract_date: string;
    pdf_file: File | null;
}
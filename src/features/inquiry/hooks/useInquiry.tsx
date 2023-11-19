import { useState } from "react";
import { Inquiry } from "../types";

export const useInquiry = () => {
    const [inquiry, setInquiry] = useState<Inquiry>({
        id: "",
        company_name: "",
        phone_number: "",
        desired_contract_date: "",
        pdf_file: null,
    });

    const validation = () => {
        const errors: string[] = [];

        if (!inquiry.company_name) {
            errors.push("会社名を入力してください");
        }

        if (!inquiry.phone_number) {
            errors.push("電話番号を入力してください");
        }

        if (!inquiry.desired_contract_date) {
            errors.push("契約希望日を入力してください");
        }

        if (!inquiry.pdf_file) {
            errors.push("PDFファイルを選択してください");
        }

        return errors;
    }

    const setCompanyName = (company_name: string) => {
        setInquiry({ ...inquiry, company_name });
    }

    const setPhoneNumber = (phone_number: string) => {
        setInquiry({ ...inquiry, phone_number });
    }

    const setDesiredContractDate = (date: string) => {
        setInquiry({ ...inquiry, desired_contract_date: date });
    }

    const setPdfFile = (file: File | null) => {
        setInquiry({ ...inquiry, pdf_file: file });
    }

    return {
        validation,
        inquiry,
        setCompanyName,
        setPhoneNumber,
        setPdfFile,
        setDesiredContractDate
    }
}
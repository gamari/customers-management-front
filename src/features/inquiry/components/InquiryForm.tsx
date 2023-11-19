import React from "react";

import { useInquiry } from "../hooks/useInquiry";
import { createInquiry } from "../libs/inquiryService";
import { useRouter } from "next/router";

export const InquiryForm = () => {
  const router = useRouter();

  const {
    validation,
    inquiry,
    setCompanyName,
    setPhoneNumber,
    setPdfFile,
    setDesiredContractDate,
  } = useInquiry();

  async function handleSubmit() {
    const errors = validation();

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    await createInquiry(inquiry);

    router.push("/success");
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setPdfFile(file);
  };

  return (
    <form className="w-[600px]">
      <div className="space-y-12">
        <div className="col-span-full">
          <label
            htmlFor="company-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            会社名
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="company-name"
              id="company-name"
              autoComplete="company-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              value={inquiry.company_name}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="company-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            電話番号
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="phone-number"
              id="phone-number"
              autoComplete="phone-number"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              value={inquiry.phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="pdf-file"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            PDFファイル
          </label>
          <div className="mt-2">
            <input
              type="file"
              name="pdf-file"
              id="pdf-file"
              accept="application/pdf"
              className="block w-full text-sm text-gray-900"
              onChange={handleFileChange}
            />
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="desired-contract-date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            契約希望日
          </label>
          <div className="mt-2">
            <input
              type="date"
              name="desired-contract-date"
              id="desired-contract-date"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
              value={inquiry.desired_contract_date}
              onChange={(e) => setDesiredContractDate(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          onClick={handleSubmit}
        >
          送信
        </button>
      </div>
    </form>
  );
};

import { InquiryForm } from "@/features/inquiry/components/InquiryForm";
import React from "react";

const inquiry = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-20">
        <h2 className="font-bold text-3xl">お問い合わせ画面</h2>
      </div>

      <InquiryForm />
    </div>
  );
};

export default inquiry;

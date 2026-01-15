"use client";

import { useState } from "react";
import ProductInquiryModal from "./ProductInquiryModal";

interface ProductInquiryButtonProps {
  productName: string;
}

export default function ProductInquiryButton({
  productName,
}: ProductInquiryButtonProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="block w-full mt-3 bg-timber-green text-white text-center py-3 rounded-md hover:bg-timber-dark-green transition-colors font-semibold"
      >
        Quick Inquiry Form
      </button>

      {showModal && (
        <ProductInquiryModal
          productName={productName}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

"use client";

import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";

interface Props {
  productId: string;
}

const Modal = () => {
  let [isOpen, setIsOpen] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await addUserEmailToProduct(productId, email);

    setIsSubmitting(false);
    setEmail("");
    closeModal();
  };

  return (
    <>
      <Button
        onClick={open}
        className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Track
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="dialog-container"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="dialog-content w-full max-w-md rounded-xl p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="flex justify-between">
                <div className="p-3 border border-gray-200 rounded-10">
                  <Image
                    src="/assets/icons/logo.svg"
                    alt="logo"
                    width={28}
                    height={28}
                  />
                </div>

                <Image
                  src="/assets/icons/x-close.svg"
                  alt="close"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                  onClick={close}
                />
              </div>

              <DialogTitle
                as="h3"
                className="dialog-head_text"
              >
                Stay updated with product pricing alerts right in your inbox!
              </DialogTitle>
              <p className="text-sm text-gray-600 mt-2">
                Never miss a bargain again with our timely alerts!
              </p>

              <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="dialog-input_container">
                  <Image
                    src="/assets/icons/mail.svg"
                    alt="mail"
                    width={18}
                    height={18}
                  />

                  <input
                    required
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="dialog-input"
                  />
                </div>

                <button type="submit" className="dialog-btn">
                  {isSubmitting ? "Submitting..." : "Track"}
                </button>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Modal;

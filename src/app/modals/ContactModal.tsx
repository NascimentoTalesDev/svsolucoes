"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useContactModal } from "../hooks/use-contact-modal";
import ContactForm from "@/components/ContactForm";

const ContactModal = () => {
  const contact = useContactModal();

  if (!contact.isOpen) return null;

  return (
    <div className="fixed flex justify-center items-center h-full w-full z-[1] backdrop-blur-sm bg-bg px-8 sm:px-0">
      <div className="relative bg-white w-full sm:max-w-[500px] border rounded-lg px-6 sm:px-12 pb-5">
        <Button
          onClick={() => contact.onClose()}
          className="absolute p-0 h-10 w-10 bg-primary rounded-full -top-5 border -right-5 "
          variant="default"
        >
          <X />
        </Button>
        <div className=" bg-white">
            <div className="my-8">
                <h4>Preencha o formulário e nós entramos em contato com você</h4>
            </div>

            <ContactForm />
        </div>
        
        
      </div>
    </div>
  );
};

export default ContactModal;
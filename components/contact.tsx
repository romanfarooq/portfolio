"use client";

import SubmitBtn from "./submit-btn";
import SectionHeading from "./section-heading";
import toast from "react-hot-toast";
import { useRef } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.75);
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a href="mailto:theromanfarooq@gmail.com" className="underline">
          theromanfarooq@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        ref={formRef}
        className="mt-5 flex flex-col"
        action={async (formData) => {
          const { message, error } = await sendEmail(formData);
          if (message) {
            toast.success(message);
          } else if (error) {
            toast.error(error);
          }
          formRef.current?.reset();
        }}
      >
        <input
          type="email"
          name="email"
          required
          minLength={5}
          maxLength={100}
          placeholder="Your email"
          className="h-14 px-4 rounded-lg border border-black/10"
        />
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={1000}
          placeholder="Your message"
          className="h-52 my-3 p-4 rounded-lg border border-black/10"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

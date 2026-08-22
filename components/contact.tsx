"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { SectionHeading, Reveal } from "@/components/section";
import { siteConfig } from "@/config/site";

const Contact = () => {
  const formik = useFormik({
    initialValues: { firstName: "", email: "", comment: "" },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const subject = `Hello from ${values.firstName}`;
      const body = `${values.comment}\n\n— ${values.firstName} (${values.email})`;

      window.location.href = `mailto:layaida.samy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    },
  });

  return (
    <section className="pt-24 sm:pt-28" id="contact">
      <SectionHeading eyebrow="Contact" title="Let's talk" />
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div>
            <p className="text-default-600">
              Building something, or stuck on something? Write to me here or directly:
            </p>
            <div className="mt-6 flex flex-col gap-3 font-mono text-sm">
              <Link
                className="link-underline text-default-600 hover:text-primary"
                href={siteConfig.links.email}
              >
                layaida.samy@gmail.com
              </Link>
              <Link
                isExternal
                className="link-underline text-default-600 hover:text-primary"
                href={siteConfig.links.github}
              >
                github.com/Samylay
              </Link>
              <Link
                isExternal
                className="link-underline text-default-600 hover:text-primary"
                href={siteConfig.links.linkedin}
              >
                linkedin.com/in/samy-layaida
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                errorMessage={
                  formik.touched.firstName && formik.errors.firstName
                }
                isInvalid={
                  formik.touched.firstName && !!formik.errors.firstName
                }
                label="Name"
                variant="bordered"
                {...formik.getFieldProps("firstName")}
              />
              <Input
                errorMessage={formik.touched.email && formik.errors.email}
                isInvalid={formik.touched.email && !!formik.errors.email}
                label="Email"
                type="email"
                variant="bordered"
                {...formik.getFieldProps("email")}
              />
            </div>
            <Textarea
              errorMessage={formik.touched.comment && formik.errors.comment}
              isInvalid={formik.touched.comment && !!formik.errors.comment}
              label="Your message"
              minRows={4}
              variant="bordered"
              {...formik.getFieldProps("comment")}
            />
            <Button
              className="transition-[transform,box-shadow] duration-200 ease-[var(--ease-out-custom)] hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97]"
              color="primary"
              radius="full"
              size="lg"
              type="submit"
              variant="shadow"
            >
              Send message
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;

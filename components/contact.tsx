"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, Textarea } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { SectionHeading } from "@/components/section";
import { siteConfig } from "@/config/site";

const Contact = () => {
  const inquiryTypes = [
    {
      label: "Freelance project proposal",
      value: "Freelance project proposal",
    },
    { label: "Collaboration", value: "Collaboration" },
    { label: "Feedback", value: "Feedback" },
    { label: "Other", value: "Other" },
  ];

  const formik = useFormik({
    initialValues: { firstName: "", email: "", type: "Other", comment: "" },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string(),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const subject = `${values.type} — ${values.firstName}`;
      const body = `${values.comment}\n\n— ${values.firstName} (${values.email})`;

      window.location.href = `mailto:layaida.samy@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    },
  });

  return (
    <section className="pt-24 sm:pt-28" id="contact">
      <SectionHeading eyebrow="Contact" index="04" title="Let's talk" />
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-default-600">
            Have a project, a role, or an idea worth building? Send a note and
            I&apos;ll get back to you. You can also reach me directly:
          </p>
          <div className="mt-6 flex flex-col gap-3 font-mono text-sm">
            <Link
              className="text-default-600 hover:text-primary"
              href={siteConfig.links.email}
            >
              layaida.samy@gmail.com
            </Link>
            <Link
              isExternal
              className="text-default-600 hover:text-primary"
              href={siteConfig.links.github}
            >
              github.com/Samylay
            </Link>
            <Link
              isExternal
              className="text-default-600 hover:text-primary"
              href={siteConfig.links.linkedin}
            >
              linkedin.com/in/samy-layaida
            </Link>
          </div>
        </div>

        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input
              errorMessage={formik.touched.firstName && formik.errors.firstName}
              isInvalid={formik.touched.firstName && !!formik.errors.firstName}
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
          <Select
            defaultSelectedKeys={["Other"]}
            label="Type of enquiry"
            variant="bordered"
            {...formik.getFieldProps("type")}
          >
            {inquiryTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </Select>
          <Textarea
            errorMessage={formik.touched.comment && formik.errors.comment}
            isInvalid={formik.touched.comment && !!formik.errors.comment}
            label="Your message"
            minRows={4}
            variant="bordered"
            {...formik.getFieldProps("comment")}
          />
          <Button
            color="primary"
            radius="full"
            size="lg"
            type="submit"
            variant="shadow"
          >
            Send message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

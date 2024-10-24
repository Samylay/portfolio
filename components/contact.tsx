"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/react";

const Contact = () => {
  const inquiryTypes = [
    { label: "Freelance project proposal", value: "hireMe" },
    { label: "Collaboration", value: "collaboration" },
    { label: "Feedback", value: "feedback" },
    { label: "Other", value: "other" },
  ];

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "other",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string(),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const emailBody = `${values.comment}`.trim();

      const mailtoUrl = `mailto:layaida.samy@gmail.com?subject=${encodeURIComponent(values.type)}&body=${encodeURIComponent(emailBody)}`;

      window.location.href = mailtoUrl;
    },
  });

  return (
    <section className="min-h-screen py-16" id="contact">
      <h1 className="text-4xl font-bold dark:text-white mb-8">Contact me</h1>
      <div className="flex max-w-4xl mx-auto px-8 mt-24">
        <Card className="w-full">
          <CardBody className="gap-4">
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <Input
                errorMessage={
                  formik.touched.firstName && formik.errors.firstName
                }
                id="firstName"
                isInvalid={
                  formik.touched.firstName && !!formik.errors.firstName
                }
                label="Name"
                type="text"
                variant="bordered"
                {...formik.getFieldProps("firstName")}
              />

              <Input
                errorMessage={formik.touched.email && formik.errors.email}
                id="email"
                isInvalid={formik.touched.email && !!formik.errors.email}
                label="Email Address"
                type="email"
                variant="bordered"
                {...formik.getFieldProps("email")}
              />

              <Select
                defaultSelectedKeys={["other"]}
                id="type"
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
                id="comment"
                isInvalid={formik.touched.comment && !!formik.errors.comment}
                label="Your message"
                minRows={4}
                variant="bordered"
                {...formik.getFieldProps("comment")}
              />

              <Button
                className="w-full"
                color="default"
                size="lg"
                type="submit"
                variant="ghost"
              >
                Submit
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default Contact;

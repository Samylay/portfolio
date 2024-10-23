"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/react";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

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
    <section className="min-h-screen py-16 bg-gray-950" id="contact">
      <h1 className="text-4xl font-bold text-white mb-8">Contact me</h1>
      <div className="flex max-w-4xl mx-auto px-8 mt-24">
        <Card className="w-full">
          <CardBody className="gap-4">
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <Input
                type="text"
                label="Name"
                id="firstName"
                variant="bordered"
                isInvalid={
                  formik.touched.firstName && !!formik.errors.firstName
                }
                errorMessage={
                  formik.touched.firstName && formik.errors.firstName
                }
                {...formik.getFieldProps("firstName")}
              />

              <Input
                type="email"
                label="Email Address"
                id="email"
                variant="bordered"
                isInvalid={formik.touched.email && !!formik.errors.email}
                errorMessage={formik.touched.email && formik.errors.email}
                {...formik.getFieldProps("email")}
              />

              <Select
                label="Type of enquiry"
                id="type"
                variant="bordered"
                defaultSelectedKeys={["other"]}
                {...formik.getFieldProps("type")}
              >
                {inquiryTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </Select>

              <Textarea
                label="Your message"
                id="comment"
                variant="bordered"
                minRows={4}
                isInvalid={formik.touched.comment && !!formik.errors.comment}
                errorMessage={formik.touched.comment && formik.errors.comment}
                {...formik.getFieldProps("comment")}
              />

              <Button
                type="submit"
                color="default"
                className="w-full"
                size="lg"
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

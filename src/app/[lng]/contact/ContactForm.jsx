'use client'

import { useId, useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import { Button } from '@/components/Button'
import alliedsoft_blue_logo from '@/images/alliedsoft_blue_logo.png'
import { FadeIn } from '@/components/FadeIn'

export default function ContactForm({
  workInquiries,
  fullName,
  email,
  company,
  phone,
  message,
  contactUsPageTitle,
  contactFeedback,
  contactFeedbackTitle,
  contactErrorMessage,
}) {
  const { register, handleSubmit } = useForm()

  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function onSubmit(data) {
    setIsLoading(true);
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        setIsError(true)
        throw new Error(result.error || "Error sending email.");
      }
  
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  }
  

  if (isSubmitted) {
    return (
      <FadeIn className="flex">
        <article className="relative flex w-full flex-col rounded-3xl p-6 shadow-md ring-1 ring-accent-950/5 transition hover:bg-accent-50/50 sm:p-8">
          <h3>
            <span className="absolute inset-0 rounded-3xl" />
            <Image src={alliedsoft_blue_logo} alt="asd" className="" />
          </h3>
          <p className="mt-6 font-display text-2xl font-semibold text-accent-950">
            {contactFeedbackTitle}
          </p>
          <p className="mt-4 text-base text-secondary">{contactFeedback}</p>
        </article>
      </FadeIn>
    )
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="font-display text-base font-semibold text-accent-950">
          {workInquiries}
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label={fullName} register={register} name="fullName" />
          <TextInput
            label={email}
            register={register}
            name="email"
            type="email"
          />
          <TextInput label={company} register={register} name="company" />
          <TextInput
            label={phone}
            register={register}
            name="phone"
            type="tel"
          />
          <TextAreaInput label={message} register={register} name="message" />
        </div>
        <Button
          type="submit"
          className={`mt-10 flex items-center justify-center gap-2 ${
            isLoading ? 'bg-accent-950/50 hover:bg-accent-950/60' : ''
          }`}
        >
          <div className="flex items-center gap-2">
            <p>{contactUsPageTitle}</p>
            {isLoading && <Spinner size="w-4 h-4" color="white" />}{' '}
          </div>
        </Button>
        {isError && <p className="mt-4 text-sm text-red-600">{contactErrorMessage}</p>}
      </form>
    </FadeIn>
  )
}

function Spinner({ size = 'w-6 h-6', color = 'border-gray-900' }) {
  return (
    <div
      className={`inline-block ${size} animate-spin rounded-full border-4 border-t-transparent ${color}`}
    />
  )
}

function TextInput({ label, register, name, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...register(name, { required: true })}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-accent-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
        {...props}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-accent-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-accent-950"
      >
        {label}
      </label>
    </div>
  )
}

function TextAreaInput({ label, register, name, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <textarea
        id={id}
        {...register(name, { required: true })}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-accent-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
        {...props}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-0 mt-6 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-accent-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-accent-950"
      >
        {label}
      </label>
    </div>
  )
}

import { useState, type FormEvent } from "react";
import { Mail, Clock, Check, AlertCircle } from "lucide-react";
import { CONTACT } from "../content";
import { Section, FadeItem } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";

type Errors = Partial<Record<"name" | "email" | "company" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(values.email)) next.email = "Please enter a valid email.";
    if (!values.company.trim()) next.company = "Please enter your company.";
    if (!values.message.trim()) next.message = "Tell me a little about the process.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // TODO: wire to Formspree/Resend/email. For now we log and show success.
    console.log("Contact enquiry:", values);
    setSubmitted(true);
  }

  function field(name: keyof typeof values) {
    return {
      value: values[name],
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues((v) => ({ ...v, [name]: e.target.value }));
        if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
      },
      "aria-invalid": Boolean(errors[name]),
      "aria-describedby": errors[name] ? `${name}-error` : undefined,
    };
  }

  const inputCls =
    "mt-2 w-full rounded-lg border border-hairline bg-paper px-4 py-3 text-ink placeholder:text-gray-3 transition-colors focus:border-accent focus-visible:outline-none";
  const labelCls = "font-mono text-[0.72rem] uppercase tracking-label text-gray-2";

  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <FadeItem>
            <SectionHeading
              number={CONTACT.number}
              kicker={CONTACT.kicker}
              title={CONTACT.heading}
            />
          </FadeItem>
          <FadeItem>
            <p className="mt-7 text-lg leading-relaxed text-gray-1">{CONTACT.copy}</p>
          </FadeItem>
          <FadeItem>
            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-ink transition-colors hover:text-accent"
              >
                <Mail size={18} className="text-accent" />
                <span className="font-medium">{CONTACT.email}</span>
              </a>
              <p className="flex items-start gap-3 text-sm text-gray-2">
                <Clock size={18} className="mt-0.5 shrink-0 text-accent" />
                {CONTACT.responseLine}
              </p>
            </div>
          </FadeItem>
        </div>

        <FadeItem className="lg:col-span-7">
          {submitted ? (
            <div
              role="status"
              className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-accent/30 bg-accent-50/60 p-10 text-center"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-paper">
                <Check size={28} />
              </span>
              <p className="mt-5 max-w-md font-display text-xl leading-relaxed text-ink">
                {CONTACT.success}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-hairline bg-white/60 p-6 shadow-card sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelCls}>
                    {CONTACT.fields.name}
                  </label>
                  <input id="name" type="text" className={inputCls} {...field("name")} />
                  <FieldError id="name-error" msg={errors.name} />
                </div>
                <div>
                  <label htmlFor="email" className={labelCls}>
                    {CONTACT.fields.email}
                  </label>
                  <input id="email" type="email" className={inputCls} {...field("email")} />
                  <FieldError id="email-error" msg={errors.email} />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="company" className={labelCls}>
                  {CONTACT.fields.company}
                </label>
                <input id="company" type="text" className={inputCls} {...field("company")} />
                <FieldError id="company-error" msg={errors.company} />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className={labelCls}>
                  {CONTACT.fields.message}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`${inputCls} resize-y`}
                  {...field("message")}
                />
                <FieldError id="message-error" msg={errors.message} />
              </div>

              <div className="mt-7">
                <Button type="submit" variant="primary" className="w-full sm:w-auto">
                  {CONTACT.submit}
                </Button>
              </div>
            </form>
          )}
        </FadeItem>
      </div>
    </Section>
  );
}

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return (
    <p id={id} className="mt-2 flex items-center gap-1.5 text-sm text-[#B4231F]">
      <AlertCircle size={14} />
      {msg}
    </p>
  );
}

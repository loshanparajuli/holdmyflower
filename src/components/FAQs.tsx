// import { Badge } from "@/components/ui/badge";

import SectionTitle from "./SectionTitle";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Faq5Props {
  badge?: string;
  heading?: string;
  description?: string;
  faqs?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    question: "What is a FAQ and why is it important?",
    answer:
      "About 64% (source) of people leave a video merely at 0:10. We make sure that doesn't happen with your content. We'll repurpose your existing content to go parallelly on TikTok, Instagram, LinkedIn, and X. We ensure it follows the best hook, crazy retention, and enough reasons to not quit watching. We sell accountability, authority, and execution.",
  },
  {
    question: "Cost of service and deliverables",
    answer:
      "Deliverables will be ready in about 3–5 days depending on the scope and urgency. We’re always open for forehead-async communication for time-sensitive projects. BTW, urgent projects don’t add up extra cost because we understand not every day is an urgent day. Regarding pricing, it’s simple and straightforward — see here. You didn’t ask, but check this for the refund agreement. Don’t worry, we explicitly write this in our SLAs.",
  },
  {
    question: "Wait, so much drama. What are SLAs?",
    answer:
      "SLA stands for Service Level Agreement. It's a contract between a service provider and a client that outlines the expected level of service — including response times, resolution times, and other performance metrics.",
  },
  {
    question: "Justify your pricing",
    answer:
      "One word: it’s worth every single penny. <br /> Many words: we charge you dollars for the series of services we provide. We’re essentially building a system that saves you time and lets you sleep better at night. <br /> We leverage content creation with the latest developments in AI/ML to stay ahead in the game. The talents we work with are literally #1 in the country.",
  },
  {
    question: "Do you offer free consultation?",
    answer:
      "Sometimes. I’d rather enlighten instead of doomscroll. Check my calendar here — weekends, 9–12 AM EST.",
  },
];


const Faqs = ({
  heading = "Common Questions & Answers",
  description = "Find out all the essential details about our platform and how it can serve your needs.",
  faqs = defaultFaqs,
}: Faq5Props) => {
  return (
    <section className=" bg-white px-4">
      <SectionTitle title={"FAQs"}  />
      <div className="container">
        <div className="text-center">
          {/* <Badge className="text-xs font-medium">{badge}</Badge> */}
          <h1 className="mt-4 text-4xl font-semibold text-black">{heading}</h1>
          <p className="text-muted-foreground mt-6 font-medium">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-xl">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 flex gap-4">
              <span className="bg-secondary text-primary flex size-6 shrink-0 items-center justify-center rounded-sm font-mono text-xs">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between ">
                  <h3 className="font-medium text-black">{faq.question}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Faqs };
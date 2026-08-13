import { faqItems } from '~/config/faq'

export interface FaqSchemaItem {
  question: string
  answer: string
}

export const faqSchemaItems: FaqSchemaItem[] = faqItems.map((i) => ({
  question: i.question,
  answer: i.answer
}))

export function buildFaqPageSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqSchemaItems.map((i) => ({
      '@type': 'Question',
      name: i.question,
      acceptedAnswer: { '@type': 'Answer', text: i.answer }
    }))
  }
}

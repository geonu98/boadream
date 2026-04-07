import { z } from "zod";

export const faqSchema = z.object({
  question: z.string().trim().min(2, "질문을 입력해주세요.").max(200),
  answer: z.string().trim().min(2, "답변을 입력해주세요.").max(5000),
  display_order: z.coerce.number().int().min(0).default(0),
  is_published: z.boolean().default(true),
  show_on_home: z.boolean().default(false),
});

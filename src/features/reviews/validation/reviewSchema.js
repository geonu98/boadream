import { z } from "zod";

export const reviewSchema = z.object({
  author_name: z.string().trim().min(2, "작성자명을 2자 이상 입력해주세요.").max(50),
  author_label: z.string().trim().max(50).optional().or(z.literal("")),
  headline: z.string().trim().min(2, "한 줄 제목을 입력해주세요.").max(120),
  body: z.string().trim().min(2, "후기 내용을 입력해주세요.").max(2000),
  display_order: z.coerce.number().int().min(0).default(0),
  is_published: z.boolean().default(true),
  show_on_home: z.boolean().default(false),
});

import { z } from "zod";

export const noticeSchema = z.object({
  category: z.string().trim().min(1, "카테고리를 입력해주세요.").max(30),
  title: z.string().trim().min(2, "제목을 2자 이상 입력해주세요.").max(120),
  slug: z
    .string()
    .trim()
    .min(2, "슬러그를 입력해주세요.")
    .max(120)
    .regex(/^[a-z0-9가-힣-]+$/, "슬러그는 영문 소문자, 숫자, 한글, 하이픈만 사용할 수 있습니다."),
  summary: z.string().trim().min(2, "요약을 입력해주세요.").max(300),
  content: z.string().trim().min(2, "본문을 입력해주세요.").max(10000),
  is_published: z.boolean().default(true),
});

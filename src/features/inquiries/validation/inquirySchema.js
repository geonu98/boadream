import { z } from "zod";

const digitsOnly = (value) => value.replace(/\D/g, "");

export const inquirySchema = z.object({
  name: z.string().trim().min(2, "보호자 성함을 2자 이상 입력해주세요.").max(30),
  phone: z
    .string()
    .trim()
    .refine((value) => digitsOnly(value).length >= 7, "연락처를 조금 더 정확히 입력해주세요."),
  service_type: z.string().trim().min(1, "희망 서비스를 선택해주세요."),
  care_grade: z.string().trim().min(1, "장기요양등급 여부를 선택해주세요."),
  message: z.string().trim().min(2, "상담 내용을 2자 이상 입력해주세요.").max(1000),
});

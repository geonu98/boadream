import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { inquiryService } from "../../features/inquiries/api/inquiryService";
import { inquirySchema } from "../../features/inquiries/validation/inquirySchema";
import { useScrollToFirstError } from "../../shared/hooks/useScrollToFirstError";

const defaultValues = {
  name: "",
  phone: "",
  service_type: "방문요양 상담",
  care_grade: "등급 없음",
  message: "",
};

function normalizePhoneNumber(value) {
  return value.replace(/\s+/g, "").trim();
}

function getDigitsCount(value) {
  return normalizePhoneNumber(value).replace(/\D/g, "").length;
}

export default function ContactForm() {
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitState, setSubmitState] = useState("idle");
  const formRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, submitCount },
  } = useForm({
    resolver: zodResolver(inquirySchema),
    defaultValues,
  });

  useScrollToFirstError(formRef, errors, submitCount);

  const messageValue = watch("message") ?? "";
  const phoneValue = watch("phone") ?? "";
  const phoneDigits = getDigitsCount(phoneValue);

  const inquiryMutation = useMutation({
    mutationFn: async (values) =>
      inquiryService.createInquiry({
        ...values,
        phone: normalizePhoneNumber(values.phone),
      }),
    onSuccess: () => {
      setSubmitState("success");
      setSubmitMessage("상담 내용을 남겨주셨습니다. 확인 후 순차적으로 연락드리겠습니다.");
      reset(defaultValues);
    },
    onError: (error) => {
      setSubmitState("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "상담 내용을 저장하지 못했습니다. 잠시 후 다시 시도해주세요.",
      );
    },
  });

  const onSubmit = handleSubmit((values) => {
    setSubmitState("idle");
    setSubmitMessage("");
    inquiryMutation.mutate(values);
  });

  return (
    <form className="contact-form" onSubmit={onSubmit} ref={formRef} noValidate>
      <div className="contact-form-grid">
        <label className={`contact-field${errors.name ? " has-error" : ""}`}>
          <span>보호자 성함</span>
          <input
            type="text"
            placeholder="성함을 입력해주세요"
            autoComplete="name"
            maxLength={30}
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
          />
          {errors.name ? <small className="contact-field-error">{errors.name.message}</small> : null}
        </label>

        <label className={`contact-field${errors.phone ? " has-error" : ""}`}>
          <span>연락처</span>
          <input
            type="tel"
            placeholder="연락 가능한 번호를 입력해주세요"
            autoComplete="tel"
            inputMode="numeric"
            maxLength={20}
            aria-invalid={Boolean(errors.phone)}
            {...register("phone")}
          />
          {errors.phone ? (
            <small className="contact-field-error">{errors.phone.message}</small>
          ) : (
            <div className="contact-field-meta">
              <small className="contact-field-hint">숫자만 적어도 접수됩니다.</small>
              <small className="contact-char-count">{phoneDigits >= 7 ? `${phoneDigits}자리 입력됨` : "최소 7자리"}</small>
            </div>
          )}
        </label>

        <label className={`contact-field${errors.service_type ? " has-error" : ""}`}>
          <span>희망 서비스</span>
          <select aria-invalid={Boolean(errors.service_type)} {...register("service_type")}>
            <option>방문요양 상담</option>
            <option>방문목욕 상담</option>
            <option>이용 절차 안내</option>
            <option>기타 문의</option>
          </select>
          {errors.service_type ? (
            <small className="contact-field-error">{errors.service_type.message}</small>
          ) : null}
        </label>

        <label className={`contact-field${errors.care_grade ? " has-error" : ""}`}>
          <span>장기요양등급 여부</span>
          <select aria-invalid={Boolean(errors.care_grade)} {...register("care_grade")}>
            <option>등급 없음</option>
            <option>신청 예정</option>
            <option>판정 진행 중</option>
            <option>1~2등급</option>
            <option>3~5등급</option>
            <option>인지지원등급</option>
          </select>
          {errors.care_grade ? (
            <small className="contact-field-error">{errors.care_grade.message}</small>
          ) : null}
        </label>
      </div>

      <label className={`contact-field contact-field-textarea${errors.message ? " has-error" : ""}`}>
        <span>상담 내용</span>
        <textarea
          rows="4"
          placeholder="어르신 상황이나 궁금한 내용을 간단히 남겨주세요"
          maxLength={1000}
          aria-invalid={Boolean(errors.message)}
          {...register("message")}
        />
        {errors.message ? (
          <small className="contact-field-error">{errors.message.message}</small>
        ) : (
          <div className="contact-field-meta">
            <small className="contact-field-hint">짧게 남겨도 접수됩니다. 상담 중 필요한 내용은 전화로 다시 확인드립니다.</small>
            <small className="contact-char-count">{messageValue.length}/1000</small>
          </div>
        )}
      </label>

      <div className="contact-form-actions">
        <button
          type="submit"
          className="button button-solid button-small"
          disabled={inquiryMutation.isPending}
        >
          {inquiryMutation.isPending ? "제출 중..." : "상담 내용 제출하기"}
        </button>
        <a className="button button-outline button-small" href="tel:023520088">
          전화 상담 연결
        </a>
      </div>

      <p className="contact-form-submit-tip">급한 문의는 전화 상담을 먼저 이용하시면 더 빠르게 안내받을 수 있습니다.</p>

      {submitMessage ? (
        <p
          className={`contact-form-feedback${submitState === "error" ? " is-error" : " is-success"}`}
          role={submitState === "error" ? "alert" : "status"}
        >
          {submitMessage}
        </p>
      ) : null}
    </form>
  );
}

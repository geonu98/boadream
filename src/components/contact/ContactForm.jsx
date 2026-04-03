import { useState } from "react";

const initialForm = {
  name: "",
  phone: "",
  service: "방문요양 상담",
  grade: "등급 없음",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-grid">
        <label className="contact-field">
          <span>보호자 성함</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="성함을 입력해주세요"
            required
          />
        </label>

        <label className="contact-field">
          <span>연락처</span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="연락 가능한 번호를 입력해주세요"
            required
          />
        </label>

        <label className="contact-field">
          <span>희망 서비스</span>
          <select name="service" value={formData.service} onChange={handleChange}>
            <option>방문요양 상담</option>
            <option>방문목욕 상담</option>
            <option>이용 절차 안내</option>
            <option>기타 문의</option>
          </select>
        </label>

        <label className="contact-field">
          <span>장기요양등급 여부</span>
          <select name="grade" value={formData.grade} onChange={handleChange}>
            <option>등급 없음</option>
            <option>신청 예정</option>
            <option>판정 진행 중</option>
            <option>1~2등급</option>
            <option>3~5등급</option>
            <option>인지지원등급</option>
          </select>
        </label>
      </div>

      <label className="contact-field contact-field-textarea">
        <span>상담 내용</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="어르신 상황이나 궁금한 내용을 간단히 남겨주세요"
          required
        />
      </label>

      <div className="contact-form-actions">
        <button type="submit" className="button button-solid button-small">
          상담 내용 제출하기
        </button>
        <a className="button button-outline button-small" href="tel:023520088">
          전화 상담 연결
        </a>
      </div>

      {isSubmitted ? (
        <p className="contact-form-feedback">
          상담 내용을 남겨주셨습니다. 확인 후 순차적으로 연락드리겠습니다.
        </p>
      ) : null}
    </form>
  );
}

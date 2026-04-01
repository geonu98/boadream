function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
}) {
  const alignment =
    align === 'center'
      ? 'mx-auto max-w-3xl text-center items-center'
      : 'max-w-3xl text-left items-start'
  const eyebrowStyle =
    tone === 'dark'
      ? 'border-white/15 bg-white/8 text-[#ffd8c2]'
      : 'border-[#f4ddd1] bg-white text-[#df7a4f]'
  const titleStyle = tone === 'dark' ? 'text-white' : 'text-[#5a3724]'
  const descriptionStyle =
    tone === 'dark' ? 'text-white/76' : 'text-[#856658]'

  return (
    <div className={`mb-10 flex flex-col gap-4 lg:mb-14 ${alignment}`}>
      <span
        className={`inline-flex rounded-full border px-4 py-1 text-xs font-semibold tracking-[0.24em] uppercase ${eyebrowStyle}`}
      >
        {eyebrow}
      </span>
      <div className="space-y-4">
        <h2
          className={`font-serif-ko text-3xl leading-[1.32] sm:text-4xl lg:text-[2.8rem] lg:leading-[1.34] ${titleStyle}`}
        >
          {title}
        </h2>
        <p className={`text-base leading-8 sm:text-lg ${descriptionStyle}`}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default SectionHeading

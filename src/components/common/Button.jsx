import { Link } from "react-router-dom";

export default function Button({
  href,
  children,
  variant = "solid",
  size = "small",
  className = "",
  ...props
}) {
  const classes = [
    "button",
    variant === "solid" && "button-solid",
    variant === "outline" && "button-outline",
    variant === "dark" && "button-dark",
    size === "small" && "button-small",
    size === "large" && "button-large",
    size === "wide" && "button-wide",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href?.startsWith("/")) {
    return (
      <Link className={classes} to={href} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

"use client";

import Link from "next/link";

export default function Button({
  label,
  variant = "default",
  addOn,
  href,
  onClick = null,
  target,
  className,
}) {

  const classes = ["button"];

  if (variant)
    classes.push("button-variant_" + variant);

  if (addOn)
    classes.push("button-addOn_" + addOn);

  return (
    <>
      {href && (
        <Link
          href={href}
          target={target || "_self"}
          className={`${classes.join(" ")} ${className}`}
          onClick={onClick}
        >
          <span />{label}
        </Link>
      )}
      {!href && !target && (
        <button
          className={`${classes.join(" ")} ${className}`}
          onClick={onClick}
          htmlFor={target}
        >
          <span />{label}
        </button >
      )
      }
      {!href && target && (
        <label
          className={`${buttonClasses.join(" ")} ${className}`}
          onClick={onClick}
          htmlFor={target}
        >
          <span />{label}
        </label >
      )
      }
    </>
  );
}

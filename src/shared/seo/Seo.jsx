import { useEffect } from "react";
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  SITE_NAME,
  SITE_URL,
  defaultSeo,
  localBusinessSchema,
  pageSeo,
} from "./seoConfig";

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertJsonLd(selector, payload) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("script");
    document.head.appendChild(element);
  }

  element.setAttribute("type", "application/ld+json");
  element.setAttribute("data-seo-schema", "local-business");
  element.textContent = JSON.stringify(payload);
}

function buildAbsoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export default function Seo({
  page,
  title,
  description,
  ogTitle,
  ogDescription,
  canonicalPath,
  robots,
  image,
  type,
  schema,
}) {
  useEffect(() => {
    const config = {
      ...defaultSeo,
      ...(page ? pageSeo[page] : {}),
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      ...(ogTitle ? { ogTitle } : {}),
      ...(ogDescription ? { ogDescription } : {}),
      ...(canonicalPath ? { canonicalPath } : {}),
      ...(robots ? { robots } : {}),
      ...(image ? { image } : {}),
      ...(type ? { type } : {}),
    };

    const canonicalUrl = buildAbsoluteUrl(config.canonicalPath || "/");
    const imageUrl = config.image || DEFAULT_OG_IMAGE;
    const shouldIndex = (config.robots || "index,follow").includes("index");

    document.title = config.title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: config.description,
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: config.robots || "index,follow",
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: config.type || "website",
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: SITE_NAME,
    });
    upsertMeta('meta[property="og:locale"]', {
      property: "og:locale",
      content: "ko_KR",
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: config.ogTitle || config.title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: config.ogDescription || config.description,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: imageUrl,
    });
    upsertMeta('meta[property="og:image:width"]', {
      property: "og:image:width",
      content: "1200",
    });
    upsertMeta('meta[property="og:image:height"]', {
      property: "og:image:height",
      content: "630",
    });
    upsertMeta('meta[property="og:image:alt"]', {
      property: "og:image:alt",
      content: DEFAULT_OG_IMAGE_ALT,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: config.ogTitle || config.title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: config.ogDescription || config.description,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: imageUrl,
    });
    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });

    const existingSchema = document.head.querySelector('script[data-seo-schema="local-business"]');
    if (shouldIndex) {
      const schemaPayload = schema || {
        ...localBusinessSchema,
        url: canonicalUrl,
      };
      upsertJsonLd('script[data-seo-schema="local-business"]', schemaPayload);
    } else if (existingSchema) {
      existingSchema.remove();
    }
  }, [canonicalPath, description, image, ogDescription, ogTitle, page, robots, schema, title, type]);

  return null;
}

"use server";

import { defaultLocale } from "@/localization/i18n/config";
import { cookies } from "next/headers";

const COOKIE_NAME = "SERKING_DEV_LOCALE";
const COOKIE_MAX_AGE = 30 * 24 * 60 * 60; // 30 days in seconds

export async function getUserLocale() {
  return cookies().get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale) {
  "use server";
  cookies().set(COOKIE_NAME, locale, {
    path: "/",
    sameSite: "strict",
    maxAge: COOKIE_MAX_AGE,
  });
}

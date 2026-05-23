# Авто_рихтовка Industrial Design System

## Direction

Новый визуальный язык строится вокруг кузовного цеха: графитовый металл, бетон, контрольные линии, янтарная разметка безопасности и синий свет инспекционных ламп. Сайт должен ощущаться как небольшой уверенный сервис, где сначала смотрят повреждение, объясняют объём работ и только потом начинают ремонт.

## Tokens

- Background: `#090B0F`
- Surfaces: `#10141A`, `#171D25`, `#222A34`
- Text on dark: `#F4EFE3`
- Light plates: `#F4EFE3`, `#DED3BF`
- CTA: `#F59E0B`
- Technical accent: `#2DD4FF`
- Rust/corrosion accent: `#B45309`
- Radius: 8px максимум для карточек и контролов

## Components

- Header: floating workshop rail with compact status markers.
- Hero: full-bleed generated industrial workshop photo, copy on the darker negative-space side.
- Cards: steel cards on dark sections, light metal-plate cards for pricing and FAQs.
- Sections: visible diagnostic grid, thin rail labels, numbered markers, no decorative blobs.
- CTA: safety-amber buttons with visible focus and hover states.
- Photos: generated thematic photos are used as atmosphere, while before/after remains explicitly prepared for real work photos.

## UX Rules

- Keep contacts visible: phone, map, lead form.
- Do not add unsupported claims, discounts, insurance, evacuation, replacement car, or certificates.
- Keep mobile single-column and large tap targets.
- Use 150-300ms transitions and respect `prefers-reduced-motion`.
- Avoid racing, luxury showroom, red overload, and generic smiling mechanic stock imagery.

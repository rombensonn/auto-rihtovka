import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { LeadPayload } from "@/lib/validation";

export type StoredLead = {
  id: string;
  createdAt: string;
  ip: string;
  payload: LeadPayload;
  delivery: "local" | "telegram-fallback";
};

const dataDir = path.join(process.cwd(), "data");
const leadsFile = path.join(dataDir, "leads.json");

export async function saveLead(record: StoredLead) {
  await mkdir(dataDir, { recursive: true });

  let leads: StoredLead[] = [];
  try {
    const content = await readFile(leadsFile, "utf8");
    const parsed = JSON.parse(content) as StoredLead[];
    if (Array.isArray(parsed)) leads = parsed;
  } catch {
    leads = [];
  }

  leads.push(record);
  await writeFile(leadsFile, `${JSON.stringify(leads, null, 2)}\n`, "utf8");
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface Field {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "date" | "number" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

interface Props {
  fields: Field[];
  submitLabel?: string;
  whatsAppPrefix?: string;
}

export function EnquiryForm({ fields, submitLabel = "Send Enquiry", whatsAppPrefix = "New enquiry" }: Props) {
  const [data, setData] = useState<Record<string, string>>({});
  const update = (k: string, v: string) => setData((d) => ({ ...d, [k]: v }));

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = fields.map((f) => `${f.label}: ${data[f.name] || "-"}`).join("\n");
    const text = encodeURIComponent(`${whatsAppPrefix}\n\n${lines}`);
    window.open(`https://wa.me/918980200401?text=${text}`, "_blank");
    toast.success("Enquiry sent — we'll be in touch shortly.");
    setData({});
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      {fields.map((f) => (
        <div key={f.name} className={f.type === "textarea" ? "sm:col-span-2" : ""}>
          <Label htmlFor={f.name} className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{f.label}{f.required && <span className="text-gold-deep"> *</span>}</Label>
          {f.type === "textarea" ? (
            <Textarea id={f.name} required={f.required} maxLength={1000} value={data[f.name] || ""} onChange={(e) => update(f.name, e.target.value)} placeholder={f.placeholder} className="mt-2" rows={4} />
          ) : f.type === "select" ? (
            <select id={f.name} required={f.required} value={data[f.name] || ""} onChange={(e) => update(f.name, e.target.value)} className="mt-2 w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
              <option value="">Select...</option>
              {f.options?.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          ) : (
            <Input id={f.name} type={f.type || "text"} required={f.required} maxLength={200} value={data[f.name] || ""} onChange={(e) => update(f.name, e.target.value)} placeholder={f.placeholder} className="mt-2" />
          )}
        </div>
      ))}
      <div className="sm:col-span-2 mt-2">
        <Button type="submit" variant="gold" size="lg">{submitLabel}</Button>
      </div>
    </form>
  );
}
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2, Save, ArrowLeft, ImagePlus, ShieldX } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSiteContent } from "@/hooks/useSiteContent";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const copy = {
  es: {
    title: "PANEL DE ADMINISTRACIÓN", subtitle: "Edita el contenido del sitio en tiempo real",
    back: "Volver", save: "Guardar cambios", saved: "Contenido actualizado", error: "No se pudo guardar",
    denied: "No tienes permisos de administrador", loading: "Verificando permisos...",
    heroSection: "Sección principal (Hero)", heroBadge: "Texto de la insignia", heroTitle: "Título del torneo",
    heroDate: "Fecha del contador", heroStream: "Enlace del stream", heroInfo: "Enlace de información",
    heroBg: "Imagen de fondo", heroLogo: "Logo del torneo",
    jerseySection: "Sección del Jersey", jerseyTitle: "Título", jerseySubtitle: "Subtítulo",
    jerseyBtn: "Texto del botón", jerseyLink: "Enlace del botón", jerseyImg: "Imagen del jersey",
    upload: "Subir imagen", imgError: "La imagen debe ser JPG, PNG o WebP de máximo 5MB",
  },
  en: {
    title: "ADMIN PANEL", subtitle: "Edit site content in real time",
    back: "Back", save: "Save changes", saved: "Content updated", error: "Could not save",
    denied: "You don't have admin permissions", loading: "Checking permissions...",
    heroSection: "Hero section", heroBadge: "Badge text", heroTitle: "Tournament title",
    heroDate: "Countdown date", heroStream: "Stream link", heroInfo: "Info link",
    heroBg: "Background image", heroLogo: "Tournament logo",
    jerseySection: "Jersey section", jerseyTitle: "Title", jerseySubtitle: "Subtitle",
    jerseyBtn: "Button text", jerseyLink: "Button link", jerseyImg: "Jersey image",
    upload: "Upload image", imgError: "Image must be JPG, PNG or WebP, up to 5MB",
  },
};

// Resize any image to a max-width JPEG/PNG data URL
const resizeImage = (file: File, maxWidth: number): Promise<string> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const scale = Math.min(1, maxWidth / img.width);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      canvas.getContext("2d")!.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      const isPng = file.type === "image/png";
      resolve(canvas.toDataURL(isPng ? "image/png" : "image/jpeg", 0.85));
    };
    img.onerror = reject;
    img.src = url;
  });

interface ImageFieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  maxWidth?: number;
  uploadLabel: string;
  errorLabel: string;
}

const ImageField = ({ label, value, onChange, maxWidth = 1600, uploadLabel, errorLabel }: ImageFieldProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const onFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type) || file.size > 5 * 1024 * 1024) {
      toast.error(errorLabel);
      return;
    }
    onChange(await resizeImage(file, maxWidth));
  };
  return (
    <div className="space-y-2 md:col-span-2">
      <Label>{label}</Label>
      <div className="flex items-center gap-4">
        {value && <img src={value} alt={label} className="h-16 rounded border border-border object-contain" />}
        <Button type="button" variant="outline" size="sm" onClick={() => ref.current?.click()}>
          <ImagePlus className="h-4 w-4 mr-2" /> {uploadLabel}
        </Button>
        <input ref={ref} type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={onFile} />
      </div>
    </div>
  );
};

const Admin = () => {
  const { user, loading } = useAuth();
  const { language } = useLanguage();
  const c = copy[language];
  const navigate = useNavigate();
  const { content, loaded, setValue } = useSiteContent();

  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [saving, setSaving] = useState(false);
  const [hero, setHero] = useState({ badge: "", title: "", date: "", stream: "", info: "", bg: "", logo: "" });
  const [jersey, setJersey] = useState({ title: "", subtitle: "", button: "", link: "", image: "" });

  useEffect(() => {
    if (!loading && !user) navigate("/auth");
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!user) return;
    supabase
      .rpc("has_role", { _user_id: user.id, _role: "admin" })
      .then(({ data }) => setIsAdmin(!!data));
  }, [user]);

  useEffect(() => {
    if (!loaded) return;
    const h = content.hero || {};
    const j = content.jersey || {};
    setHero({
      badge: h.badge || "", title: h.title || "", date: h.date || "",
      stream: h.stream || "", info: h.info || "", bg: h.bg || "", logo: h.logo || "",
    });
    setJersey({
      title: j.title || "", subtitle: j.subtitle || "", button: j.button || "",
      link: j.link || "", image: j.image || "",
    });
  }, [loaded]); // eslint-disable-line react-hooks/exhaustive-deps

  const onSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const r1 = await setValue("hero", hero);
    const r2 = await setValue("jersey", jersey);
    setSaving(false);
    if (r1.error || r2.error) {
      toast.error(c.error);
      return;
    }
    toast.success(c.saved);
  };

  if (loading || !user || isAdmin === null || !loaded) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground">{c.loading}</p>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-3">
        <ShieldX className="h-10 w-10 text-destructive" />
        <p className="text-foreground">{c.denied}</p>
        <Button variant="outline" onClick={() => navigate("/")}>{c.back}</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 md:px-8 pt-28 pb-20 max-w-5xl">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="h-4 w-4" /> {c.back}
        </button>

        <div className="mb-8">
          <h1 className="font-monument tracking-wide text-2xl md:text-3xl text-foreground">{c.title}</h1>
          <p className="text-sm text-muted-foreground">{c.subtitle}</p>
        </div>

        <form onSubmit={onSave} className="space-y-8">
          <section className="rounded-2xl border border-border bg-card p-6 md:p-10 space-y-6">
            <h2 className="font-monument tracking-wide text-xl text-foreground">{c.heroSection}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>{c.heroBadge}</Label>
                <Input value={hero.badge} onChange={(e) => setHero((h) => ({ ...h, badge: e.target.value }))} />
              </div>
              <div className="space-y-2">
                <Label>{c.heroTitle}</Label>
                <Input value={hero.title} onChange={(e) => setHero((h) => ({ ...h, title: e.target.value }))} />
              </div>
              <div className="space-y-2">
                <Label>{c.heroDate}</Label>
                <Input type="datetime-local" value={hero.date} onChange={(e) => setHero((h) => ({ ...h, date: e.target.value }))} />
              </div>
              <div className="space-y-2">
                <Label>{c.heroStream}</Label>
                <Input value={hero.stream} onChange={(e) => setHero((h) => ({ ...h, stream: e.target.value }))} placeholder="https://..." />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label>{c.heroInfo}</Label>
                <Input value={hero.info} onChange={(e) => setHero((h) => ({ ...h, info: e.target.value }))} placeholder="https://..." />
              </div>
              <ImageField label={c.heroBg} value={hero.bg} onChange={(v) => setHero((h) => ({ ...h, bg: v }))} uploadLabel={c.upload} errorLabel={c.imgError} />
              <ImageField label={c.heroLogo} value={hero.logo} onChange={(v) => setHero((h) => ({ ...h, logo: v }))} maxWidth={800} uploadLabel={c.upload} errorLabel={c.imgError} />
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6 md:p-10 space-y-6">
            <h2 className="font-monument tracking-wide text-xl text-foreground">{c.jerseySection}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>{c.jerseyTitle}</Label>
                <Input value={jersey.title} onChange={(e) => setJersey((j) => ({ ...j, title: e.target.value }))} />
              </div>
              <div className="space-y-2">
                <Label>{c.jerseySubtitle}</Label>
                <Input value={jersey.subtitle} onChange={(e) => setJersey((j) => ({ ...j, subtitle: e.target.value }))} />
              </div>
              <div className="space-y-2">
                <Label>{c.jerseyBtn}</Label>
                <Input value={jersey.button} onChange={(e) => setJersey((j) => ({ ...j, button: e.target.value }))} />
              </div>
              <div className="space-y-2">
                <Label>{c.jerseyLink}</Label>
                <Input value={jersey.link} onChange={(e) => setJersey((j) => ({ ...j, link: e.target.value }))} placeholder="https://..." />
              </div>
              <ImageField label={c.jerseyImg} value={jersey.image} onChange={(v) => setJersey((j) => ({ ...j, image: v }))} uploadLabel={c.upload} errorLabel={c.imgError} />
            </div>
          </section>

          <div className="flex justify-end">
            <Button type="submit" disabled={saving} className="rounded-full px-8">
              {saving ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
              {c.save}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Admin;

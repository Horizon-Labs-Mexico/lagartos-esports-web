import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Camera, Loader2, Save, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const GAMES = ["EA FC", "F1", "Overwatch", "Chess"];

const copy = {
  es: {
    title: "MI PERFIL", subtitle: "Personaliza cómo te ve la comunidad Lagartos",
    back: "Volver", photo: "Cambiar foto", username: "Nombre de usuario", displayName: "Nombre visible",
    bio: "Biografía", bioPh: "Cuéntale a la comunidad sobre ti...", game: "Juego favorito", country: "País",
    email: "Correo", member: "Miembro desde", save: "Guardar cambios", saved: "Perfil actualizado",
    error: "No se pudo guardar el perfil", imgError: "La imagen debe ser JPG, PNG o WebP de máximo 5MB",
    taken: "Ese nombre de usuario ya está en uso", none: "Sin seleccionar",
  },
  en: {
    title: "MY PROFILE", subtitle: "Customize how the Lagartos community sees you",
    back: "Back", photo: "Change photo", username: "Username", displayName: "Display name",
    bio: "Bio", bioPh: "Tell the community about yourself...", game: "Favorite game", country: "Country",
    email: "Email", member: "Member since", save: "Save changes", saved: "Profile updated",
    error: "Could not save profile", imgError: "Image must be JPG, PNG or WebP, up to 5MB",
    taken: "That username is already taken", none: "Not selected",
  },
};

const schema = z.object({
  username: z.string().trim().min(3, "Min 3").max(30, "Max 30").regex(/^[a-zA-Z0-9_.]+$/, "a-z, 0-9, _ ."),
  displayName: z.string().trim().max(50),
  bio: z.string().trim().max(300),
  country: z.string().trim().max(50),
  game: z.string().max(30),
});

// Resize image to a small square JPEG data URL for the avatar
const resizeImage = (file: File, size = 192): Promise<string> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d")!;
      const s = Math.min(img.width, img.height);
      ctx.drawImage(img, (img.width - s) / 2, (img.height - s) / 2, s, s, 0, 0, size, size);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL("image/jpeg", 0.85));
    };
    img.onerror = reject;
    img.src = url;
  });

const Profile = () => {
  const { user, loading } = useAuth();
  const { language } = useLanguage();
  const c = copy[language];
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({ username: "", displayName: "", bio: "", country: "", game: "" });
  const [avatar, setAvatar] = useState<string | null>(null);
  const [createdAt, setCreatedAt] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!loading && !user) navigate("/auth");
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!user) return;
    const meta = user.user_metadata || {};
    supabase.from("profiles").select("*").eq("id", user.id).maybeSingle().then(({ data }) => {
      setForm({
        username: data?.username || meta.username || "",
        displayName: meta.display_name || meta.full_name || "",
        bio: meta.bio || "",
        country: meta.country || "",
        game: meta.favorite_game || "",
      });
      setAvatar(data?.avatar_url || meta.avatar_url || null);
      setCreatedAt(data?.created_at || user.created_at);
    });
  }, [user]);

  const onFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type) || file.size > 5 * 1024 * 1024) {
      toast.error(c.imgError);
      return;
    }
    setAvatar(await resizeImage(file));
  };

  const onSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.errors.forEach((er) => (errs[er.path[0] as string] = er.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSaving(true);
    const v = parsed.data;
    const { error: pErr } = await supabase
      .from("profiles")
      .update({ username: v.username, avatar_url: avatar })
      .eq("id", user.id);
    const { error: mErr } = await supabase.auth.updateUser({
      data: { username: v.username, display_name: v.displayName, bio: v.bio, country: v.country, favorite_game: v.game },
    });
    setSaving(false);
    if (pErr || mErr) {
      toast.error(pErr?.code === "23505" ? c.taken : c.error);
      return;
    }
    toast.success(c.saved);
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const initials = (form.displayName || form.username || user?.email || "L").slice(0, 2).toUpperCase();

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
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

        <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
          <div className="h-32 md:h-40 bg-gradient-to-r from-primary/30 via-primary/10 to-transparent border-b border-border" />
          <div className="px-6 md:px-10 pb-8 -mt-16 flex flex-col md:flex-row md:items-end gap-6">
            <div className="relative w-fit">
              <Avatar className="h-32 w-32 border-4 border-background ring-2 ring-primary">
                {avatar && <AvatarImage src={avatar} alt={form.username} className="object-cover" />}
                <AvatarFallback className="bg-secondary text-primary text-3xl font-monument">{initials}</AvatarFallback>
              </Avatar>
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                aria-label={c.photo}
                className="absolute bottom-1 right-1 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90"
              >
                <Camera className="h-5 w-5" />
              </button>
              <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={onFile} />
            </div>
            <div className="flex-1">
              <h1 className="font-monument tracking-wide text-2xl md:text-3xl text-foreground">
                {form.displayName || form.username || c.title}
              </h1>
              <p className="text-primary">@{form.username}</p>
              {createdAt && (
                <p className="text-sm text-muted-foreground mt-1">
                  {c.member} {new Date(createdAt).toLocaleDateString(language === "es" ? "es-MX" : "en-US", { month: "long", year: "numeric" })}
                </p>
              )}
            </div>
          </div>
        </div>

        <form onSubmit={onSave} className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-10 space-y-6">
          <div>
            <h2 className="font-monument tracking-wide text-xl text-foreground">{c.title}</h2>
            <p className="text-sm text-muted-foreground">{c.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="username">{c.username}</Label>
              <Input id="username" value={form.username} onChange={set("username")} maxLength={30} />
              {errors.username && <p className="text-xs text-destructive">{errors.username}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="displayName">{c.displayName}</Label>
              <Input id="displayName" value={form.displayName} onChange={set("displayName")} maxLength={50} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="game">{c.game}</Label>
              <select
                id="game"
                value={form.game}
                onChange={(e) => setForm((f) => ({ ...f, game: e.target.value }))}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
              >
                <option value="">{c.none}</option>
                {GAMES.map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">{c.country}</Label>
              <Input id="country" value={form.country} onChange={set("country")} maxLength={50} />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="bio">{c.bio}</Label>
              <Textarea id="bio" value={form.bio} onChange={set("bio")} placeholder={c.bioPh} maxLength={300} rows={4} />
              <p className="text-xs text-muted-foreground text-right">{form.bio.length}/300</p>
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label>{c.email}</Label>
              <Input value={user.email || ""} disabled />
            </div>
          </div>

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

export default Profile;

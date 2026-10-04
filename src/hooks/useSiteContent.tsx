import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

type ContentMap = Record<string, any>;

export const useSiteContent = () => {
  const [content, setContent] = useState<ContentMap>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.from("site_content" as any).select("key, value");
      const map: ContentMap = {};
      (data || []).forEach((row: any) => (map[row.key] = row.value));
      setContent(map);
      setLoaded(true);
    };
    load();

    const channel = supabase
      .channel("site_content_changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "site_content" }, (payload: any) => {
        setContent((prev) => {
          if (payload.eventType === "DELETE") {
            const next = { ...prev };
            delete next[payload.old.key];
            return next;
          }
          return { ...prev, [payload.new.key]: payload.new.value };
        });
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const get = useCallback(
    (key: string, field: string, fallback: string) => {
      const v = content[key]?.[field];
      return typeof v === "string" && v.length > 0 ? v : fallback;
    },
    [content]
  );

  const setValue = useCallback(async (key: string, value: Record<string, string>) => {
    const { error } = await supabase
      .from("site_content" as any)
      .upsert({ key, value, updated_at: new Date().toISOString() } as any, { onConflict: "key" });
    return { error: error as Error | null };
  }, []);

  return { content, loaded, get, setValue };
};
